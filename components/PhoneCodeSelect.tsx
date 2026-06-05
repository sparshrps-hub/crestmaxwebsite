"use client";

import { useState, useRef, useEffect } from "react";
import { countryCodes } from "@/lib/countryCodes";

type Props = {
  value: string;
  onChange: (code: string) => void;
};

export default function PhoneCodeSelect({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selected = countryCodes.find((c) => c.code === value && c.country !== "Russia") // prefer non-duplicate
    || countryCodes.find((c) => c.code === value);

  const filtered = query.trim() === ""
    ? countryCodes
    : countryCodes.filter((c) =>
        c.country.toLowerCase().includes(query.toLowerCase()) ||
        c.code.includes(query)
      );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      // scroll selected item into view
      setTimeout(() => {
        const el = listRef.current?.querySelector("[data-selected='true']") as HTMLElement;
        el?.scrollIntoView({ block: "nearest" });
      }, 50);
    }
  }, [open]);

  const handleSelect = (code: string) => {
    onChange(code);
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={containerRef} style={{ position: "relative", flexShrink: 0 }}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "var(--cm-navy)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "2px",
          padding: "12px 12px",
          color: "#FFFFFF",
          fontFamily: "Nunito Sans, sans-serif",
          fontSize: "15px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          height: "100%",
          minWidth: "120px",
        }}
      >
        <span style={{ fontSize: "18px", lineHeight: 1 }}>{selected?.flag ?? "🌍"}</span>
        <span>{selected?.code ?? "+?"}</span>
        <span style={{ marginLeft: "2px", opacity: 0.5, fontSize: "11px" }}>▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 4px)",
          left: 0,
          zIndex: 9999,
          background: "#1B2D42",
          border: "1px solid rgba(201,168,76,0.3)",
          borderRadius: "4px",
          width: "280px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          overflow: "hidden",
        }}>
          {/* Search input */}
          <div style={{ padding: "8px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country or code..."
              style={{
                width: "100%",
                background: "var(--cm-navy)",
                border: "1px solid rgba(201,168,76,0.4)",
                borderRadius: "2px",
                padding: "8px 12px",
                color: "#FFFFFF",
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* List */}
          <ul
            ref={listRef}
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              maxHeight: "240px",
              overflowY: "auto",
            }}
          >
            {filtered.length === 0 && (
              <li style={{ padding: "12px 16px", color: "rgba(255,255,255,0.4)", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px" }}>
                No results
              </li>
            )}
            {filtered.map((c) => {
              const isSelected = c.code === value && c.country === selected?.country;
              return (
                <li
                  key={c.country}
                  data-selected={isSelected}
                  onClick={() => handleSelect(c.code)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 14px",
                    cursor: "pointer",
                    background: isSelected ? "rgba(201,168,76,0.15)" : "transparent",
                    borderLeft: isSelected ? "2px solid #C9A84C" : "2px solid transparent",
                    fontFamily: "Nunito Sans, sans-serif",
                    fontSize: "14px",
                    color: isSelected ? "#C9A84C" : "rgba(255,255,255,0.85)",
                    transition: "background 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <span style={{ fontSize: "18px", flexShrink: 0 }}>{c.flag}</span>
                  <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.country}</span>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", flexShrink: 0 }}>{c.code}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
