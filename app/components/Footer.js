import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>HARI OM <span>ENTERPRISES</span></h3>
          <p>
            Your leading electronics destination in India. Specializing in high-quality, 
            energy-efficient household appliances like Smart TVs, Air Conditioners, double-door Refrigertators, 
            cozy Room Heaters, and smart LED Bulbs. Experience unmatched service and genuine brand warranty.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#products">Featured Products</Link></li>
            <li><Link href="/#why-us">Why Choose Us</Link></li>
            <li><Link href="/#faq">FAQs</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Shop Categories</h4>
          <ul>
            <li><Link href="/#products">Air Conditioners (AC)</Link></li>
            <li><Link href="/#products">Smart LED TVs</Link></li>
            <li><Link href="/#products">Double Door Fridges</Link></li>
            <li><Link href="/#products">Premium Room Heaters</Link></li>
            <li><Link href="/#products">Smart LED Bulbs</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Shop</h4>
          <p>
            <strong>📍 Address:</strong> Main Market Road, Sector 5, Dwarka, New Delhi, Delhi 110075, India
          </p>
          <p>
            <strong>📞 Phone:</strong> +91 98765 43210, +91 011 2345 6789
          </p>
          <p>
            <strong>✉️ Email:</strong> sales@hariomenterprises.in
          </p>
          <p>
            <strong>⏰ Hours:</strong> Mon - Sun: 10:00 AM - 9:00 PM
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hari Om Enterprises. All Rights Reserved. Authorized Partner for leading Electronics Brands in India.</p>
        <div className="footer-bottom-links">
          <Link href="/#">Privacy Policy</Link>
          <Link href="/#">Terms & Conditions</Link>
          <Link href="/#">Site Map</Link>
        </div>
      </div>
    </footer>
  );
}
