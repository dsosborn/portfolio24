import type { Metadata } from "next";
import { Josefin_Sans, Roboto_Flex } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const gFont = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});
export const metadata: Metadata = {
  title: "Doug Osborne - Chicago Software Engineer Web Designer",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gFont.className} ${gFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
