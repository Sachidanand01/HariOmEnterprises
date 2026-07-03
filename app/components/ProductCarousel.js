"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const PRODUCTS = [
  {
    id: "ac",
    tag: "एयर कंडीशनर (AC)",
    title: "वोल्टएयर 1.5 टन 5-स्टार इन्वर्टर स्प्लिट एसी",
    description: "भीषण भारतीय गर्मियों को मात देने के लिए वोल्टएयर स्प्लिट एसी एक बेहतरीन विकल्प है। यह उन्नत इन्वर्टर तकनीक, डुअल-रोटरी कंप्रेसर और 100% तांबे के कंडेनसर के साथ आता है। यह 52°C तापमान में भी त्वरित कूलिंग और बिजली की भारी बचत सुनिश्चित करता है।",
    image: "/images/ac_unit.png",
    specs: ["5-स्टार एनर्जी रेटिंग", "100% कॉपर कंडेनसर", "स्मार्ट वाईफाई इनेबल्ड", "10 साल की वारंटी"],
    price: "₹38,490",
    originalPrice: "₹52,990",
  },
  {
    id: "tv",
    tag: "स्मार्ट ओएलईडी टीवी (Smart TV)",
    title: "एस्ट्राव्यू 55\" अल्ट्रा एचडी 4K स्मार्ट ओएलईडी टीवी",
    description: "एस्ट्राव्यू टीवी के बेज़ेल-लेस डिज़ाइन के साथ मनोरंजन का अनूठा अनुभव पाएं। इसमें 4K OLED डिस्प्ले, डॉल्बी विजन आईक्यू, डॉल्बी एटमॉस सराउंड ऑडियो और इन-बिल्ट ऐप्स मिलते हैं। आधुनिक लिविंग रूम के लिए यह एकदम सही है।",
    image: "/images/smart_tv.png",
    specs: ["अल्ट्रा 4K OLED स्क्रीन", "डॉल्बी विजन और एटमॉस", "गूगल टीवी ओएस", "3 x एचडीएमआई 2.1 पोर्ट"],
    price: "₹89,999",
    originalPrice: "₹1,29,990",
  },
  {
    id: "fridge",
    tag: "रेफ्रिजरेटर (Fridge)",
    title: "फ्रॉस्टगार्ड 350 लीटर डबल डोर इन्वर्टर रेफ्रिजरेटर",
    description: "फ्रॉस्टगार्ड की इंटेलिजेंट डुअल-फैन तकनीक से भोजन को ताज़ा और पेय पदार्थों को ठंडा रखें। डिजिटल इन्वर्टर कंप्रेसर, ऑटो-डीफ्रॉस्ट सुविधा, और भारतीय रसोई के अनुकूल कनवर्टिबल 5-इन-1 स्टोरेज की सुविधा उपलब्ध है।",
    image: "/images/refrigerator.png",
    specs: ["350 लीटर क्षमता", "इन्वर्टर कंप्रेसर", "कनवर्टिबल 5-इन-1", "3-स्टार एनर्जी रेटिंग"],
    price: "₹32,990",
    originalPrice: "₹45,990",
  },
  {
    id: "heater",
    tag: "रूम हीटर (Heater)",
    title: "एयरोवॉर्म 2000W पीटीसी टॉवर रूम हीटर",
    description: "सर्दियों की ठंडी रातों में एयरोवॉर्म की सिरेमिक हीटिंग तकनीक से गर्म रहें। इसमें वाइड-एंगल ऑटो ऑसिलेशन, रिमोट कंट्रोल ऑपरेशन, एडजस्टेबल डिजिटल थर्मोस्टेट और डबल ओवरहीट सेफ्टी प्रोटेक्शन की सुविधा है।",
    image: "/images/room_heater.png",
    specs: ["2000W सिरेमिक पीटीसी", "वाइड एंगल ऑसिलेशन", "रिमोट कंट्रोल", "ओवरहीट ऑटो-कट सेफ्टी"],
    price: "₹5,490",
    originalPrice: "₹7,990",
  },
  {
    id: "led",
    tag: "एलईडी बल्ब (LED Bulb)",
    title: "ल्यूमिनास्मार्ट 12W वाई-फाई स्मार्ट एलईडी बल्ब",
    description: "ल्यूमिनास्मार्ट एलईडी बल्ब से अपने घर को स्मार्ट बनाएं। यह 1.6 करोड़ रंगों, एलेक्सा और गूगल असिस्टेंट के साथ वॉयस कंट्रोल कम्पेटिबिलिटी, कस्टम शेड्यूलिंग और 85% तक बिजली की बचत प्रदान करता है।",
    image: "/images/led_bulb.png",
    specs: ["16 मिलियन आरजीबी रंग", "वाईफाई ऐप कंट्रोल", "वॉयस असिस्टेंट सिंक", "25,000 घंटे लाइफस्पैन"],
    price: "₹699",
    originalPrice: "₹1,499",
  }
];

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  return (
    <div 
      className="carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-roledescription="carousel"
      aria-label="Featured electronics products sold in our store"
    >
      <div className="carousel-container">
        {/* Left Arrow */}
        <button 
          onClick={prevSlide} 
          className="carousel-btn carousel-btn-prev"
          aria-label="Previous slide"
        >
          ❮
        </button>

        {/* Slides */}
        {PRODUCTS.map((product, idx) => (
          <div 
            key={product.id} 
            className={`carousel-slide ${idx === activeIndex ? "active" : ""}`}
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${PRODUCTS.length}`}
            aria-hidden={idx !== activeIndex}
          >
            <div className="carousel-img-container">
              <Image 
                src={product.image} 
                alt={`${product.title} - Available at Hari Om Enterprises`}
                fill
                priority={idx === 0}
                className="carousel-image"
                sizes="(max-width: 992px) 100vw, 50vw"
              />
            </div>
            <div className="carousel-info">
              <span className="product-tag">{product.tag}</span>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.description}</p>
              
              <div className="product-specs">
                {product.specs.map((spec, sIdx) => (
                  <span key={sIdx} className="spec-tag">{spec}</span>
                ))}
              </div>

              <div className="price-box">
                <span className="current-price">{product.price}</span>
                <span className="original-price">{product.originalPrice}</span>
              </div>

              <div style={{ marginTop: "16px" }}>
                <a href="tel:+918299174561" className="btn btn-primary">
                  अभी कॉल करें
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Right Arrow */}
        <button 
          onClick={nextSlide} 
          className="carousel-btn carousel-btn-next"
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>

      {/* Dots navigation */}
      <div className="carousel-dots">
        {PRODUCTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`carousel-dot ${idx === activeIndex ? "active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
