"use client";

import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const year = new Date().getFullYear();

  const socials = [
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=codexity2026@gmail.com",
      label: "Email",
      icon: <EmailIcon fontSize="small" />,
    },
    {
      href: "https://instagram.com/codexityofc",
      label: "Instagram",
      icon: <InstagramIcon fontSize="small" />,
    },
  ];

 
  const footerBg = isDark
    ? "linear-gradient(180deg, rgba(30,34,48,0.55) 0%, rgba(18,19,26,0.72) 100%)"
    : `linear-gradient(180deg,
        ${alpha(theme.palette.background.paper, 0.92)} 0%,
        ${alpha(theme.palette.background.default, 0.98)} 100%)`;


  const glowGridBg = isDark
    ? [
        `radial-gradient(circle at 15% 30%, ${alpha(
          theme.palette.primary.main,
          0.14
        )}, transparent 55%)`,
        `radial-gradient(circle at 85% 55%, ${alpha(
          theme.palette.secondary.main,
          0.14
        )}, transparent 55%)`,
        `linear-gradient(${alpha("#ffffff", 0.04)} 1px, transparent 1px)`,
        `linear-gradient(90deg, ${alpha("#ffffff", 0.04)} 1px, transparent 1px)`,
      ].join(",")
    : [
        `radial-gradient(circle at 15% 30%, ${alpha(
          theme.palette.primary.main,
          0.10
        )}, transparent 60%)`,
        `radial-gradient(circle at 85% 55%, ${alpha(
          theme.palette.secondary.main,
          0.10
        )}, transparent 60%)`,
        `linear-gradient(${alpha(theme.palette.text.primary, 0.05)} 1px, transparent 1px)`,
        `linear-gradient(90deg, ${alpha(theme.palette.text.primary, 0.05)} 1px, transparent 1px)`,
      ].join(",");

  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 10, md: 12 },
        position: "relative",
        overflow: "hidden",
        borderTop: `1px solid ${theme.palette.divider}`,
        background: footerBg,
        backdropFilter: "blur(16px)",
      }}
    >
      {/* glow + grid discreto */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: glowGridBg,
          backgroundSize: "auto, auto, 42px 42px, 42px 42px",
          opacity: isDark ? 0.9 : 0.65,
          maskImage: isDark
            ? "radial-gradient(circle at 50% 20%, rgba(0,0,0,1), rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 75%)"
            : "radial-gradient(circle at 50% 15%, rgba(0,0,0,1), rgba(0,0,0,0.35) 55%, rgba(0,0,0,0) 80%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ py: { xs: 5, md: 6 } }}>
          {/* TOP */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3.5, md: 3 }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            {/* Marca */}
            <Stack direction="row" spacing={1.3} alignItems="center">
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: 3,
                  display: "grid",
                  placeItems: "center",
                  border: `1px solid ${theme.palette.divider}`,
                  background: isDark
                    ? "linear-gradient(180deg, rgba(18,19,26,0.35), rgba(18,19,26,0.12))"
                    : `linear-gradient(180deg, ${alpha(
                        theme.palette.background.paper,
                        0.85
                      )}, ${alpha(theme.palette.background.default, 0.95)})`,
                  boxShadow: isDark
                    ? "0 18px 40px rgba(0,0,0,0.25)"
                    : "0 12px 26px rgba(0,0,0,0.10)",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/logo_frente.png"
                  alt="Codexity"
                  style={{ height: 38, width: "auto", display: "block" }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 900,
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    fontSize: 13,
                    lineHeight: 1.2,
                    color: "text.primary",
                  }}
                >
                  CODEXITY
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: 13,
                    maxWidth: 420,
                  }}
                >
                  Soluções digitais inteligentes, resilientes e escaláveis.
                </Typography>
              </Box>
            </Stack>

            {/* Sociais */}
            <Stack direction="row" spacing={1} alignItems="center">
              {socials.map((s) => (
                <SocialIcon
                  key={s.label}
                  href={s.href}
                  label={s.label}
                  icon={s.icon}
                />
              ))}
            </Stack>
          </Stack>

          <Divider
            sx={{
              my: { xs: 3, md: 3.5 },
              borderColor: theme.palette.divider,
            }}
          />

          {/* BOTTOM */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1.5, md: 2 }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
              © {year} Codexity. Todos os direitos reservados.
            </Typography>

            <Typography sx={{ color: "text.secondary", fontSize: 12.5 }}>
              Feito com foco em performance e qualidade.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

/* helpers */

function FooterLink({ href, label }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Button
      href={href}
      variant="text"
      sx={{
        color: "text.primary",
        fontWeight: 800,
        fontSize: 12,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        borderRadius: 999,
        px: 1.25,
        py: 0.75,
        minWidth: "auto",
        position: "relative",
        transition: "transform 140ms ease, background-color 140ms ease",

        "&:hover": {
          backgroundColor: isDark
            ? alpha("#ffffff", 0.06)
            : alpha(theme.palette.text.primary, 0.06),
          transform: "translateY(-1px)",
        },

        "&:focus-visible": {
          outline: "none",
          boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.16)}`,
          backgroundColor: isDark
            ? alpha("#ffffff", 0.06)
            : alpha(theme.palette.text.primary, 0.06),
        },
      }}
    >
      {label}
    </Button>
  );
}

function SocialIcon({ href, icon, label }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isExternal = href.startsWith("http");

  return (
    <IconButton
      component="a"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      sx={{
        width: 40,
        height: 40,
        borderRadius: 2.5,
        border: `1px solid ${theme.palette.divider}`,
        background: isDark
          ? `linear-gradient(180deg, ${alpha(
              theme.palette.background.default,
              0.42
            )}, ${alpha(theme.palette.background.default, 0.18)})`
          : `linear-gradient(180deg, ${alpha(
              theme.palette.background.paper,
              0.92
            )}, ${alpha(theme.palette.background.default, 0.98)})`,
        backdropFilter: "blur(10px)",
        transition:
          "transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease",
        boxShadow: isDark
          ? "0 12px 26px rgba(0,0,0,0.25)"
          : "0 10px 22px rgba(0,0,0,0.10)",

        "&:hover": {
          transform: "translateY(-1px)",
          borderColor: theme.palette.divider,
          boxShadow: isDark
            ? `0 14px 30px rgba(0,0,0,0.28), 0 0 0 3px ${alpha(
                theme.palette.primary.main,
                0.10
              )}`
            : `0 12px 26px rgba(0,0,0,0.12), 0 0 0 3px ${alpha(
                theme.palette.primary.main,
                0.12
              )}`,
        },

        "&:active": {
          transform: "translateY(0px)",
        },

        "&:focus-visible": {
          outline: "none",
          boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.18)}`,
          borderColor: theme.palette.divider,
        },
      }}
    >
      {icon}
    </IconButton>
  );
}
