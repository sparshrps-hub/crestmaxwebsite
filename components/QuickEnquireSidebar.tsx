"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  whatsapp: string;
  partsNeeded: string;
};

type Props = {
  modelName: string;
};

export default function QuickEnquireSidebar({ modelName }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Quick enquiry:", { ...data, model: modelName });
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--cm-navy-deep)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "2px",
    padding: "10px 14px",
    color: "#FFFFFF",
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <div style={{
      background: "var(--cm-navy-mid)",
      border: "1px solid var(--cm-gold-border)",
      borderRadius: "4px",
      padding: "28px",
      position: "sticky",
      top: "90px",
    }}>
      <h3 style={{
        fontFamily: "Rajdhani, sans-serif",
        fontWeight: 700,
        fontSize: "20px",
        letterSpacing: "2px",
        color: "var(--cm-gold)",
        marginBottom: "8px",
        textTransform: "uppercase",
      }}>
        Quick Enquiry
      </h3>
      <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "20px" }}>
        For {modelName} parts
      </p>

      {submitted ? (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "22px", color: "var(--cm-gold)" }}>✓ Sent!</p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", marginTop: "8px" }}>
            We&apos;ll reply within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div>
            <label style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: "5px", letterSpacing: "0.5px" }}>
              Your Name *
            </label>
            <input {...register("name", { required: true })} type="text" placeholder="Full name" style={inputStyle} required />
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: "5px", letterSpacing: "0.5px" }}>
              WhatsApp Number
            </label>
            <input {...register("whatsapp")} type="tel" placeholder="+234 XXXX XXXXXX" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: "5px", letterSpacing: "0.5px" }}>
              Parts Needed *
            </label>
            <textarea
              {...register("partsNeeded", { required: true })}
              placeholder="List parts and quantities..."
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              background: "var(--cm-gold)",
              color: "var(--cm-navy-deep)",
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "2px",
              padding: "12px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Send Enquiry
          </button>
        </form>
      )}
    </div>
  );
}
