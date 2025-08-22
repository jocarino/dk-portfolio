export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  border: string;
}

export interface Theme {
  name: string;
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
}

// Predefined themes - easily customizable
export const themes: Record<string, Theme> = {
  ocean: {
    name: "Ocean",
    colors: {
      light: {
        primary: "oklch(0.5 0.2 220)", // Deep blue
        secondary: "oklch(0.7 0.15 200)", // Light blue
        accent: "oklch(0.6 0.25 180)", // Cyan
        background: "oklch(0.98 0.005 220)", // Very light blue-white
        surface: "oklch(1 0 0)", // Pure white
        text: {
          primary: "oklch(0.2 0.02 220)", // Dark blue-gray
          secondary: "oklch(0.4 0.02 220)", // Medium blue-gray
          muted: "oklch(0.6 0.01 220)", // Light blue-gray
        },
        border: "oklch(0.9 0.01 220)", // Very light blue-gray
      },
      dark: {
        primary: "oklch(0.6 0.2 220)", // Bright blue
        secondary: "oklch(0.5 0.15 200)", // Medium blue
        accent: "oklch(0.7 0.25 180)", // Bright cyan
        background: "oklch(0.1 0.02 220)", // Very dark blue
        surface: "oklch(0.15 0.02 220)", // Dark blue-gray
        text: {
          primary: "oklch(0.95 0.005 220)", // Very light blue-white
          secondary: "oklch(0.8 0.01 220)", // Light blue-gray
          muted: "oklch(0.6 0.01 220)", // Medium blue-gray
        },
        border: "oklch(0.25 0.02 220)", // Dark blue-gray
      },
    },
  },
  sunset: {
    name: "Sunset",
    colors: {
      light: {
        primary: "oklch(0.6 0.25 30)", // Orange
        secondary: "oklch(0.7 0.2 60)", // Yellow-orange
        accent: "oklch(0.65 0.3 15)", // Red-orange
        background: "oklch(0.98 0.01 30)", // Warm white
        surface: "oklch(1 0 0)", // Pure white
        text: {
          primary: "oklch(0.2 0.02 30)", // Dark warm gray
          secondary: "oklch(0.4 0.02 30)", // Medium warm gray
          muted: "oklch(0.6 0.01 30)", // Light warm gray
        },
        border: "oklch(0.9 0.01 30)", // Very light warm gray
      },
      dark: {
        primary: "oklch(0.7 0.25 30)", // Bright orange
        secondary: "oklch(0.75 0.2 60)", // Bright yellow-orange
        accent: "oklch(0.75 0.3 15)", // Bright red-orange
        background: "oklch(0.1 0.02 30)", // Very dark warm
        surface: "oklch(0.15 0.02 30)", // Dark warm gray
        text: {
          primary: "oklch(0.95 0.005 30)", // Very light warm
          secondary: "oklch(0.8 0.01 30)", // Light warm gray
          muted: "oklch(0.6 0.01 30)", // Medium warm gray
        },
        border: "oklch(0.25 0.02 30)", // Dark warm gray
      },
    },
  },
  forest: {
    name: "Forest",
    colors: {
      light: {
        primary: "oklch(0.5 0.15 140)", // Forest green
        secondary: "oklch(0.6 0.12 120)", // Sage green
        accent: "oklch(0.55 0.2 160)", // Emerald
        background: "oklch(0.98 0.005 140)", // Very light green-white
        surface: "oklch(1 0 0)", // Pure white
        text: {
          primary: "oklch(0.2 0.02 140)", // Dark green-gray
          secondary: "oklch(0.4 0.02 140)", // Medium green-gray
          muted: "oklch(0.6 0.01 140)", // Light green-gray
        },
        border: "oklch(0.9 0.01 140)", // Very light green-gray
      },
      dark: {
        primary: "oklch(0.6 0.15 140)", // Bright green
        secondary: "oklch(0.65 0.12 120)", // Bright sage
        accent: "oklch(0.7 0.2 160)", // Bright emerald
        background: "oklch(0.1 0.02 140)", // Very dark green
        surface: "oklch(0.15 0.02 140)", // Dark green-gray
        text: {
          primary: "oklch(0.95 0.005 140)", // Very light green-white
          secondary: "oklch(0.8 0.01 140)", // Light green-gray
          muted: "oklch(0.6 0.01 140)", // Medium green-gray
        },
        border: "oklch(0.25 0.02 140)", // Dark green-gray
      },
    },
  },
  minimal: {
    name: "Minimal",
    colors: {
      light: {
        primary: "oklch(0.3 0 0)", // Dark gray
        secondary: "oklch(0.5 0 0)", // Medium gray
        accent: "oklch(0.4 0 0)", // Dark medium gray
        background: "oklch(1 0 0)", // Pure white
        surface: "oklch(0.98 0 0)", // Off white
        text: {
          primary: "oklch(0.15 0 0)", // Almost black
          secondary: "oklch(0.4 0 0)", // Medium gray
          muted: "oklch(0.6 0 0)", // Light gray
        },
        border: "oklch(0.85 0 0)", // Light gray
      },
      dark: {
        primary: "oklch(0.8 0 0)", // Light gray
        secondary: "oklch(0.6 0 0)", // Medium gray
        accent: "oklch(0.7 0 0)", // Light medium gray
        background: "oklch(0.08 0 0)", // Almost black
        surface: "oklch(0.12 0 0)", // Very dark gray
        text: {
          primary: "oklch(0.95 0 0)", // Almost white
          secondary: "oklch(0.7 0 0)", // Light gray
          muted: "oklch(0.5 0 0)", // Medium gray
        },
        border: "oklch(0.2 0 0)", // Dark gray
      },
    },
  },
  rose: {
    name: "Rose",
    colors: {
      light: {
        primary: "oklch(0.55 0.18 350)", // Soft rose pink
        secondary: "oklch(0.65 0.12 340)", // Light rose
        accent: "oklch(0.6 0.15 355)", // Rose accent
        background: "oklch(0.99 0.01 350)", // Very light rose-white
        surface: "oklch(1 0 0)", // Pure white
        text: {
          primary: "oklch(0.2 0.02 350)", // Dark rose-gray
          secondary: "oklch(0.4 0.02 350)", // Medium rose-gray
          muted: "oklch(0.6 0.01 350)", // Light rose-gray
        },
        border: "oklch(0.9 0.02 350)", // Very light rose-gray
      },
      dark: {
        primary: "oklch(0.7 0.18 350)", // Bright rose
        secondary: "oklch(0.65 0.12 340)", // Medium rose
        accent: "oklch(0.75 0.15 355)", // Bright rose accent
        background: "oklch(0.1 0.02 350)", // Very dark rose
        surface: "oklch(0.15 0.02 350)", // Dark rose-gray
        text: {
          primary: "oklch(0.95 0.005 350)", // Very light rose-white
          secondary: "oklch(0.8 0.01 350)", // Light rose-gray
          muted: "oklch(0.6 0.01 350)", // Medium rose-gray
        },
        border: "oklch(0.25 0.02 350)", // Dark rose-gray
      },
    },
  },
};

