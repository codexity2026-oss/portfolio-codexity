// src/theme/components.js
import { alpha } from "@mui/material/styles";

export const components = {
  // ───────────────── BOTÕES ─────────────────
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      size: "large",

      onMouseMove: (e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
        el.style.setProperty("--glow", "1");
      },
      onMouseLeave: (e) => {
        const el = e.currentTarget;
        el.style.setProperty("--glow", "0");
      },
    },

    styleOverrides: {
      root: ({ theme }) => {
        const isDark = theme.palette.mode === "dark";

        return {
          borderRadius: 20,
          padding: "10px 18px",
          fontWeight: theme.typography.button.fontWeight,
          letterSpacing: theme.typography.button.letterSpacing,
          textTransform: "none",
          transition: "all 180ms ease",
          position: "relative",
          overflow: "hidden",

          "&:hover": { transform: "translateY(-1px)" },
          "&:active": { transform: "translateY(0)" },

          "&:focus-visible": {
            outline: "none",
            boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, isDark ? 0.22 : 0.18)}`,
          },

          "&.Mui-disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },
        };
      },

      sizeSmall: { padding: "8px 14px" },
      sizeMedium: { padding: "10px 18px" },
      sizeLarge: { padding: "12px 24px" },

      containedPrimary: ({ theme }) => {
        const isDark = theme.palette.mode === "dark";

        return {
          color: isDark
          ? theme.palette.primary.contrastText
          : theme.palette.text.primary, 
          backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: isDark
            ? `0 10px 24px ${alpha(theme.palette.primary.main, 0.12)}, 0 10px 24px ${alpha(
                theme.palette.secondary.main,
                0.10
              )}`
            : `0 10px 22px rgba(0,0,0,0.10)`,

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: "var(--glow, 0)",
            transition: "opacity 200ms ease",
            background: `radial-gradient(
              180px circle at var(--mx, 50%) var(--my, 50%),
              ${alpha("#ffffff", isDark ? 0.35 : 0.22)},
              ${alpha("#ffffff", 0)} 60%
            )`,
            filter: "blur(12px)",
            mixBlendMode: isDark ? "screen" : "normal",
          },

          "&:hover": {
            filter: "brightness(1.05)",
            boxShadow: isDark
              ? `0 14px 34px ${alpha(theme.palette.primary.main, 0.18)}, 0 14px 34px ${alpha(
                  theme.palette.secondary.main,
                  0.14
                )}`
              : `0 14px 30px rgba(0,0,0,0.12)`,
          },
        };
      },

      outlinedPrimary: ({ theme }) => {
        const isDark = theme.palette.mode === "dark";

        return {
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
          backgroundColor: isDark
            ? alpha(theme.palette.background.default, 0.35)
            : alpha(theme.palette.background.paper, 0.80),
          backdropFilter: "blur(10px)",

          "&:hover": {
            border: `1px solid ${theme.palette.divider}`,
            backgroundImage: isDark
              ? `
                linear-gradient(${alpha(theme.palette.background.default, 0.50)}, ${alpha(
                  theme.palette.background.default,
                  0.50
                )}),
                linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})
              `
              : `
                linear-gradient(${alpha(theme.palette.background.paper, 0.92)}, ${alpha(
                  theme.palette.background.paper,
                  0.92
                )}),
                linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})
              `,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, isDark ? 0.10 : 0.12)}`,
          },
        };
      },
    },
  },

  // ───────────────── CARDS ─────────────────
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => {
        const isDark = theme.palette.mode === "dark";
        return {
          borderRadius: 18,
          border: `1px solid ${theme.palette.divider}`,
          backgroundColor: isDark
            ? alpha(theme.palette.background.paper, 0.55)
            : alpha(theme.palette.background.paper, 0.92),
          backdropFilter: "blur(12px)",
          boxShadow: isDark
            ? "0 16px 40px rgba(0,0,0,0.35)"
            : "0 12px 30px rgba(0,0,0,0.10)",
        };
      },
    },
  },

  // ───────────────── TABS ─────────────────
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        textTransform: "none",
        color: theme.palette.text.secondary,
        fontWeight: 600,
        letterSpacing: "0.08em",

        "&.Mui-selected": {
          color: theme.palette.text.primary,
        },
      }),
    },
  },

  // ───────────────── PAGINAÇÃO ─────────────────
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 10,
        color: theme.palette.text.secondary,
        border: `1px solid ${theme.palette.divider}`,

        "&.Mui-selected": {
          color: theme.palette.primary.contrastText,
          backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          border: `1px solid ${theme.palette.divider}`,
        },
      }),
    },
  },

  // ───────────────── LINKS ─────────────────
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontWeight: 600,
        textDecoration: "none",
        transition: "color 160ms ease",
        color: theme.palette.primary.main,

        "&:hover": {
          color: theme.palette.secondary.main,
        },

        "&:focus-visible": {
          outline: "none",
          boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.18)}`,
          borderRadius: 6,
        },
      }),
    },
  },
};
