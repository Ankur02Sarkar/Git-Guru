import "./globals.css";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Git Guru</title>
      </head>
      <body className={montserrat.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
