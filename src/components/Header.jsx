"use client";

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
import { useEffect, useMemo, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = useMemo(() => ["hero", "sobre", "equipe", "projetos"], []);

  // ✅ 1) GLASS ON SCROLL
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ 2) SEÇÃO ATIVA (underline) — método estável
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

  const closeMenu = () => setOpen(false);

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
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            px: scrolled ? { xs: 1.5, sm: 2.5 } : 0,
            py: scrolled ? 1 : 0,
            borderRadius: scrolled ? 999 : 0,

            backgroundColor: scrolled ? "rgba(30,34,48,0.45)" : "transparent",
            backdropFilter: scrolled ? "blur(14px)" : "none",
            border: scrolled ? "1px solid rgba(255,255,255,0.10)" : "none",
            boxShadow: scrolled ? "0 18px 40px rgba(0,0,0,0.35)" : "none",

            transition: "all 220ms ease",
          }}
        >
          {/* LOGO */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              minWidth: { md: 240 },
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
              }}
            >
              CODEXITY
            </Typography>
          </Box>

          {/* MENU CENTRAL */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Stack
              direction="row"
              spacing={3.5}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <NavLink href="#hero" label="INÍCIO" active={activeSection === "hero"} />
              <NavLink href="#sobre" label="SOBRE" active={activeSection === "sobre"} />
              <NavLink href="#equipe" label="EQUIPE" active={activeSection === "equipe"} />
              <NavLink href="#projetos" label="PROJETOS" active={activeSection === "projetos"} />
            </Stack>
          </Box>

          {/* HAMBURGER / ESPAÇADOR */}
          <Box
            sx={{
              minWidth: { md: 240 },
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <IconButton
              onClick={() => setOpen(!open)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "text.primary",
                borderRadius: 999,
                border: open ? "1px solid rgba(255,255,255,0.16)" : "none",
                backgroundColor: open ? "rgba(30,34,48,0.45)" : "transparent",
                backdropFilter: open ? "blur(12px)" : "none",
              }}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
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
              backgroundColor: "rgba(30,34,48,0.55)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
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
          backgroundImage:
            "linear-gradient(90deg, rgba(79,209,255,0.95), rgba(155,107,255,0.95))",
          transition: "opacity 160ms ease",
        },

        "&:hover::after": {
          opacity: 1,
        },
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
