export const metadata = {
  title: "संपर्क करें | हरि ओम एंटरप्राइजेस - इलेक्ट्रॉनिक्स स्टोर पूरा मुफ्ती",
  description: "हरि ओम एंटरप्राइजेस से संपर्क करें। हमारे पूरा मुफ्ती शोरूम का पता, फोन नंबर +91 82991 74561, ईमेल और गूगल मैप लोकेशन देखें। हमारे स्टोर पर आएं और बेस्ट डील्स पाएं।",
  keywords: ["संपर्क हरि ओम एंटरप्राइजेस", "इलेक्ट्रॉनिक्स दुकान फोन यूपी", "एसी खरीदना है पूरा मुफ्ती", "हरि ओम एंटरप्राइजेस लोकेशन", "प्रयागराज इलेक्ट्रॉनिक्स शोरूम"],
  alternates: {
    canonical: "https://hariomenterprises.in/contact",
  }
};

export default function Contact() {
  const contactBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "हरि ओम एंटरप्राइजेस (Hari Om Enterprises)",
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

      <main className="section" aria-label="संपर्क जानकारी और स्टोर लोकेशन">
        <div className="section-container">
          <div className="section-header" style={{ marginBottom: "60px" }}>
            <h2>संपर्क करें और दिशा-निर्देश</h2>
            <p>
              हमसे सीधे फोन पर संपर्क करें या पूरा मुफ्ती, प्रयागराज में हमारे शोरूम पर आएं। 
              हम आपकी सहायता के लिए सप्ताह के सातों दिन उपलब्ध हैं।
            </p>
          </div>

          <div className="contact-layout">
            {/* Contact Details Column */}
            <div className="contact-info-panel">
              <h2>स्टोर की जानकारी</h2>
              <p>पूरा मुफ्ती, प्रयागराज में हमारे शोरूम पर अवश्य पधारें। हमारे पास सभी उपकरणों के लाइव डेमो उपलब्ध हैं।</p>

              <address className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-text">
                    <h3>शोरूम का पता</h3>
                    <p>नयागंज, मनौरी रोड</p>
                    <p>पूरा मुफ्ती, प्रयागराज, उत्तर प्रदेश 212208, भारत</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-text">
                    <h3>फोन नंबर</h3>
                    <p><a href="tel:+918299174561">+91 82991 74561</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">✉️</div>
                  <div className="contact-detail-text">
                    <h3>ईमेल पता</h3>
                    <p><a href="mailto:ashishssingh143@gmail.com">ashishssingh143@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">⏰</div>
                  <div className="contact-detail-text">
                    <h3>खुलने का समय</h3>
                    <p>सोमवार - रविवार</p>
                    <p>सुबह 10:00 बजे - रात 9:00 बजे</p>
                  </div>
                </div>
              </address>
            </div>

            {/* Interactive Map Column */}
            <div className="contact-map-panel" style={{ height: "100%", minHeight: "450px", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14406.937441472934!2d81.64732897500133!3d25.480544116811036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ad352a8c40a67%3A0xb85f9bf3e86c4364!2sHari%20Om%20Enterprises!5e0!3m2!1sen!2sin!4v1783392486922!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px", display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="हरि ओम एंटरप्राइजेस नक्शा स्थान"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
