"use client"

import { cn } from "@/lib/utils"
import { ReactNode, useEffect, useRef, useState } from "react"

interface MotionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  scale?: number
  once?: boolean
}

export function Motion({ 
  children, 
  className, 
  delay = 0, 
  duration = 600,
  y = 50,
  scale = 0.95,
  once = true 
}: MotionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : `opacity-0 translate-y-[${y}px] scale-[${scale}]`,
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function Stagger({ children, delay = 100 }: { children: ReactNode[], delay?: number }) {
  return (
    <>
      {children.map((child, index) => (
        <Motion key={index} delay={index * delay}>
          {child}
        </Motion>
      ))}
    </>
  )
}
