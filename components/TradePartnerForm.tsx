"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { countryCodes } from "@/lib/countryCodes";

type FormData = {
  fullName: string;
  companyName: string;
  country: string;
  email: string;
  whatsappCode: string;
  whatsappNumber: string;
  businessType: string;
  marketsOperated: string;
  monthlyVolume: string;
  brandsStocked: string;
  message: string;
};

const africanCountries = [
  "Nigeria", "Ghana", "Kenya", "Tanzania", "Uganda", "Ethiopia",
  "DR Congo", "Morocco", "Angola", "South Africa", "Algeria", "Rwanda",
  "Senegal", "Ivory Coast", "Cameroon", "Zambia", "Zimbabwe", "Other"
];

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
  boxSizing: "border-box",
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

export default function TradePartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: { whatsappCode: "+234" },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError("");
    try {
      const payload = {
        ...data,
        whatsapp: `${data.whatsappCode} ${data.whatsappNumber}`,
      };
      const res = await fetch("/api/trade-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Server error");
      }
      setSubmitted(true);
    } catch (e) {
      setError("Error: " + (e instanceof Error ? e.message : "Unknown"));
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "4px", padding: "48px 40px", textAlign: "center" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>✓</div>
        <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "var(--cm-gold)", marginBottom: "12px" }}>APPLICATION RECEIVED</h3>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.7" }}>
          Thank you for your interest in becoming a CrestMAX Trade Partner. We will review your application and contact you within 2–3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
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
        <label style={labelStyle}>Email Address *</label>
        <input {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" } })} type="email" placeholder="your@email.com" style={inputStyle} />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>WhatsApp Number *</label>
        <div style={{ display: "flex", gap: "8px" }}>
          <select
            {...register("whatsappCode", { required: "Select country code" })}
            style={{ ...inputStyle, width: "auto", minWidth: "160px", appearance: "none", flexShrink: 0 }}
          >
            {countryCodes.map((c) => (
              <option key={c.code + c.country} value={c.code}>
                {c.flag} {c.country} ({c.code})
              </option>
            ))}
          </select>
          <input
            {...register("whatsappNumber", {
              required: "WhatsApp number is required",
              pattern: { value: /^[0-9\s\-]{6,15}$/, message: "Enter a valid number" },
            })}
            type="tel"
            placeholder="800 000 0000"
            style={{ ...inputStyle, flex: 1 }}
          />
        </div>
        {(errors.whatsappCode || errors.whatsappNumber) && (
          <p style={errorStyle}>{errors.whatsappCode?.message || errors.whatsappNumber?.message}</p>
        )}
      </div>

      <div>
        <label style={labelStyle}>Type of Business *</label>
        <select {...register("businessType", { required: "Please select your business type" })} style={{ ...inputStyle, appearance: "none" }}>
          <option value="">Select business type</option>
          <option value="importer">Importer / Wholesale Buyer</option>
          <option value="distributor">Distributor</option>
          <option value="wholesaler">Local Wholesaler</option>
          <option value="retailer-chain">Retailer (Multi-Location)</option>
          <option value="fleet-operator">Fleet Operator / Workshop</option>
          <option value="other">Other</option>
        </select>
        {errors.businessType && <p style={errorStyle}>{errors.businessType.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>Regions / Markets You Operate In *</label>
        <input {...register("marketsOperated", { required: "Please tell us your markets" })} type="text" placeholder="e.g. Lagos, Abuja, Kano — or nationwide" style={inputStyle} />
        {errors.marketsOperated && <p style={errorStyle}>{errors.marketsOperated.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>Estimated Monthly Volume (units or containers)</label>
        <select {...register("monthlyVolume")} style={{ ...inputStyle, appearance: "none" }}>
          <option value="">Select approximate volume</option>
          <option value="under-500">Under 500 units / month</option>
          <option value="500-2000">500 – 2,000 units / month</option>
          <option value="2000-5000">2,000 – 5,000 units / month</option>
          <option value="5000-plus">5,000+ units / month</option>
          <option value="1-container">1 container / shipment</option>
          <option value="2-plus-containers">2+ containers / shipment</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Brands / Models You Currently Stock</label>
        <input {...register("brandsStocked")} type="text" placeholder="e.g. Bajaj Boxer, TVS HLX, Keke Napep parts" style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>Tell Us More About Your Business</label>
        <textarea {...register("message")} placeholder="How long have you been operating? Who are your current suppliers? What makes you a strong partner for CrestMAX?" rows={5} style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      {error && <p style={{ ...errorStyle, fontSize: "14px", textAlign: "center" }}>{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        style={{ width: "100%", background: submitting ? "rgba(201,168,76,0.5)" : "var(--cm-gold)", color: "var(--cm-navy-deep)", fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "3px", textTransform: "uppercase", border: "none", borderRadius: "2px", padding: "16px", cursor: submitting ? "not-allowed" : "pointer", transition: "background 0.2s", marginTop: "8px" }}
        className="btn-gold-fill"
      >
        {submitting ? "Sending..." : "Submit Trade Partner Application"}
      </button>
    </form>
  );
}
