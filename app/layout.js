import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

export const metadata = {
  title: "Prince Trambadia | Portfolio",
  description: "MBA Student",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <ScrollTop />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
