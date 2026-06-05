"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  country: string;
  email: string;
  whatsapp: string;
  currentRole: string;
  marketsYouCover: string;
  clientBase: string;
  experience: string;
  whyRepresent: string;
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

export default function SalesAgentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/sales-agent", {
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

  if (submitted) {
    return (
      <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "4px", padding: "48px 40px", textAlign: "center" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>✓</div>
        <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "var(--cm-gold)", marginBottom: "12px" }}>APPLICATION RECEIVED</h3>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.7" }}>
          Thank you for applying to become a CrestMAX Sales Agent. We carefully review every application and will be in touch within 2–3 business days.
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
          <label style={labelStyle}>Country *</label>
          <select {...register("country", { required: "Please select your country" })} style={{ ...inputStyle, appearance: "none" }}>
            <option value="">Select your country</option>
            {africanCountries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.country && <p style={errorStyle}>{errors.country.message}</p>}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" } })} type="email" placeholder="your@email.com" style={inputStyle} />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>
        <div>
          <label style={labelStyle}>WhatsApp Number *</label>
          <input {...register("whatsapp", { required: "WhatsApp number is required" })} type="tel" placeholder="+234 XXX XXX XXXX" style={inputStyle} />
          {errors.whatsapp && <p style={errorStyle}>{errors.whatsapp.message}</p>}
        </div>
      </div>

      <div>
        <label style={labelStyle}>Your Current Role / Business *</label>
        <input {...register("currentRole", { required: "Please describe your current role" })} type="text" placeholder="e.g. Spare parts dealer, motorcycle mechanic, trade representative" style={inputStyle} />
        {errors.currentRole && <p style={errorStyle}>{errors.currentRole.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>African Markets You Cover *</label>
        <input {...register("marketsYouCover", { required: "Please tell us which markets you cover" })} type="text" placeholder="e.g. Lagos, Kano, Accra — or multiple countries" style={inputStyle} />
        {errors.marketsYouCover && <p style={errorStyle}>{errors.marketsYouCover.message}</p>}
      </div>

      <div>
        <label style={labelStyle}>Describe Your Client / Buyer Network</label>
        <textarea {...register("clientBase")} placeholder="Who do you sell to? How many active buyers or shops do you work with?" rows={3} style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      <div>
        <label style={labelStyle}>Experience in Spare Parts / Automotive Industry</label>
        <select {...register("experience")} style={{ ...inputStyle, appearance: "none" }}>
          <option value="">Select experience level</option>
          <option value="under-1">Less than 1 year</option>
          <option value="1-3">1 – 3 years</option>
          <option value="3-5">3 – 5 years</option>
          <option value="5-plus">5+ years</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Why Do You Want to Represent CrestMAX? *</label>
        <textarea {...register("whyRepresent", { required: "Please tell us why you want to represent CrestMAX" })} placeholder="Tell us what value you bring and why this partnership makes sense for both sides." rows={4} style={{ ...inputStyle, resize: "vertical" }} />
        {errors.whyRepresent && <p style={errorStyle}>{errors.whyRepresent.message}</p>}
      </div>

      {error && <p style={{ ...errorStyle, fontSize: "14px", textAlign: "center" }}>{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        style={{ width: "100%", background: submitting ? "rgba(201,168,76,0.5)" : "var(--cm-gold)", color: "var(--cm-navy-deep)", fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "3px", textTransform: "uppercase", border: "none", borderRadius: "2px", padding: "16px", cursor: submitting ? "not-allowed" : "pointer", transition: "background 0.2s", marginTop: "8px" }}
        className="btn-gold-fill"
      >
        {submitting ? "Sending..." : "Submit Sales Agent Application"}
      </button>
    </form>
  );
}
