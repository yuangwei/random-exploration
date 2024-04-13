import type { Metadata } from "next";
import { metadataWithPWA } from "@/lib/pwa";
import "./globals.css";

export const metadata: Metadata = metadataWithPWA({
  title: "Random Exploration | Yuang Wei",
  description: "Discovering the unknown and pursuing all possibilities.",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
