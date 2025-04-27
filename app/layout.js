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
      {/* <!-- HTML Meta Tags --> */}

      <meta
        name="description"
        content="Navigating Legal Waters, Securing Your Tomorow"
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://olve.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Olve" />
      <meta
        property="og:description"
        content="Navigating Legal Waters, Securing Your Tomorow"
      />
      <meta
        property="og:image"
        content="https://opengraph.b-cdn.net/production/images/479b1bb2-b1a4-4823-81d5-0db9c20df5a4.jpg?token=4j78W1-nCx7NB_vbD5Iiu6o7cQ3Bbo6ayMCM6Z8h4ZQ&height=630&width=1200&expires=33281753864"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="olve.vercel.app" />
      <meta property="twitter:url" content="https://olve.vercel.app/" />
      <meta name="twitter:title" content="Olve" />
      <meta
        name="twitter:description"
        content="Navigating Legal Waters, Securing Your Tomorow"
      />
      <meta
        name="twitter:image"
        content="https://opengraph.b-cdn.net/production/images/479b1bb2-b1a4-4823-81d5-0db9c20df5a4.jpg?token=4j78W1-nCx7NB_vbD5Iiu6o7cQ3Bbo6ayMCM6Z8h4ZQ&height=630&width=1200&expires=33281753864"
      />

      {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      <body className={`${monaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
