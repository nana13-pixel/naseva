import "./globals.css";

export const metadata = {
  title: "NASEVA — Luxury Streetwear",
  description: "Beyond The Ordinary. Discover NASEVA Collection 001.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
