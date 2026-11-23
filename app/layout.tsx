import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammad Shahil | Portfolio",
  description:
    "Mohammad Shahil — Mechanical Engineering, Procurement & Supply Chain, and Project Management.",
  metadataBase: new URL("https://mohammadshahil.vercel.app"),
  openGraph: {
    title: "Mohammad Shahil | Portfolio",
    description: "Mechanical Engineering • Procurement • Project Management",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
