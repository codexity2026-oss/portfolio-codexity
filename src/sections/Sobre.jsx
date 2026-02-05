import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function Sobre() {
  return (
    <Box
      id="sobre"
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
            <Stack spacing={3} sx={{ maxWidth: 1040 }}>
              <Stack spacing={1}>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: "0.22em", color: "text.secondary" }}
                >
                  SOBRE
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 900,
                    lineHeight: 1.08,
                    fontSize: { xs: 30, sm: 38, md: 44 },
                  }}
                >
                  Sobre a{" "}
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
                    Codexity
                  </Box>{" "}
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: 15.5, md: 16.5 },
                    lineHeight: 1.85,
                    maxWidth: 900,
                  }}
                >
                  A Codexity é uma empresa especializada na criação de soluções
                  digitais sob medida. Unimos engenharia, design e estratégia
                  para transformar ideias complexas em experiências modernas,
                  rápidas e confiáveis — do protótipo ao produto final.
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: 15.5, md: 16.5 },
                    lineHeight: 1.85,
                    maxWidth: 900,
                  }}
                >
                  Nosso foco é entregar sistemas que não só “funcionam”, mas que
                  também são fáceis de evoluir: arquitetura sólida, boas práticas,
                  performance real, segurança e um visual marcante alinhado à sua
                  marca. A cada projeto, buscamos um resultado simples de usar e
                  forte por trás.
                </Typography>
              </Stack>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.10)" }} />

              {/* pontos-chave*/}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                sx={{ alignItems: { md: "flex-start" } }}
              >
                <Feature
                  icon={<AutoAwesomeIcon />}
                  title="Inovação"
                  text="Soluções modernas com foco em UX, clareza e consistência visual."
                />
                <Feature
                  icon={<SpeedIcon />}
                  title="Performance"
                  text="Carregamento rápido, código limpo e otimizações reais para produção."
                />
                <Feature
                  icon={<SecurityIcon />}
                  title="Segurança"
                  text="Boas práticas, validações e padrões seguros desde o início."
                />
                <Feature
                  icon={<TrendingUpIcon />}
                  title="Escalabilidade"
                  text="Arquitetura preparada para crescer com novas features e usuários."
                />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

function Feature({ icon, title, text }) {
  return (
    <Stack
      spacing={1}
      sx={{
        flex: 1,
        minWidth: { xs: "100%", md: 0 },
        p: 2,
        borderRadius: 3,
        backgroundColor: "rgba(18,19,26,0.35)",
        border: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            width: 38,
            height: 38,
            borderRadius: 2,
            display: "grid",
            placeItems: "center",
            backgroundImage:
              "linear-gradient(90deg, rgba(79,209,255,0.18), rgba(155,107,255,0.18))",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "text.primary",
          }}
        >
          {icon}
        </Box>

        <Typography sx={{ fontWeight: 800 }}>{title}</Typography>
      </Box>

      <Typography sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.7 }}>
        {text}
      </Typography>
    </Stack>
  );
}
