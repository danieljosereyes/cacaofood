import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CacaoFood",
  description: "Nectar en tu paladar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light text-foreground bg-background">
      <body className={inter.className}>
        <Providers>
          <Navigation/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
