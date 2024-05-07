import "./globals.css";

export const metadata = {
  title: "Acutis monolith",
  description: "Dedicated to blessed Carlo Acutis. Amen!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
