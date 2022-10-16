import React from "react";

export default function ProfileDetails({ name, age, location }) {
  return (
    <div
      style={{
        paddingTop: "48px",
        textAlign: "center",
        backgroundColor: "white",
      }}
    >
      <p style={{ paddingTop: "0.5rem" }}>
        <strong> {name} </strong>{" "}
        <span style={{ color: "hsl(0, 0%, 59%)" }}>{age} </span>
      </p>
      <p
        style={{
          fontSize: "0.5rem",
          padding: "0.5rem 0 1rem 0",
          color: "hsl(0, 0%, 59%)",
        }}
      >
        {location}
      </p>
      <hr />
    </div>
  );
}
