import React from "react";
import Grid from "@mui/material/Grid";

import ProfileMetric from "./ProfileMetric";

export default function ProfileMetricsLayout({ followers, likes, photos }) {
  return (
    <Grid container spacing={2} style={{ textAlign: "center" }}>
      <Grid item xs={4} md={4}>
        <ProfileMetric count={followers} type={"Followers"} />
      </Grid>
      <Grid item xs={4} md={4}>
        <ProfileMetric count={likes} type={"Likes"} />
      </Grid>
      <Grid item xs={4} md={4}>
        <ProfileMetric count={photos} type={"Photos"} />
      </Grid>
    </Grid>
  );
}
