import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "600"],
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata = {
  title: "Arth Sutra | Premium Financial Strategy",
  description: "We help individuals, startups, and enterprises unlock sustainable growth with intelligent wealth management, investment planning, and data-driven financial solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
