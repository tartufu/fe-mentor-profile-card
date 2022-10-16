import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import ProfileMetric from "./ProfileMetric";

export default function ProfileMetricsLayout({ followers, likes, photos }) {
  const [profileMetricsArr, setProfileMetricsArr] = useState([]);

  useEffect(() => {
    const newProfileMetricsArr = createProfileArrFromProps(
      followers,
      likes,
      photos
    );

    setProfileMetricsArr(newProfileMetricsArr);
  }, [followers, likes, photos]);

  const createProfileArrFromProps = (followers, likes, photos) => {
    return [
      {
        type: "Followers",
        count: followers,
      },
      {
        type: "Likes",
        count: likes,
      },
      {
        type: "Photos",
        count: photos,
      },
    ];
  };
  return (
    <Grid
      container
      spacing={2}
      style={{ textAlign: "center", padding: "1rem" }}
    >
      {profileMetricsArr.map((profile) => {
        return (
          <Grid item xs={4} md={4}>
            <ProfileMetric count={profile.count} type={profile.type} />
          </Grid>
        );
      })}
    </Grid>
  );
}
