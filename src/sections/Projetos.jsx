"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useMemo, useState } from "react";

const projects = [
  {
    title: "Aplicativo FinanceFlow",
    subtitle: "Dashboard financeiro",
    image: "/projects/financeflow.jpg",
    tags: ["Dashboard", "Fintech", "UI"],
    live: "https://example.com",
  },
  {
    title: "Ecommerce TechTrendX",
    subtitle: "Loja com checkout e integrações",
    image: "/projects/techtrendx.jpg",
    tags: ["E-commerce", "SEO"],
    live: "https://example.com",
  },
  {
    title: "Portfólio André Carvalho",
    subtitle: "Site institucional com identidade visual",
    image: "/projects/portfolio-andre.jpg",
    tags: ["Branding", "Landing", "Animações"],
    live: "https://example.com",
  },
  {
    title: "Sistema de Agendamentos",
    subtitle: "Painel + notificações + clientes",
    image: "/projects/agendamentos.jpg",
    tags: ["SaaS", "Admin", "Automação"],
    live: "https://example.com",
  },
  {
    title: "Plataforma de Cursos",
    subtitle: "Área do aluno e gestão de conteúdos",
    image: "/projects/cursos.jpg",
    tags: ["Edu", "Auth", "Payments"],
    live: "https://example.com",
  },
  {
    title: "Website Corporativ",
    subtitle: "Institucional com foco em conversão",
    image: "/projects/corporativo.jpg",
    tags: ["Landing", "Copy", "UX"],
    live: "https://example.com",
  },
  {
    title: "Website Corporativo",
    subtitle: "Institucional com foco em conversão",
    image: "/projects/corporativo.jpg",
    tags: ["Landing", "Copy", "UX"],
    live: "https://example.com",
  },
];

export default function Projetos() {
  const [showAll, setShowAll] = useState(false);

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) =>
      a.title.localeCompare(b.title, "pt-BR", { sensitivity: "base" })
    );
  }, []);

  const VISIBLE_COUNT = 6;
  const visible = showAll ? sortedProjects : sortedProjects.slice(0, VISIBLE_COUNT);
  const hasMore = sortedProjects.length > VISIBLE_COUNT;

  return (
    <Box
      id="projetos"
      sx={{
        py: { xs: 10, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Card
          sx={{
            borderRadius: 4,
            backgroundColor: "rgba(30,34,48,0.55)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 18px 55px rgba(0,0,0,0.45)",
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 6 } }}>
            <Stack spacing={3}>
              {/* Header */}
              <Stack spacing={1}>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: "0.22em", color: "text.secondary" }}
                >
                  PROJETOS
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 900,
                    lineHeight: 1.08,
                    fontSize: { xs: 30, sm: 38, md: 44 },
                  }}
                >
                  Alguns trabalhos com{" "}
                  <Box
                    component="span"
                    sx={{
                      backgroundImage:
                        "linear-gradient(90deg, rgba(79,209,255,1), rgba(155,107,255,1))",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    visual marcante
                  </Box>{" "}
                  e base sólida.
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    maxWidth: 900,
                    fontSize: { xs: 15.5, md: 16.5 },
                    lineHeight: 1.85,
                  }}
                >
                  Selecionamos projetos que mostram nosso padrão: interface clara,
                  performance, atenção aos detalhes e uma estrutura preparada para evoluir.
                </Typography>
              </Stack>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.10)" }} />

              <Box
                sx={{
                  display: "grid",
                  justifyContent: "center",
                  gap: { xs: 2.5, sm: 3, md: 4 },
                  gridTemplateColumns: {
                    xs: "minmax(0, 420px)",
                    sm: "repeat(2, minmax(0, 360px))",
                    md: "repeat(3, minmax(0, 320px))",
                  },
                }}
              >
                {visible.map((p) => (
                  <Box key={p.title} sx={{ width: "100%" }}>
                    <ProjectCard project={p} />
                  </Box>
                ))}
              </Box>

              {/* Botão centralizado */}
              <Stack direction="row" justifyContent="center" sx={{ pt: 2 }}>
                {hasMore && (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setShowAll((v) => !v)}
                    endIcon={showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  >
                    {showAll ? "Mostrar menos" : "Ver mais"}
                  </Button>
                )}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 4,
        backgroundColor: "rgba(18,19,26,0.35)",
        border: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 1px 1px rgba(0,0,0,0.22)", 
        overflow: "hidden",
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(79,209,255,0.10), rgba(155,107,255,0.10))",
          opacity: 0,
          transition: "opacity 180ms ease",
          pointerEvents: "none",
        },

        "&:hover::before": { opacity: 1 },
      }}
    >
      <CardContent sx={{ p: { xs: 2.6, md: 3 } }}>
        <Stack spacing={1.8}>
          <Box
            sx={{
              width: "100%",
              aspectRatio: "16/11",
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.10)",
              backgroundColor: "rgba(30,34,48,0.35)",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                filter: "contrast(1.05) saturate(1.05)",
              }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
              {project.title}
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 0.3 }}>
              {project.subtitle}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            {(project.tags || []).slice(0, 3).map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.10)",
                  backgroundColor: "rgba(30,34,48,0.35)",
                  color: "text.primary",
                  fontWeight: 700,
                }}
              />
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "center", pt: 0.5 }}
          >
            <IconButton
              component="a"
              href={project.live}
              target="_blank"
              rel="noreferrer"
              sx={{
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.10)",
                backgroundColor: "rgba(30,34,48,0.35)",
              }}
              aria-label="Abrir demo"
            >
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
