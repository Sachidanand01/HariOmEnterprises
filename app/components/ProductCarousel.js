"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const PRODUCTS = [
  {
    id: "ac",
    tag: "Air Conditioner",
    title: "VoltAir 1.5 Ton 5-Star Inverter Split AC",
    description: "Beat the Indian summer with the ultra-efficient VoltAir Split AC. Engineered with advanced inverter technology, dual-rotary compressor, and 100% copper condenser. Offers rapid cooling even at 52°C ambient temperature while ensuring maximum electricity savings.",
    image: "/images/ac_unit.png",
    specs: ["5-Star Energy Rating", "100% Copper Condenser", "Smart WiFi Enabled", "10-Year Warranty"],
    price: "₹38,490",
    originalPrice: "₹52,990",
  },
  {
    id: "tv",
    tag: "Smart OLED TV",
    title: "AstraView 55\" Ultra HD 4K Smart OLED TV",
    description: "Elevate your home entertainment with AstraView's bezel-less design. Featuring a true 4K OLED display, Dolby Vision IQ, Dolby Atmos surround audio, and built-in streaming apps. Perfect for sports, movies, and console gaming in modern Indian living rooms.",
    image: "/images/smart_tv.png",
    specs: ["True 4K OLED Screen", "Dolby Vision & Atmos", "Google TV OS", "3 x HDMI 2.1 Ports"],
    price: "₹89,999",
    originalPrice: "₹1,29,990",
  },
  {
    id: "fridge",
    tag: "Refrigerator",
    title: "FrostGuard 350L Double Door Inverter Refrigerator",
    description: "Keep your food fresh and drinks chilled with FrostGuard's intelligent dual-fan technology. Equipped with a digital inverter compressor, auto-defrost functionality, convertible freezer storage, and humidity control drawers suited for Indian kitchens.",
    image: "/images/refrigerator.png",
    specs: ["350 Liters Capacity", "Inverter Compressor", "Convertible 5-in-1", "3-Star Energy Rating"],
    price: "₹32,990",
    originalPrice: "₹45,990",
  },
  {
    id: "heater",
    tag: "Room Heater",
    title: "AeroWarm 2000W PTC Tower Room Heater",
    description: "Stay warm during cold winter nights with AeroWarm's ceramic heating technology. Features wide-angle auto oscillation, remote control operation, adjustable digital thermostat, and double overheat safety protection with tip-over auto-cut off.",
    image: "/images/room_heater.png",
    specs: ["2000W Ceramic PTC", "Wide Angle Oscillation", "Remote Control", "Overheat Safety Shut-off"],
    price: "₹5,490",
    originalPrice: "₹7,990",
  },
  {
    id: "led",
    tag: "LED Lighting",
    title: "LuminaSmart 12W Wi-Fi Color LED Bulb",
    description: "Light up your smart home with LuminaSmart LED bulbs. Offers 16 million colors, voice control compatibility with Alexa and Google Assistant, custom lighting schedules, and up to 85% energy savings compared to traditional incandescent lighting.",
    image: "/images/led_bulb.png",
    specs: ["16 Million RGB Colors", "WiFi App Controlled", "Voice Assistant Sync", "25,000 Hours Lifespan"],
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
                  Call Now
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
