import "./globals.css";

export const metadata = {
  title: "Arth Sutra",
  description: "Fintech Website",
};

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