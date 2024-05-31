import "./globals.css";

export const metadata = {
  title: "Lifepoint Calculator",
  description: "Lifepoint calculator for the YuGiOh playing card game.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Milli_puzzle.png" sizes="any" />
      </head>
      <body className="bg-custom-gradient">{children}</body>
    </html>
  );
}
