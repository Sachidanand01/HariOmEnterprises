import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>हरि ओम <span>एंटरप्राइजेस</span></h3>
          <p>
            प्रयागराज में आपका प्रमुख इलेक्ट्रॉनिक्स शोरूम। हम उच्च गुणवत्ता वाले और ऊर्जा-कुशल 
            घरेलू उपकरणों जैसे कि स्मार्ट टीवी, स्प्लिट एयर कंडीशनर, डबल-डोर रेफ्रिजरेटर, 
            रूम हीटर और स्मार्ट एलईडी बल्ब की बिक्री और सर्विस में विशेषज्ञ हैं।
          </p>
        </div>

        <div className="footer-links">
          <h4>त्वरित लिंक</h4>
          <ul>
            <li><Link href="/">मुख्य पृष्ठ</Link></li>
            <li><Link href="/#products">हमारे उत्पाद</Link></li>
            <li><Link href="/#why-us">हमें क्यों चुनें</Link></li>
            <li><Link href="/#faq">अक्सर पूछे जाने वाले प्रश्न</Link></li>
            <li><Link href="/contact">संपर्क करें</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>उत्पाद श्रेणियां</h4>
          <ul>
            <li><Link href="/#products">एयर कंडीशनर (AC)</Link></li>
            <li><Link href="/#products">स्मार्ट एलईडी टीवी (TV)</Link></li>
            <li><Link href="/#products">डबल डोर फ्रिज</Link></li>
            <li><Link href="/#products">प्रीमियम रूम हीटर</Link></li>
            <li><Link href="/#products">स्मार्ट एलईडी बल्ब</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>स्टोर संपर्क</h4>
          <p>
            <strong>📍 पता:</strong> नयागंज, मनौरी रोड, पूरा मुफ्ती, प्रयागराज, उत्तर प्रदेश 212208, भारत
          </p>
          <p>
            <strong>📞 फोन:</strong> +91 82991 74561
          </p>
          <p>
            <strong>✉️ ईमेल:</strong> ashishssingh143@gmail.com
          </p>
          <p>
            <strong>⏰ समय:</strong> सोमवार - रविवार: सुबह 10:00 - रात 9:00 बजे
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} हरि ओम एंटरप्राइजेस। सर्वाधिकार सुरक्षित। भारत में प्रमुख इलेक्ट्रॉनिक्स ब्रांडों के अधिकृत भागीदार।</p>
        <div className="footer-bottom-links">
          <Link href="/#">गोपनीयता नीति</Link>
          <Link href="/#">नियम व शर्तें</Link>
          <Link href="/#">साइट मैप</Link>
        </div>
      </div>
    </footer>
  );
}
