"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, alpha } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeModeContext } from "@/theme/ThemeProviderCodexity";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { toggleTheme } = React.useContext(ThemeModeContext);

  const sections = useMemo(() => ["hero", "sobre", "equipe", "projetos"], []);

  // GLASS ON SCROLL
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // SEÇÃO ATIVA
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.35;
      let current = "hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) current = id;
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sections]);

  // ✅ evita menu mobile ficar aberto quando vira desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width:900px)"); // md padrão
    const sync = () => mq.matches && setOpen(false);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const closeMenu = () => setOpen(false);

  const shellBg = scrolled
    ? isDark
      ? alpha(theme.palette.background.paper, 0.55)
      : alpha(theme.palette.background.paper, 0.82)
    : "transparent";

  const shellBorder = scrolled ? `1px solid ${theme.palette.divider}` : "none";

  const shellShadow = scrolled
    ? isDark
      ? "0 18px 40px rgba(0,0,0,0.35)"
      : "0 12px 26px rgba(0,0,0,0.12)"
    : "none";

  const iconGlassBg = isDark
    ? alpha(theme.palette.background.default, 0.35)
    : alpha(theme.palette.background.paper, 0.75);

  const iconGlassBorder = `1px solid ${theme.palette.divider}`;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "transparent",
        boxShadow: "none",
        py: scrolled ? 1.2 : 2.2,
        transition: "padding 220ms ease",
        zIndex: 1300,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 2.5, md: 3 }, // margem lateral sempre
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.25,

            // ✅ padding “sempre”, e mais folga à direita quando vira pill
            px: scrolled ? { xs: 1.5, sm: 2.5 } : { xs: 1, sm: 1.5 },
            pr: scrolled ? { xs: 2, sm: 2.75 } : { xs: 1.25, sm: 1.75 },
            py: scrolled ? 1 : 0,
            borderRadius: scrolled ? 999 : 0,

            // ✅ evita recorte do botão na borda arredondada
            overflow: "visible",

            backgroundColor: shellBg,
            backdropFilter: scrolled ? "blur(14px)" : "none",
            border: shellBorder,
            boxShadow: shellShadow,
            transition: "all 220ms ease",
          }}
        >
          {/* LOGO */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,

              // ✅ não “trava” em ~1200px (minWidth causava isso)
              flexBasis: { lg: 240 },
              flexShrink: 0,
            }}
          >
            <img src="/logo_frente.png" alt="Codexity" height={48} />
            <Typography
              sx={{
                fontWeight: 700,
                letterSpacing: "0.22em",
                fontSize: { xs: 14, sm: 16 },
                textTransform: "uppercase",
                color: "text.primary",
                whiteSpace: "nowrap",
              }}
            >
              CODEXITY
            </Typography>
          </Box>

          {/* MENU CENTRAL */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center", minWidth: 0 }}>
            <Stack
              direction="row"
              spacing={3.5}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                minWidth: 0,
              }}
            >
              <NavLink href="#hero" label="INÍCIO" active={activeSection === "hero"} />
              <NavLink href="#sobre" label="SOBRE" active={activeSection === "sobre"} />
              <NavLink href="#equipe" label="EQUIPE" active={activeSection === "equipe"} />
              <NavLink
                href="#projetos"
                label="PROJETOS"
                active={activeSection === "projetos"}
              />
            </Stack>
          </Box>

          {/* DIREITA */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexShrink: 0,
              gap: 1,

              // ✅ em desktop grande, “reserva espaço” sem travar antes
              flexBasis: { lg: 240 },
            }}
          >
            {/* HAMBURGER */}
            <IconButton
              onClick={() => setOpen(!open)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "text.primary",
                borderRadius: 999,
                border: open ? iconGlassBorder : "none",
                backgroundColor: open ? iconGlassBg : "transparent",
                backdropFilter: open ? "blur(12px)" : "none",
              }}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            {/* TEMA */}
            <IconButton
              aria-label="Alternar tema"
              onClick={toggleTheme}
              sx={{
                width: 40,
                height: 40,
                flexShrink: 0,
                borderRadius: 9999,
                border: iconGlassBorder,
                backgroundColor: iconGlassBg,
                backdropFilter: "blur(10px)",
                transition:
                  "transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease",

                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: isDark
                    ? `0 0 0 3px ${alpha(theme.palette.primary.main, 0.12)}`
                    : `0 0 0 3px ${alpha(theme.palette.primary.main, 0.16)}`,
                },
                "&:active": { transform: "translateY(0px)" },
                "&:focus-visible": {
                  outline: "none",
                  boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.18)}`,
                },
              }}
            >
              {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </IconButton>
          </Box>
        </Box>

        {/* MENU MOBILE */}
        {open && (
          <Box
            sx={{
              mt: 1.5,
              px: 2,
              py: 2,
              borderRadius: 10,
              backgroundColor: isDark
                ? alpha(theme.palette.background.paper, 0.60)
                : alpha(theme.palette.background.paper, 0.92),
              backdropFilter: "blur(16px)",
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: isDark
                ? "0 20px 50px rgba(0,0,0,0.45)"
                : "0 14px 34px rgba(0,0,0,0.14)",
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <MobileLink href="#hero" label="INÍCIO" onClick={closeMenu} />
            <MobileLink href="#sobre" label="SOBRE" onClick={closeMenu} />
            <MobileLink href="#equipe" label="EQUIPE" onClick={closeMenu} />
            <MobileLink href="#projetos" label="PROJETOS" onClick={closeMenu} />
          </Box>
        )}
      </Container>
    </AppBar>
  );
}

function NavLink({ href, label, active }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Button
      href={href}
      variant="text"
      sx={{
        color: "text.primary",
        fontWeight: 600,
        letterSpacing: "0.14em",
        fontSize: 13,
        position: "relative",

        "&::after": {
          content: '""',
          position: "absolute",
          left: 10,
          right: 10,
          bottom: 6,
          height: 2,
          borderRadius: 999,
          opacity: active ? 1 : 0,
          backgroundImage: `linear-gradient(90deg, ${alpha(
            theme.palette.primary.main,
            isDark ? 0.95 : 0.90
          )}, ${alpha(theme.palette.secondary.main, isDark ? 0.95 : 0.90)})`,
          transition: "opacity 160ms ease",
        },

        "&:hover::after": { opacity: 1 },
      }}
    >
      {label}
    </Button>
  );
}

function MobileLink({ href, label, onClick }) {
  return (
    <Button
      href={href}
      onClick={onClick}
      variant="text"
      sx={{
        justifyContent: "flex-start",
        fontWeight: 600,
        letterSpacing: "0.14em",
        color: "text.primary",
        py: 1.2,
      }}
    >
      {label}
    </Button>
  );
}
