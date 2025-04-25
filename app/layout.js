import { localFont } from "next/font/local";
import "./globals.css";

const monoSans = localFont({
  src: [
    {
      path: "./fonts/MonaSans-Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MonaSans-Medium.otf",
      weight: "500",
      style: "medium",
    },
  ],
});

export const metadata = {
  title: "Olve",
  description: "Navigating Legal Waters, Securing Your Tomorow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
