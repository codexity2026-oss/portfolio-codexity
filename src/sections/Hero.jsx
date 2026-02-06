"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: {
          xs: `url(${isDark ? "/hero-mobile-dark.png" : "/hero-mobile-light.png"})`,
          md: `url(${isDark ? "/hero-desktop-dark.png" : "/hero-desktop-light.png"})`,
        },

        backgroundSize: "cover",
        backgroundPosition: { xs: "center", md: "center" },
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: isDark
            ? `radial-gradient(circle at 30% 35%, rgba(0,0,0,0.55), transparent 60%),
               linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.10) 70%, rgba(0,0,0,0.00) 100%)`
            : `radial-gradient(circle at 30% 35%, ${alpha("#ffffff", 0.55)}, transparent 60%),
               linear-gradient(90deg, ${alpha("#ffffff", 0.75)} 0%, ${alpha(
                "#ffffff",
                0.35
              )} 45%, ${alpha("#ffffff", 0.10)} 70%, ${alpha("#ffffff", 0)} 100%)`,
          pointerEvents: "none",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          pt: { xs: 12, md: 10 },
          pb: { xs: 10, md: 10 },
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: 640 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              lineHeight: 1.08,
              mb: 2,
              fontSize: { xs: 38, sm: 46, md: 56 },
              color: "text.primary",
            }}
          >
            Onde código encontra{" "}
            <Box
              component="span"
              sx={{
                backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              inteligência
            </Box>
            .
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: 520,
              mb: 4,
              fontSize: { xs: 15, md: 16 },
              lineHeight: 1.6,
            }}
          >
            Somos a Codexity — uma empresa focada em soluções digitais inteligentes,
            resilientes e escaláveis.
          </Typography>

          <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
            <Button variant="contained" color="primary" href="#projetos">
              Falar com a Codexity
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
