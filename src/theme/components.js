// ESTILO / CSS GLOBAL DOS COMPONENTES (MUI)
// CORES → palette.js
// FONTES → typography.js

export const components = {
  // ───────────────── BOTÕES ─────────────────
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      size: "medium",

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
      root: ({ theme }) => ({
        borderRadius: 20,
        padding: "10px 18px",
        fontWeight: theme.typography.button.fontWeight,
        letterSpacing: theme.typography.button.letterSpacing,
        textTransform: "none",
        transition: "all 180ms ease",
        position: "relative",
        overflow: "hidden",

        "&:hover": {
          transform: "translateY(-1px)",
        },

        "&:active": {
          transform: "translateY(0)",
        },

        "&:focus-visible": {
          outline: "none",
          boxShadow: "0 0 0 3px rgba(79,209,255,0.22)",
        },

        "&.Mui-disabled": {
          opacity: 0.5,
          cursor: "not-allowed",
        },
      }),

      sizeSmall: { padding: "8px 14px" },
      sizeMedium: { padding: "10px 18px" },
      sizeLarge: { padding: "12px 24px" },

      containedPrimary: ({ theme }) => ({
        color: theme.palette.primary.contrastText,
        backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow:
          "0 10px 24px rgba(79,209,255,0.12), 0 10px 24px rgba(155,107,255,0.10)",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: "var(--glow, 0)",
          transition: "opacity 200ms ease",
          background: `radial-gradient(
            180px circle at var(--mx, 50%) var(--my, 50%),
            rgba(255,255,255,0.35),
            rgba(255,255,255,0.00) 60%
          )`,
          filter: "blur(12px)",
          mixBlendMode: "screen",
        },

        "&:hover": {
          filter: "brightness(1.05)",
          boxShadow:
            "0 14px 34px rgba(79,209,255,0.18), 0 14px 34px rgba(155,107,255,0.14)",
        },
      }),

      outlinedPrimary: ({ theme }) => ({
        color: theme.palette.text.primary,

        border: "1px solid rgba(255,255,255,0.55)",
        backgroundColor: "rgba(18,19,26,0.35)",
        backdropFilter: "blur(10px)",

        "&:hover": {
          border: "1px solid transparent",
          backgroundImage: `
            linear-gradient(rgba(18,19,26,0.50), rgba(18,19,26,0.50)),
            linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})
          `,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          boxShadow: "0 0 0 3px rgba(79,209,255,0.10)",
        },
      }),
    },
  },

  // ───────────────── CARDS ─────────────────
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 18,
        backgroundColor: "rgba(30,34,48,0.55)",
        border: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
      }),
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
        border: "1px solid rgba(255,255,255,0.10)",

        "&.Mui-selected": {
          color: theme.palette.primary.contrastText,
          backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          border: "1px solid rgba(255,255,255,0.16)",
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
          boxShadow: "0 0 0 3px rgba(79,209,255,0.18)",
          borderRadius: 6,
        },
      }),
    },
  },
};
