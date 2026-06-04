"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919855739773"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CrestMAX on WhatsApp"
      className="whatsapp-pulse"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 997,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textDecoration: "none",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
