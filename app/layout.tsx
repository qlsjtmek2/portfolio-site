import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Portfolio - Huigon Shin",
  description: "개인 작업물 포트폴리오 | Full-stack Developer",
  keywords: ["portfolio", "web development", "full-stack", "developer", "포트폴리오"],
  authors: [{ name: "Huigon Shin", url: "https://github.com/qlsjtmek2" }],
  creator: "Huigon Shin",

  openGraph: {
    title: "Portfolio - Huigon Shin",
    description: "개인 작업물 포트폴리오 | Full-stack Developer",
    url: "https://qlsjtmek2.github.io/portfolio-site/",
    siteName: "Portfolio",
    locale: "ko_KR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Huigon Shin",
    description: "개인 작업물 포트폴리오 | Full-stack Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-black dark:border-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition">
                Portfolio
              </a>
              <div className="flex items-center gap-6">
                <a href="/#works" className="hover:text-gray-600 dark:hover:text-gray-300 transition">
                  Works
                </a>
                <a href="/#about" className="hover:text-gray-600 dark:hover:text-gray-300 transition">
                  About
                </a>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <footer className="border-t border-black dark:border-white py-8 mt-20">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
            <p>© 2025 Huigon Shin. All rights reserved.</p>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
