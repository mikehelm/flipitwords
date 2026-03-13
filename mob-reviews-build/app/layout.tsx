import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppProviders } from "@/components/layout/app-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOBreviews Growth Engine",
  description: "Internal CRM, outreach, and AI operations hub for MOBreviews"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
