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
      <p>
        <strong> {name} </strong> {age}
      </p>
      <p> {location} </p>
      <hr />
    </div>
  );
}
