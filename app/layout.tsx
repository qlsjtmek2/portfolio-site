import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "개인 작업물 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-xl font-bold hover:text-gray-300 transition">
                Portfolio
              </a>
              <div className="flex gap-6">
                <a href="/#works" className="hover:text-gray-300 transition">
                  Works
                </a>
                <a href="/#about" className="hover:text-gray-300 transition">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <footer className="border-t border-gray-800 py-8 mt-20">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>© 2025 Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
