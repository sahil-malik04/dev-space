import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sahil Malik | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Sahil Malik, a Full-Stack Developer with 3.5+ years of experience in building scalable web and mobile applications using MERN stack, Node.js, Express, PostgreSQL, and modern technologies.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
