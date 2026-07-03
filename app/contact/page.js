export const metadata = {
  title: "Contact Us | Hari Om Enterprises - Electronics Store Pura Mufti",
  description: "Get in touch with Hari Om Enterprises. Visit our Pura Mufti showroom, call us at +91 82991 74561, or view our location map for Air Conditioners, Smart TVs, Refrigerators, Heaters, and LED Bulbs.",
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
    "telephone": "+918299174561",
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

      <main className="section" aria-label="Contact Information and Store Location">
        <div className="section-container">
          <div className="section-header" style={{ marginBottom: "60px" }}>
            <h2>Contact Us & Directions</h2>
            <p>
              Get in touch with us directly or navigate to our store in Pura Mufti, Prayagraj. 
              We are open every day of the week to serve you with the best appliance deals.
            </p>
          </div>

          <div className="contact-layout">
            {/* Contact Details Column */}
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
                    <p><a href="tel:+918299174561">+91 82991 74561</a></p>
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
            </div>

            {/* Interactive Map Column */}
            <div className="contact-map-panel" style={{ height: "100%", minHeight: "450px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <iframe
                src="https://maps.google.com/maps?q=Nayaganj,%20Manauri%20Rd%20Pura%20Mufti,%20Prayagraj,%20Uttar%20Pradesh%20212208&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px", display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hari Om Enterprises Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

