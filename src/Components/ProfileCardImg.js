import React from "react";

export default function ProfileCardImg() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "aqua",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }}
    >
      <img
        src="image-victor.jpg"
        style={{
          backgroundColor: "white",
          border: "4px solid white",
          borderRadius: "50%",
          position: "relative",
          top: "48px",
        }}
      ></img>
    </div>
  );
}
