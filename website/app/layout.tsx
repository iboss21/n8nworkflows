import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "n8n Workflows - Professional Automation Collection",
  description: "Discover 2,057+ professional n8n workflows. The world's most comprehensive collection of workflow automations, ready to deploy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
