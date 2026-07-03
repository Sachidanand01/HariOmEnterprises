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
  title: "हरि ओम एंटरप्राइजेस | पूरा मुफ्ती, प्रयागराज में बेस्ट इलेक्ट्रॉनिक्स शोरूम",
  description: "पूरा मुफ्ती, प्रयागराज में अधिकृत इलेक्ट्रॉनिक्स डीलर। स्प्लिट एसी, स्मार्ट एलईडी टीवी, इन्वर्टर फ्रिज, रूम हीटर और एलईडी बल्ब पर सर्वोत्तम मूल्य और वारंटी पाएं।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi-IN" className={`${geistSans.variable} ${geistMono.variable}`}>
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
