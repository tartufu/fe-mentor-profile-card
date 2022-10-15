import React from "react";

export default function ProfileCardImg() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: "url('bg-pattern-card.svg')",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }}
    >
      <img
        src="image-victor.jpg"
        style={{
          backgroundColor: "white",
          border: "2px solid white",
          borderRadius: "50%",
          position: "relative",
          top: "48px",
          overflow: "visible",
        }}
      ></img>
    </div>
  );
}
