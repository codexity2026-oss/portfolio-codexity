"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useMemo, useState } from "react";

const team = [
  {
    name: "Henrique Bruno",
    role: "Programador",
    photo: "/hero-desktop.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:camila@codexity.com",
  },
  {
    name: "Lucas Martins",
    role: "Programador",
    photo: "/team/lucas.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:lucas@codexity.com",
  },
  {
    name: "Rafael Oliveira",
    role: "Analista de Sistemas",
    photo: "/team/rafael.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:rafael@codexity.com",
  },
  {
    name: "Ana Souza",
    role: "Product Designer",
    photo: "/team/ana.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:ana@codexity.com",
  },
  {
    name: "Bruno Lima",
    role: "Desenvolvedor Full-Stack",
    photo: "/team/bruno.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:bruno@codexity.com",
  },
  {
    name: "Mariana Cos",
    role: "Front-end Developer",
    photo: "/team/mariana.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:mariana@codexity.com",
  },
  {
    name: "Mariana Cost",
    role: "Front-end Developer",
    photo: "/team/mariana.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:mariana@codexity.com",
  },
  {
    name: "Mariana Coa",
    role: "Front-end Developer",
    photo: "/team/mariana.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:mariana@codexity.com",
  },
  {
    name: "Mariana Cosa",
    role: "Front-end Developer",
    photo: "/team/mariana.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mailto:mariana@codexity.com",
  },
];

export default function Equipe() {
  const [showAll, setShowAll] = useState(false);
  const sortedTeam = useMemo(() => {
    return [...team].sort((a, b) =>
      a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
    );
  }, []);

  const VISIBLE_COUNT = 6;
  const visible = showAll ? sortedTeam : sortedTeam.slice(0, VISIBLE_COUNT);
  const hasMore = sortedTeam.length > VISIBLE_COUNT;

  return (
    <Box
      id="equipe"
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
              <Stack spacing={1}>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: "0.22em", color: "text.secondary" }}
                >
                  EQUIPE
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 900,
                    lineHeight: 1.08,
                    fontSize: { xs: 30, sm: 38, md: 44 },
                  }}
                >
                  Pessoas que entregam com{" "}
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
                    padrão de produto
                  </Box>
                  .
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    maxWidth: 900,
                    fontSize: { xs: 15.5, md: 16.5 },
                    lineHeight: 1.85,
                  }}
                >
                  Nosso time combina engenharia e design para criar experiências
                  modernas, rápidas e confiáveis. Trabalhamos com processos
                  simples, comunicação clara e foco total em qualidade.
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
                    {visible.map((m) => (
                        <Box key={m.name} sx={{ width: "100%" }}>
                        <TeamCard member={m} />
                        </Box>
                    ))}
                    </Box>

              <Stack
                direction="row"
                justifyContent="center"
                sx={{ pt: 2 }}
                >
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

function TeamCard({ member }) {
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
          {/* FOTO */}
          <Box
            sx={{
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.10)",
              backgroundColor: "rgba(30,34,48,0.35)",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={member.photo}
              alt={member.name}
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

          {/* NOME + ROLE */}
          <Box>
            <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
              {member.name}
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 0.3 }}>
              {member.role}
            </Typography>
          </Box>

          {/* CONTATOS */}
         {/* CONTATOS */}
            <Stack
            direction="row"
            spacing={1}
            sx={{
                justifyContent: "center", 
                pt: 0.5,
            }}
            >
            <IconButton
                component="a"
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                sx={{
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.10)",
                backgroundColor: "rgba(30,34,48,0.35)",
                }}
                aria-label="LinkedIn"
            >
                <LinkedInIcon fontSize="small" />
            </IconButton>

            <IconButton
                component="a"
                href={member.github}
                target="_blank"
                rel="noreferrer"
                sx={{
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.10)",
                backgroundColor: "rgba(30,34,48,0.35)",
                }}
                aria-label="GitHub"
            >
                <GitHubIcon fontSize="small" />
            </IconButton>

            <IconButton
                component="a"
                href={member.email}
                sx={{
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.10)",
                backgroundColor: "rgba(30,34,48,0.35)",
                }}
                aria-label="Email"
            >
                <EmailIcon fontSize="small" />
            </IconButton>
            </Stack>

        </Stack>
      </CardContent>
    </Card>
  );
}
