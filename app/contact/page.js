import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us | Hari Om Enterprises - Electronics Store Pura Mufti",
  description: "Get in touch with Hari Om Enterprises. Visit our Pura Mufti showroom, call us at +91 82991 74561, or send an inquiry for Air Conditioners, Smart TVs, Refrigerators, Heaters, and LED Bulbs.",
  keywords: ["contact Hari Om Enterprises", "electronics store phone Uttar Pradesh", "buy AC Pura Mufti", "Hari Om Enterprises location", "Uttar Pradesh electronics dealer list"],
  alternates: {
    canonical: "https://hariomenterprises.in/contact",
  }
};

export default function Contact() {
  const contactBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hari Om Enterprises",
    "image": "https://hariomenterprises.in/images/ac_unit.png",
    "@id": "https://hariomenterprises.in/#store",
    "url": "https://hariomenterprises.in",
    "telephone": "+919876543210",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nayaganj, Manauri Rd Pura Mufti",
      "addressLocality": "Prayagraj",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "212208",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBusinessSchema) }}
      />

      <main className="section" aria-label="Contact Information and Form">
        <div className="section-container">
          <div className="section-header" style={{ marginBottom: "60px" }}>
            <h2>Get In Touch With Us</h2>
            <p>
              Have a question about product pricing, brand discounts, energy ratings, or delivery schedules?
              Reach out to us and our representative will assist you.
            </p>
          </div>

          <div className="contact-layout">
            {/* Contact Details & Map Column */}
            <div className="contact-info-panel">
              <h2>Store Information</h2>
              <p>Feel free to visit our showroom in Pura Mufti, Prayagraj. We have direct product demos for all appliances.</p>

              <address className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-text">
                    <h3>Showroom Address</h3>
                    <p>Nayaganj, Manauri Rd</p>
                    <p>Pura Mufti, Prayagraj, Uttar Pradesh 212208, India</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-text">
                    <h3>Phone Numbers</h3>
                    <p><a href="tel:+919876543210">+91 82991 74561</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">✉️</div>
                  <div className="contact-detail-text">
                    <h3>Email Address</h3>
                    <p><a href="mailto:ashishssingh143@gmail.com">ashishssingh143@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">⏰</div>
                  <div className="contact-detail-text">
                    <h3>Business Hours</h3>
                    <p>Monday - Sunday</p>
                    <p>10:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </address>

              {/* High-quality map visual placeholder */}
              <div className="contact-map-stub">
                <p><strong>📍 Hari Om Enterprises Location map</strong></p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0 0 16px" }}>
                  Located in the center of Pura Mufti, Uttar Pradesh Nayaganj, Manauri Rd.
                </p>
                {/* Embed modern iframe or simple visual mapping mockup */}
                <div style={{ background: "rgba(255,255,255,0.02)", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed var(--border-color)", borderRadius: "8px" }}>
                  <span style={{ color: "var(--accent-primary)", fontSize: "0.9rem", fontWeight: "600" }}>
                    [ Pura Mufti Nayaganj, Manauri Rd Map Coordinates ]
                  </span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
