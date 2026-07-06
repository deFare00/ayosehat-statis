import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap"
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-roboto",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Ayosehat",
  description:
    "Ayo Sehat Kementerian Kesehatan Republik Indonesia, portal statis berisi informasi kesehatan, siklus hidup, topik A-Z, kampanye, dan artikel terbaru.",
  keywords: ["Ayo Sehat", "Kemenkes", "kesehatan", "siklus hidup", "artikel kesehatan"],
  metadataBase: new URL("https://ayosehat.kemkes.go.id"),
  openGraph: {
    title: "Ayosehat",
    description:
      "Portal informasi kesehatan untuk masyarakat Indonesia dari Kementerian Kesehatan Republik Indonesia.",
    type: "website",
    locale: "id_ID"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#18b9b1"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${roboto.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
