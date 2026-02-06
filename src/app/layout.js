import ThemeProviderCodexity from "@/theme/ThemeProviderCodexity";

export const metadata = {
  title: "Codexity | Portfólio",
  description: "Conheça a Codexity: nossa equipe, quem somos e os projetos que desenvolvemos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProviderCodexity>
          {children}
        </ThemeProviderCodexity>
      </body>
    </html>
  );
}
