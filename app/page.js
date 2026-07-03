import ProductCarousel from "./components/ProductCarousel";
import Link from "next/link";
import ApplianceTicker from "./components/ApplianceTicker";

export const metadata = {
  title: "हरि ओम एंटरप्राइजेस | पूरा मुफ्ती, प्रयागराज में बेस्ट इलेक्ट्रॉनिक्स शोरूम",
  description: "पूरा मुफ्ती, प्रयागराज में प्रीमियम घरेलू इलेक्ट्रॉनिक्स की खरीदारी करें। वोल्टएयर एसी, एस्ट्राव्यू स्मार्ट टीवी, फ्रॉस्टगार्ड फ्रिज, एयरोवॉर्म रूम हीटर और ऊर्जा-बचत करने वाले एलईडी बल्बों के अधिकृत डीलर। सबसे कम दाम और असली वारंटी।",
  keywords: ["इलेक्ट्रॉनिक्स दुकान प्रयागराज", "एसी डीलर पूरा मुफ्ती", "स्मार्ट टीवी ऑनलाइन यूपी", "फ्रिज शोरूम प्रयागराज", "रूम हीटर प्रयागराज", "एलईडी बल्ब थोक भारत", "घरेलू उपकरण प्रयागराज"],
  alternates: {
    canonical: "https://hariomenterprises.in",
  },
  openGraph: {
    title: "हरि ओम एंटरप्राइजेस | प्रयागराज, उत्तर प्रदेश में बेस्ट इलेक्ट्रॉनिक्स शोरूम",
    description: "पूरा मुफ्ती में स्प्लिट एसी, स्मार्ट टीवी, डबल डोर फ्रिज, रूम हीटर और एलईडी बल्ब पर सर्वोत्तम डील्स और वारंटी पाएं।",
    url: "https://hariomenterprises.in",
    siteName: "हरि ओम एंटरप्राइजेस",
    locale: "hi_IN",
    type: "website",
  }
};

