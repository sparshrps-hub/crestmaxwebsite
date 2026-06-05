"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  companyName: string;
  country: string;
  email: string;
  whatsapp: string;
  enquiryType: string;
  productInterest: string[];
  partsNeeded: string;
  howHeard: string;
};

const africanCountries = [
  "Nigeria", "Ghana", "Kenya", "Tanzania", "Uganda", "Ethiopia",
  "DR Congo", "Morocco", "Angola", "South Africa", "Algeria", "Rwanda", "Other"
];

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try WhatsApp or email us directly at info@crestmax.in");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--cm-navy)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "2px",
    padding: "12px 16px",
    color: "#FFFFFF",
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: 600,
    fontSize: "13px",
    letterSpacing: "0.5px",
    color: "rgba(255,255,255,0.7)",
    marginBottom: "6px",
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "12px",
    color: "#ff6b6b",
    marginTop: "4px",
  };

  if (submitted) {
    return (
      <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "4px", padding: "48px 40px", textAlign: "center" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>✓</div>
        <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "var(--cm-gold)", marginBottom: "12px" }}>ENQUIRY RECEIVED</h3>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.7" }}>
          Thank you! We carefully review every enquiry and will get back to you with accurate pricing and availability.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <label style={labelStyle}>Full Name *</label>
        <input {...register("fullName", { required: "Full name is required" })} type="text" placeholder="Your full name" style={inputStyle} />
        {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>Company Name *</label>
        <input {...register("companyName", { required: "Company name is required" })} type="text" placeholder="Your company name" style={inputStyle} />
        {errors.companyName && <p style={errorStyle}>{errors.companyName.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>Country *</label>
        <select {...register("country", { required: "Please select your country" })} style={{ ...inputStyle, appearance: "none" }}>
          <option value="">Select your country</option>
          {africanCountries.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.country && <p style={errorStyle}>{errors.country.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>Type of Enquiry *</label>
        <select {...register("enquiryType", { required: "Please select enquiry type" })} style={{ ...inputStyle, appearance: "none" }}>
          <option value="">Select enquiry type</option>
          <option value="catalogue-parts">Parts from your catalogue</option>
          <option value="sourcing-request">Custom sourcing request (part not listed)</option>
          <option value="general">General enquiry</option>
        </select>
        {errors.enquiryType && <p style={errorStyle}>{errors.enquiryType.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>Email Address *</label>
        <input {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" } })} type="email" placeholder="your@email.com" style={inputStyle} />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>WhatsApp Number (with country code)</label>
        <input {...register("whatsapp")} type="tel" placeholder="+234 XXXX XXXXXX" style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Product Interest *</label>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {["2-Wheeler Parts", "3-Wheeler Parts", "Both"].map((opt) => (
            <label key={opt} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>
              <input {...register("productInterest", { required: "Please select at least one" })} type="checkbox" value={opt} style={{ accentColor: "var(--cm-gold)", width: "16px", height: "16px" }} />
              {opt}
            </label>
          ))}
        </div>
        {errors.productInterest && <p style={errorStyle}>{errors.productInterest.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>Specific Parts Needed</label>
        <textarea {...register("partsNeeded")} placeholder="List the parts you need, with quantities if known..." rows={5} style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      <div>
        <label style={labelStyle}>How did you hear about us?</label>
        <select {...register("howHeard")} style={{ ...inputStyle, appearance: "none" }}>
          <option value="">Select an option</option>
          <option value="google">Google Search</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="referral">Referral / Word of Mouth</option>
          <option value="trade-show">Trade Show / Exhibition</option>
          <option value="social">Social Media</option>
          <option value="other">Other</option>
        </select>
      </div>

      {error && <p style={{ ...errorStyle, fontSize: "14px", textAlign: "center" }}>{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        style={{ width: "100%", background: submitting ? "rgba(201,168,76,0.5)" : "var(--cm-gold)", color: "var(--cm-navy-deep)", fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "3px", textTransform: "uppercase", border: "none", borderRadius: "2px", padding: "16px", cursor: submitting ? "not-allowed" : "pointer", transition: "background 0.2s", marginTop: "8px" }}
        className="btn-gold-fill"
      >
        {submitting ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
