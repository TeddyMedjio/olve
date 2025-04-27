import localFont from "next/font/local";
import "./globals.css";

const monaSans = localFont({
  src: [
    {
      path: "./font/MonaSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/MonaSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/MonaSans-Medium.otf",
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
      <body className={`${monaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
