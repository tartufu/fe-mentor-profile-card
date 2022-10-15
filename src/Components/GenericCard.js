import React from "react";
import ProfileCardImg from "./ProfileCardImg";
import ProfileDetails from "./ProfileDetails";
import ProfileMetricsLayout from "./ProfileMetricsLayout";

export default function GenericCard({ width }) {
  const userDetails = {
    name: "Victor Crest",
    age: 26,
    location: "London",
    followers: 80000,
    likes: 803000,
    photos: 1400,
  };

  return (
    <div style={{ width, border: "2px solid red", borderRadius: "16px" }}>
      <ProfileCardImg />
      <ProfileDetails
        name={userDetails.name}
        age={userDetails.age}
        location={userDetails.location}
      />
      <ProfileMetricsLayout
        followers={userDetails.followers}
        likes={userDetails.likes}
        photos={userDetails.photos}
      />
    </div>
  );
}
