import React from "react";

export default function ProfileMetric({ count, type }) {
  return (
    <>
      <p>
        <strong> {count / 1000}K </strong>
      </p>
      <p style={{ fontSize: "0.5rem", color: "hsl(0, 0%, 59%)" }}> {type} </p>
    </>
  );
}
