import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ProgressProvider } from "../contexts/ProgressContext";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Computer Science Course",
  description: "Educational platform for Computer Science club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} antialiased font-manrope`}>
        <ProgressProvider>
          {children}
        </ProgressProvider>
      </body>
    </html>
  );
}
