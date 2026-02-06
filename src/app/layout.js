import ThemeProviderCodexity from "@/theme/ThemeProviderCodexity";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProviderCodexity>{children}</ThemeProviderCodexity>
      </body>
    </html>
  );
}
