import React from "react";
import ProfileCardImg from "./ProfileCardImg";

export default function GenericCard({ width }) {
  return (
    <div style={{ width, border: "2px solid red", borderRadius: "16px" }}>
      <ProfileCardImg />
      <div style={{ paddingTop: "48px" }}></div>
      <p> Victor Crest! </p>
    </div>
  );
}
