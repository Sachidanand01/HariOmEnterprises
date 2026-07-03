import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hari Om Enterprises | Premium Electronics Shop in Uttar Pradesh NCR",
  description: "Authorized electronics dealer in Pura Mufti, Prayagraj. Best prices on energy-efficient Air Conditioners, Smart TVs, Refrigerators, Room Heaters, and LED lighting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>
        <div className="layout-wrapper">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
