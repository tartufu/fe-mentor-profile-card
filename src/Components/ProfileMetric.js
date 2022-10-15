import React from "react";

export default function ProfileMetric({ count, type }) {
  return (
    <>
      <p>
        <strong> {count / 1000}K </strong>
      </p>
      <p> {type} </p>
    </>
  );
}
