import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"), title: { default: "BAGNON STREET", template: "%s | BAGNON STREET" }, description: "Street-born garments and objects made for everyday identity.", openGraph: { title: "BAGNON STREET", description: "Made for movement. Designed to last.", siteName: "BAGNON STREET", type: "website" } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#12120f" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
