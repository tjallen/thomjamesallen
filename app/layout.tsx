import "./globals.css";

export const metadata = {
  title: "Thom Allen, front-end developer",
  description: "Experienced front-end developer based in London",
  keywords: [
    "front-end",
    "front end",
    "developer",
    "london",
    "thom allen",
    "react",
    "javascript",
    "typescript",
    "zzish",
    "graphql",
    "node",
    "nodejs",
    "web apps",
    "app",
  ],
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
