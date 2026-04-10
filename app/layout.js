import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Prince Trambadia | Digital Marketing Specialist",
  description:
    "Prince Trambadia is a Digital Marketing Specialist based in Ahmedabad, skilled in SEO, Google Ads, Meta Ads, and performance marketing.",

  keywords: [
    "Prince Trambadia",
    "Digital Marketing Specialist",
    "SEO Expert",
    "Google Ads",
    "Meta Ads",
    "Ahmedabad Digital Marketer",
  ],

  authors: [{ name: "Prince Trambadia" }],
  creator: "Prince Trambadia",

  openGraph: {
    title: "Prince Trambadia | Portfolio",
    description:
      "Digital Marketing Specialist helping brands grow with SEO and paid ads.",
    url: "https://princebhai-portfolio.vercel.app/",
    siteName: "Prince Portfolio",
    images: [
      {
        url: "/my-img.jpeg",
        width: 1200,
        height: 630,
        alt: "Prince Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prince Trambadia | Digital Marketing Specialist",
    description: "SEO, Google Ads, Meta Ads expert helping businesses grow.",
    images: ["/my-img.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <ScrollTop />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
