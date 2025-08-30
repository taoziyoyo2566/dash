import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Dash", description: "Next.js dashboard" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="h-14 border-b flex items-center px-4">
          <a href="/" className="font-semibold">Dash</a>
          <nav className="ml-6 text-sm">
            <a className="hover:underline" href="/dashboard">Dashboard</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}