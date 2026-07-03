"use client";

import { useState } from "react";
import Image from "next/image";

const APPLIANCES = [
  { id: "ac", name: "स्प्लिट एसी (AC)", image: "/images/ac_unit.png" },
  { id: "tv", name: "स्मार्ट एलईडी टीवी (TV)", image: "/images/smart_tv.png" },
  { id: "fridge", name: "डबल डोर रेफ्रिजरेटर", image: "/images/refrigerator.png" },
  { id: "heater", name: "टॉवर रूम हीटर", image: "/images/room_heater.png" },
  { id: "led", name: "स्मार्ट एलईडी बल्ब", image: "/images/led_bulb.png" },
  { id: "wm", name: "ऑटोमैटिक वाशिंग मशीन", image: "/images/refrigerator.png" },
  { id: "geyser", name: "क्विक वॉटर गीजर", image: "/images/room_heater.png" },
  { id: "oven", name: "स्मार्ट माइक्रोवेव ओवन", image: "/images/refrigerator.png" }
];

export default function ApplianceTicker() {
  const [selectedAppliance, setSelectedAppliance] = useState(null);

  // Dynamic seasonal hot-selling recommendations
  const getSeasonalRecommendation = () => {
    const month = new Date().getMonth(); // 0 = Jan, 6 = July
    if (month >= 2 && month <= 5) {
      return {
        season: "गर्मी का मौसम (Summer Season)",
        product: "वोल्टएयर 1.5 टन 5-स्टार स्प्लिट एसी & इन्वर्टर रेफ्रिजरेटर",
        message: "गर्मियों के इस मौसम में हमारे स्टोर पर 5-स्टार एनर्जी रेटिंग वाले स्प्लिट एसी (AC) और डबल-डोर फ्रिज की सबसे ज्यादा बिक्री हो रही है। भारी इन-स्टोर डिस्काउंट और नो-कॉस्ट EMI ऑफर्स का लाभ उठाने के लिए अभी संपर्क करें!"
      };
    } else if (month >= 6 && month <= 8) {
      return {
        season: "मानसून/बारिश का मौसम (Monsoon Season)",
        product: "एस्ट्राव्यू 55\" अल्ट्रा एचडी 4K स्मार्ट टीवी & एलईडी लाइट्स",
        message: "मानसून के इस सीजन में घर के अंदर मनोरंजन और होम सिनेमा का आनंद लेने के लिए हमारे 4K स्मार्ट ओएलईडी टीवी और कलर-चेंजिंग वाई-फाई स्मार्ट एलईडी बल्ब सबसे ज्यादा बिकने वाले (Hot-selling) उत्पाद हैं। बुकिंग के लिए अभी कॉल करें!"
      };
    } else {
      return {
        season: "सर्दी का मौसम (Winter Season)",
        product: "एयरोवॉर्म 2000W टॉवर रूम हीटर & वॉटर गीजर",
        message: "सर्दियों की इस कड़ाके की ठंड में कमरों को आरामदायक रखने के लिए हमारे 2000W सिरेमिक रूम हीटर और एनर्जी-सेविंग गीजर की सबसे ज्यादा मांग है। स्टॉक सीमित है, तुरंत बुक करने के लिए अभी कॉल करें!"
      };
    }
  };

  const seasonal = getSeasonalRecommendation();

  // Helper arrays for infinite continuous marquee loop (at least 8 photos replicated)
  const row1Appliances = [...APPLIANCES, ...APPLIANCES];
  // Shift array elements slightly for Row 2 variety
  const row2Appliances = [
    ...APPLIANCES.slice(4),
    ...APPLIANCES.slice(0, 4),
    ...APPLIANCES.slice(4),
    ...APPLIANCES.slice(0, 4)
  ];

  return (
    <>
      <div className="ticker-wrapper" aria-label="इलेक्ट्रॉनिक्स उपकरणों की गैलरी">
        {/* Row 1 - Moves Left */}
        <div className="ticker-row">
          <div className="ticker-track left">
            {row1Appliances.map((appliance, idx) => (
              <div 
                key={`r1-${appliance.id}-${idx}`}
                className="ticker-tile"
                onClick={() => setSelectedAppliance(appliance)}
                role="button"
                tabIndex={0}
                aria-label={`${appliance.name} का बड़ा रूप देखें`}
              >
                <Image 
                  src={appliance.image} 
                  alt={appliance.name}
                  fill
                  sizes="240px"
                />
                <div className="ticker-tile-label">{appliance.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="ticker-row">
          <div className="ticker-track right">
            {row2Appliances.map((appliance, idx) => (
              <div 
                key={`r2-${appliance.id}-${idx}`}
                className="ticker-tile"
                onClick={() => setSelectedAppliance(appliance)}
                role="button"
                tabIndex={0}
                aria-label={`${appliance.name} का बड़ा रूप देखें`}
              >
                <Image 
                  src={appliance.image} 
                  alt={appliance.name}
                  fill
                  sizes="240px"
                />
                <div className="ticker-tile-label">{appliance.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Modal Popup */}
      {selectedAppliance && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedAppliance(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close" 
              onClick={() => setSelectedAppliance(null)}
              aria-label="पॉपअप बंद करें"
            >
              ✕
            </button>
            
            <div className="modal-image-container">
              <Image 
                src={selectedAppliance.image} 
                alt={selectedAppliance.name}
                fill
                sizes="500px"
              />
            </div>
            
            <h3 className="modal-title">{selectedAppliance.name}</h3>

            {/* Dynamic Seasonal Recommendation */}
            <div className="seasonal-prompt-box">
              <div className="seasonal-prompt-title">
                <span>🔥</span> इस सीजन का हॉट-सेलिंग उत्पाद!
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "8px" }}>
                <strong>सीजन:</strong> {seasonal.season}
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: "700", marginBottom: "8px" }}>
                <strong>सबसे ज्यादा मांग:</strong> {seasonal.product}
              </p>
              <p className="seasonal-prompt-text">{seasonal.message}</p>
            </div>

            <a href="tel:+918299174561" className="btn btn-primary modal-action-btn">
              अभी ऑर्डर करने के लिए कॉल करें
            </a>
          </div>
        </div>
      )}
    </>
  );
}
