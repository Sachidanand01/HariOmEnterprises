"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "मुख्य पृष्ठ", path: "/" },
    { name: "हमारे उत्पाद", path: "/#products" },
    { name: "हमें क्यों चुनें", path: "/#why-us" },
    { name: "अक्सर पूछे जाने वाले प्रश्न", path: "/#faq" },
    { name: "संपर्क करें", path: "/contact" },
  ];

  return (
    <nav className="navbar" id="site-navigation" aria-label="Main Navigation">
      <div className="navbar-container">
        <Link href="/" className="nav-logo" aria-label="Hari Om Enterprises Home">
          हरि ओम <span>एंटरप्राइजेस</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="nav-list"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation links */}
        <ul 
          id="nav-list"
          className="nav-links" 
          style={mobileMenuOpen ? { display: "flex", flexDirection: "column", position: "absolute", top: "80px", left: "0", right: "0", background: "var(--bg-secondary)", padding: "20px", borderBottom: "1px solid var(--border-color)", gap: "16px" } : {}}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path.startsWith("/#") && pathname === "/");
            return (
              <li key={item.name}>
                <Link 
                  href={item.path} 
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          <li>
            <a 
              href="tel:+918299174561" 
              className="nav-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
