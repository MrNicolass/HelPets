// app/layout.tsx (ou app/root-layout.tsx, tanto faz, desde que seja default export)

import SidebarWrapper from "@/components/SidebarWrapper";
import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HelPets",
  description: "Painel administrativo ERP",
   icons: {
   icon: '/images/helpetslohoexemplo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarWrapper>{children}</SidebarWrapper>
      </body>
    </html>
  );
}