export default function Home() {
  // LocalBusiness structured schema markup
  const localBusinessSchema = {
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
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.4358,
      "longitude": 81.8463
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

  // FAQPage structured schema markup in Hindi for localized search engine queries
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "क्या आप प्रयागराज और आस-पास के क्षेत्रों में एयर कंडीशनर (AC) की इंस्टॉलेशन सेवाएं प्रदान करते हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "जी हाँ, हरि ओम एंटरप्राइजेस हमारे स्टोर से खरीदे गए सभी एसी यूनिट्स के लिए पेशेवर इंस्टॉलेशन सहायता प्रदान करता है। हमारे प्रमाणित तकनीशियन प्रयागराज और आस-पास के क्षेत्रों में त्वरित सेवा प्रदान करते हैं।"
        }
      },
      {
        "@type": "Question",
        "name": "क्या बेचे जाने वाले सभी इलेक्ट्रॉनिक्स उत्पाद वारंटी के साथ आते हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "बिल्कुल! हम केवल 100% असली और ब्रांड-अधिकृत उत्पाद ही बेचते हैं। टीवी, फ्रिज या एसी जैसे प्रत्येक उपकरण के साथ आपको आधिकारिक ब्रांड वारंटी कार्ड और पक्का टैक्स इनवॉइस मिलता है।"
        }
      },
      {
        "@type": "Question",
        "name": "क्या आप घरेलू उपकरणों की होम डिलीवरी प्रदान करते हैं?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हम पूरा मुफ्ती और प्रयागराज के नजदीकी क्षेत्रों में मुफ्त होम डिलीवरी प्रदान करते हैं। अन्य दूरदराज के क्षेत्रों के लिए हम मामूली डिलीवरी शुल्क पर सुरक्षित लॉजिस्टिक्स शिपमेंट की व्यवस्था करते हैं।"
        }
      },
      {
        "@type": "Question",
        "name": "क्या आपके स्टोर पर फाइनेंस या नो-कॉस्ट EMI की सुविधा उपलब्ध है?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "हाँ, हम बजाज फिनसर्व, एचडीएफसी बैंक और आईसीआईसीआई बैंक के साथ साझेदारी में एलईडी टीवी, एयर कंडीशनर और रेफ्रिजरेटर पर नो-कॉस्ट ईएमआई (No-Cost EMI) और आसान फाइनेंस योजनाएं प्रदान करते हैं।"
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
      <section className="hero" aria-label="मुख्य बैनर">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">पूरा मुफ्ती का नंबर 1 इलेक्ट्रॉनिक्स शोरूम</span>
            <h1>प्रीमियम इलेक्ट्रॉनिक्स और घरेलू उपकरण</h1>
            <p>
              <strong>हरि ओम एंटरप्राइजेस</strong> के साथ अपने घर को और भी आधुनिक और आरामदायक बनाएं। 
              अग्रणी अंतरराष्ट्रीय ब्रांडों से ऊर्जा-बचत करने वाले 5-स्टार स्प्लिट एसी, 
              बेज़ेल-लेस स्मार्ट टीवी, डबल-डोर रेफ्रिजरेटर, सुरक्षित रूम हीटर और स्मार्ट एलईडी बल्ब 
              सर्वोत्तम मूल्यों पर प्राप्त करें।
            </p>
            <div className="hero-ctas">
              <Link href="#products" className="btn btn-primary">उत्पाद देखें</Link>
              <a href="tel:+918299174561" className="btn btn-secondary">अभी कॉल करें</a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <h3>15K+</h3>
                <p>खुश ग्राहक</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>असली ब्रांड वारंटी</p>
              </div>
              <div className="stat-item">
                <h3>15+ वर्ष</h3>
                <p>भरोसेमंद स्टोर उपस्थिति</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Appliance Scrolling Ticker */}
      <section className="section" style={{ paddingBottom: "0px", paddingTop: "40px" }} aria-label="उत्पाद गैलरी और हॉट-सेलिंग ऑफर्स">
        <div className="section-header" style={{ marginBottom: "20px" }}>
          <h2>उत्पाद गैलरी और लाइव डील्स</h2>
          <p>
            नीचे दिए गए किसी भी उपकरण पर क्लिक करें और वर्तमान सीजन के सबसे हॉट-सेलिंग (Hot-selling) उत्पाद का सुझाव और विशेष डिस्काउंट ऑफर देखें।
          </p>
        </div>
        <ApplianceTicker />
      </section>

      {/* Products Carousel Section */}
      <section id="products" className="section" aria-label="मुख्य उत्पाद शोरूम">
        <div className="section-header">
          <h2>हमारे मुख्य उत्पाद</h2>
          <p>
            हमारे सबसे लोकप्रिय और ऊर्जा-कुशल उपकरणों की विस्तृत श्रृंखला देखें। 
            ये सभी मॉडल बिजली की खपत को कम करने और आपके पैसे बचाने के लिए डिज़ाइन किए गए हैं।
          </p>
        </div>
        <div className="section-container">
          <ProductCarousel />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="section section-alt" aria-label="स्टोर के लाभ">
        <div className="section-header">
          <h2>हरि ओम एंटरप्राइजेस से ही क्यों खरीदें?</h2>
          <p>हम गुणवत्तापूर्ण उत्पादों, बेहतरीन सर्विस और ग्राहकों के साथ विश्वास का रिश्ता बनाने के लिए प्रतिबद्ध हैं।</p>
        </div>
        <div className="section-container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>100% असली ब्रांड उत्पाद</h3>
              <p>हम प्रमुख इलेक्ट्रॉनिक्स ब्रांडों के अधिकृत रिटेल डीलर हैं, जो पक्के टैक्स इनवॉइस और ब्रांड वारंटी की गारंटी देते हैं।</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>सर्वोत्तम स्थानीय मूल्य</h3>
              <p>हम प्रमुख ऑनलाइन स्टोरों और स्थानीय बाजारों से बेहतर मूल्य और विशेष इन-स्टोर डिस्काउंट प्रदान करते हैं।</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>त्वरित डिलीवरी व इंस्टॉलेशन</h3>
              <p>पूरा मुफ्ती और प्रयागराज क्षेत्र में उसी दिन एक्सप्रेस होम डिलीवरी और कुशल तकनीशियनों द्वारा इंस्टॉलेशन सहायता।</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>भरोसेमंद ग्राहक सहायता</h3>
              <p>बिक्री के बाद भी हम आपकी पूरी सहायता करते हैं और निर्माता कंपनियों से आपकी वारंटी टिकटों को जल्दी सुलझाते हैं।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section id="reviews" className="section" aria-label="ग्राहकों की समीक्षा">
        <div className="section-header">
          <h2>हमारे ग्राहक क्या कहते हैं</h2>
          <p>पूरा मुफ्ती और प्रयागराज के उन परिवारों के अनुभव पढ़ें जिन्होंने अपने घर के उपकरणों के लिए हम पर भरोसा किया।</p>
        </div>
        <div className="section-container">
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "मैंने यहाँ से वोल्टएयर का 1.5 टन एसी खरीदा था। स्टोर स्टाफ ने मुझे 5-स्टार मॉडल लेने की सलाह दी जिससे मेरी बिजली का बिल काफी कम हो गया है। इंस्टॉलेशन भी उसी दिन हो गया। बहुत बढ़िया सर्विस!"
              </p>
              <div className="testimonial-user">
                <div className="user-avatar">राज</div>
                <div className="user-info">
                  <h4>राजेश कुमार</h4>
                  <p>पूरा मुफ्ती, प्रयागराज</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "डबल-डोर रेफ्रिजरेटर खरीदने का शानदार अनुभव रहा। ऑनलाइन साइट्स की तुलना में बेहतर छूट मिली और बजाज फिनसर्व के जरिए आसान किश्तों (Zero Cost EMI) पर फ्रिज मिल गया।"
              </p>
              <div className="testimonial-user">
                <div className="user-avatar">अंज</div>
                <div className="user-info">
                  <h4>अंजलि शर्मा</h4>
                  <p>झूंसी, प्रयागराज</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "एलईडी लाइट्स और 55-इंच स्मार्ट टीवी का बेहतरीन कलेक्शन है। स्टाफ को तकनीकी जानकारी अच्छी है और कीमतें भी बहुत वाजिब हैं। इलेक्ट्रॉनिक्स के लिए बेस्ट दुकान!"
              </p>
              <div className="testimonial-user">
                <div className="user-avatar">विक</div>
                <div className="user-info">
                  <h4>विक्रम पटेल</h4>
                  <p>सिविल लाइन्स, प्रयागराज</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="section section-alt" aria-label="अक्सर पूछे जाने वाले प्रश्न">
        <div className="section-header">
          <h2>अक्सर पूछे जाने वाले प्रश्न</h2>
          <p>स्टोर नीतियों, वारंटी, होम डिलीवरी और इंस्टॉलेशन सेवाओं के बारे में त्वरित उत्तर प्राप्त करें।</p>
        </div>
        <div className="section-container">
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">क्या आप एसी (AC) की इंस्टॉलेशन सेवाएं प्रदान करते हैं?</summary>
              <p className="faq-answer">
                हाँ, हरि ओम एंटरप्राइजेस हमारे स्टोर से खरीदे गए सभी एयर कंडीशनर के लिए व्यावसायिक इंस्टॉलेशन सेवाएं प्रदान करता है। 
                प्रमाणित तकनीशियन प्रयागराज और नजदीकी क्षेत्रों में त्वरित सहायता प्रदान करते हैं।
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">क्या बेचे जाने वाले सभी उत्पाद आधिकारिक ब्रांड वारंटी के साथ आते हैं?</summary>
              <p className="faq-answer">
                बिल्कुल! हम केवल 100% असली उत्पाद बेचते हैं। टीवी, फ्रिज, एसी या हीटर जैसे हर उपकरण के साथ आपको ब्रांड वारंटी कार्ड 
                और असली टैक्स इनवॉइस प्रदान किया जाता है ताकि भविष्य में कोई समस्या न हो।
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">आप किन क्षेत्रों में डिलीवरी की सुविधा प्रदान करते हैं?</summary>
              <p className="faq-answer">
                हम पूरा मुफ्ती, मनौरी रोड और प्रयागराज के स्थानीय क्षेत्रों में त्वरित होम डिलीवरी प्रदान करते हैं। 
                अन्य नजदीकी जिलों के लिए भी सुरक्षित परिवहन व्यवस्था उपलब्ध है।
              </p>
            </details>

            <details className="faq-item">
              <summary className="faq-question">क्या आपके स्टोर पर किश्तों (EMI) पर सामान उपलब्ध है?</summary>
              <p className="faq-answer">
                जी हाँ, हम बजाज फिनसर्व, एचडीएफसी बैंक और आईसीआईसीआई बैंक क्रेडिट कार्ड के माध्यम से नो-कॉस्ट ईएमआई (No-Cost EMI) 
                और आसान मासिक किश्तों पर प्रमुख घरेलू उपकरण उपलब्ध कराते हैं।
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
