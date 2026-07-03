"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "general",
    message: ""
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    // Validate inputs
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      setLoading(false);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      setLoading(false);
      return;
    }

    // Mock API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus({ 
        type: "success", 
        message: "Thank you for your message! Our store executive will call you within 2-4 hours." 
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "general",
        message: ""
      });
    } catch (err) {
      setStatus({ 
        type: "error", 
        message: "Something went wrong. Please try again or call us directly." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-panel">
      <h2>Send Us a Query</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="form-name">Full Name *</label>
          <input
            type="text"
            id="form-name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-email">Email Address *</label>
          <input
            type="email"
            id="form-email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-phone">Phone Number *</label>
          <input
            type="tel"
            id="form-phone"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your 10-digit mobile number"
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-product">Interested Product</label>
          <select
            id="form-product"
            name="product"
            className="form-control"
            value={formData.product}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="general">General Inquiry</option>
            <option value="ac">Air Conditioner (AC)</option>
            <option value="tv">Smart LED TV</option>
            <option value="fridge">Double Door Fridge</option>
            <option value="heater">Convection Room Heater</option>
            <option value="led">Smart LED Bulb</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="form-message">Your Message / Query *</label>
          <textarea
            id="form-message"
            name="message"
            rows="5"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the appliance you need. Write details like tonnage for AC, screen size for TV, etc."
            required
            disabled={loading}
          />
        </div>

        <button type="submit" className="form-submit-btn" disabled={loading}>
          {loading ? "Sending Message..." : "Submit Inquiry"}
        </button>

        {status.type && (
          <div className={`form-status ${status.type}`} role="alert">
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}
