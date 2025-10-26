"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Motion, Stagger } from "@/components/ui/motion";
import { portfolioConfig } from "@/config/portfolio";
import { cn } from "@/lib/utils";

export function Skills() {
  const { skills, experience } = portfolioConfig;

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        {/* Skills Section */}
        <Motion>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>
        </Motion>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <Stagger>
            {skills.map((skillCategory, index) => (
              <Motion key={skillCategory.category} delay={index * 100}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-bold text-foreground">
                      {skillCategory.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="default"
                          className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Motion>
            ))}
          </Stagger>
        </div>

        {/* Experience Section */}
        <Motion delay={400}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Experience
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>
        </Motion>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

            <div className="space-y-8">
              <Stagger delay={150}>
                {experience.map((exp, index) => (
                  <Motion
                    key={`${exp.company}-${exp.position}`}
                    delay={index * 150}
                  >
                    <div className="relative flex items-start">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background ${
                          exp.current
                            ? "bg-accent shadow-lg shadow-accent/50"
                            : "bg-primary"
                        }`}
                      ></div>

                      {/* Content */}
                      <div className="ml-20 w-full">
                        <Card
                          className={cn(
                            "border-0 shadow-md hover:shadow-lg transition-all duration-300",
                            exp.current ? "bg-accent/10" : ""
                          )}
                        >
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                              <div>
                                <h4 className="text-xl font-bold text-foreground">
                                  {exp.position}
                                </h4>
                                <p className="text-lg text-primary font-semibold">
                                  {exp.company}
                                </p>
                              </div>
                              <div className="flex items-center gap-2 mt-2 md:mt-0">
                                <Badge variant="default">{exp.period}</Badge>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {exp.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </Motion>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