// Current active theme - change this to switch themes
export const activeTheme = "rose";

// Helper function to get CSS variables for the active theme (integrates with shadcn)
export function getThemeVariables(
  theme: string = activeTheme,
  mode: "light" | "dark" = "dark"
) {
  const themeConfig = themes[theme];
  if (!themeConfig) return {};

  const colors = themeConfig.colors[mode];

  return {
    // shadcn CSS variables
    "--background": colors.background,
    "--foreground": colors.text.primary,
    "--card": colors.surface,
    "--card-foreground": colors.text.primary,
    "--popover": colors.surface,
    "--popover-foreground": colors.text.primary,
    "--primary": colors.primary,
    "--primary-foreground": colors.surface,
    "--secondary": colors.secondary,
    "--secondary-foreground": colors.text.primary,
    "--muted": colors.surface,
    "--muted-foreground": colors.text.muted,
    "--accent": colors.accent,
    "--accent-foreground": colors.text.primary,
    "--border": colors.border,
    "--input": colors.border,
    "--ring": colors.primary,
    // Destructive colors (keeping default red)
    "--destructive":
      mode === "dark"
        ? "oklch(0.704 0.191 22.216)"
        : "oklch(0.577 0.245 27.325)",
    "--destructive-foreground": colors.surface,
  };
}
