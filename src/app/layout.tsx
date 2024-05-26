import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Yuang Wei",
  description: "Full-stack Engineer and Lifelong Learner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased max-w-2xl font-sans mb-40 flex flex-col mx-4 mt-8 lg:mx-auto">
        <main className="w-full">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
