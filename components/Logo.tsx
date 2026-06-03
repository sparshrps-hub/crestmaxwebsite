import React from "react";

type LogoProps = {
  size?: "sm" | "lg";
};

export default function Logo({ size = "sm" }: LogoProps) {
  const isLg = size === "lg";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 60"
      width={isLg ? 220 : 160}
      height={isLg ? 60 : 44}
      role="img"
      aria-label="Crestmax Private Limited"
    >
      {/* CREST text */}
      <text
        x="4"
        y={isLg ? 38 : 30}
        fontFamily="Rajdhani, sans-serif"
        fontWeight="700"
        fontSize={isLg ? 34 : 26}
        fill="#FFFFFF"
        letterSpacing="2"
      >
        CREST
      </text>
      {/* MAX text */}
      <text
        x={isLg ? 112 : 84}
        y={isLg ? 38 : 30}
        fontFamily="Rajdhani, sans-serif"
        fontWeight="700"
        fontSize={isLg ? 34 : 26}
        fill="#C9A84C"
        letterSpacing="2"
      >
        MAX
      </text>
      {/* Rule left */}
      <line
        x1="4"
        y1={isLg ? 46 : 36}
        x2={isLg ? 54 : 40}
        y2={isLg ? 46 : 36}
        stroke="#C9A84C"
        strokeWidth="1"
        opacity="0.7"
      />
      {/* Diamond */}
      <text
        x={isLg ? 57 : 43}
        y={isLg ? 50 : 39}
        fontFamily="serif"
        fontSize={isLg ? 8 : 6}
        fill="#C9A84C"
        opacity="0.9"
      >
        ◆
      </text>
      {/* PRIVATE LIMITED */}
      <text
        x={isLg ? 68 : 52}
        y={isLg ? 50 : 39}
        fontFamily="Nunito Sans, sans-serif"
        fontWeight="300"
        fontSize={isLg ? 7 : 5.5}
        fill="#C9A84C"
        letterSpacing="3"
      >
        PRIVATE LIMITED
      </text>
      {/* Diamond */}
      <text
        x={isLg ? 178 : 136}
        y={isLg ? 50 : 39}
        fontFamily="serif"
        fontSize={isLg ? 8 : 6}
        fill="#C9A84C"
        opacity="0.9"
      >
        ◆
      </text>
      {/* Rule right */}
      <line
        x1={isLg ? 186 : 142}
        y1={isLg ? 46 : 36}
        x2={isLg ? 216 : 158}
        y2={isLg ? 46 : 36}
        stroke="#C9A84C"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  );
}
