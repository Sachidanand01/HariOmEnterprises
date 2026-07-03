import ProductCarousel from "./components/ProductCarousel";
import Link from "next/link";

export const metadata = {
  title: "Hari Om Enterprises | Best Electronics Shop in Dwarka, New Delhi",
  description: "Shop premium household electronics at Hari Om Enterprises, Dwarka. Authorized dealer of Split AC, Smart LED TV, Inverter Refrigerator, Room Heaters, and energy-saving LED Bulbs in India. Best price guarantee and authentic brand warranty.",
  keywords: ["electronics shop Delhi", "AC dealer Dwarka", "smart TV online India", "refrigerator shop Delhi", "room heater Dwarka", "LED bulb wholesale India", "household appliances Delhi"],
  alternates: {
    canonical: "https://hariomenterprises.in",
  },
  openGraph: {
    title: "Hari Om Enterprises | Best Electronics Shop in Delhi NCR",
    description: "Shop energy-saving ACs, Ultra HD TVs, convertible Refrigerators, Room Heaters, and LED bulbs at Dwarka's premium electronics showroom.",
    url: "https://hariomenterprises.in",
    siteName: "Hari Om Enterprises",
    locale: "en_IN",
    type: "website",
  }
};

export default function Home() {
  // LocalBusiness structured schema markup
  const localBusinessSchema = {
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
      "streetAddress": "Main Market Road, Sector 5, Dwarka",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110075",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5921,
      "longitude": 77.0628
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.facebook.com/hariomenterprises",
      "https://www.instagram.com/hariomenterprises"
    ]
  };

  // FAQPage structured schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide installation services for Air Conditioners (AC) in Delhi NCR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Hari Om Enterprises provides professional installation support for all AC units purchased from our store. Our certified technicians serve New Delhi, Gurugram, Noida, and Faridabad."
        }
      },
      {
        "@type": "Question",
        "name": "Are the electronics products sold covered under manufacturer warranty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We only sell 100% genuine and authorized brand products. Every appliance like TV, Fridge, or AC comes with an official brand warranty card and retail tax invoice."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver home appliances across India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer free home delivery within Dwarka and West Delhi regions. For other regions in NCR and across India, we arrange safe logistics shipment at nominal delivery charges."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer EMI or financing plans for high-value appliances?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we partner with Bajaj Finserv, HDFC Bank, and ICICI Bank to offer No-Cost EMI and credit card financing plans on LED TVs, Air Conditioners, and Refrigerators."
        }
      }
    ]
  };

  return (
    <>
      {/* Insert JSON-LD Schemas in head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="hero" aria-label="Welcome Banner">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">Dwarka's No. 1 Electronics Showroom</span>
            <h1>Premium Electronics & Household Appliances in India</h1>
            <p>
              Elevate your home comfort with **Hari Om Enterprises**. Discover state-of-the-art 
              5-Star inverter Air Conditioners, bezel-less Smart TVs, smart double-door Refrigerators, 
              safe convection Room Heaters, and energy-saving LED Bulbs from leading international brands.
            </p>
            <div className="hero-ctas">
              <Link href="#products" className="btn btn-primary">Browse Catalog</Link>
              <Link href="/contact" className="btn btn-secondary">Inquire Store</Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <h3>15K+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Genuine Brand Warranty</p>
              </div>
              <div className="stat-item">
                <h3>15+ Yrs</h3>
                <p>Trusted Store Presence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Carousel Section */}
      <section id="products" className="section" aria-label="Featured Products Showroom">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>
            Explore our curated selection of top-selling electronics. All models are equipped 
            with energy-efficiency indicators designed to lower electricity consumption in Indian homes.
          </p>
        </div>
        <div className="section-container">
          <ProductCarousel />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="section section-alt" aria-label="Store Benefits">
        <div className="section-header">
          <h2>Why Buy From Hari Om Enterprises?</h2>
          <p>We pride ourselves on offering outstanding service and building lifelong relationships with customers across India.</p>
        </div>
        <div className="section-container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>100% Genuine Products</h3>
              <p>We are authorized retail dealers for leading global electronics manufacturers, guaranteeing authentic goods and retail tax invoices.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Local Price Guarantee</h3>
              <p>Get exclusive in-store deals and financing plans that match or beat major online retailers and local shops in NCR.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Express Delivery & Install</h3>
              <p>Enjoy same-day delivery inside Dwarka and expert installation support from certified appliance technicians.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Excellent After-Sales Care</h3>
              <p>Need support or servicing? Our team helps fast-track your warranty tickets with manufacturers directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section id="reviews" className="section" aria-label="Customer Reviews">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Read real experiences from homeowners and businesses who trust us for their electronics needs in Delhi.</p>
        </div>
        <div className="section-container">
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Bought a VoltAir 1.5 Ton AC for my apartment in Sector 10. The team guided me to a 5-star unit which saved 30% on energy bills. Installation was finished on the same evening. Outstanding customer support!"
              </p>
              <div className="testimonial-user">
                <div className="user-avatar">RK</div>
                <div className="user-info">
                  <h4>Rajesh Kumar</h4>
                  <p>Dwarka, New Delhi</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Perfect experience purchasing a double-door refrigerator. Got a great discount compared to online sites and zero cost EMI via Bajaj Finserv. Recommended electronics store!"
              </p>
              <div className="testimonial-user">
                <div className="user-avatar">AS</div>
                <div className="user-info">
                  <h4>Anjali Sharma</h4>
                  <p>Janakpuri, Delhi</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Excellent collection of LED smart lights and smart TVs. We bought a 55-inch OLED TV and multiple WiFi smart bulbs. Their prices are very competitive and sales staff are highly knowledgeable."
              </p>
              <div className="testimonial-user">
                <div className="user-avatar">VP</div>
                <div className="user-info">
                  <h4>Vikram Patel</h4>
                  <p>Gurugram, Haryana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="section section-alt" aria-label="Frequently Asked Questions">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Have questions? Find quick answers regarding store policies, warranties, delivery, and installation services.</p>
        </div>
        <div className="section-container">
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">Do you provide installation services for Air Conditioners (AC)?</summary>
              <p className="faq-answer">
                Yes, Hari Om Enterprises provides professional installation support for all AC units purchased from our store. 
                Our certified technicians service New Delhi, Gurugram, Noida, and Faridabad areas.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">Are all products covered under official manufacturer warranty?</summary>
              <p className="faq-answer">
                Absolutely! We only sell 100% genuine and authorized brand products. Every appliance like TV, Fridge, or AC 
                comes with an official brand warranty card and retail tax invoice to ensure smooth service.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">Do you deliver home appliances across India?</summary>
              <p className="faq-answer">
                We offer free home delivery within Dwarka and West Delhi regions. For other regions in NCR and across India, 
                we arrange safe logistics shipment at nominal delivery charges.
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">Do you offer EMI or financing plans for high-value appliances?</summary>
              <p className="faq-answer">
                Yes, we partner with Bajaj Finserv, HDFC Bank, and ICICI Bank to offer No-Cost EMI and credit card financing 
                options on LED TVs, Air Conditioners, and Refrigerators.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
