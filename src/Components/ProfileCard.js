import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import GenericCard from "./GenericCard";

export default function ProfileCard() {
  return (
    <div>
      <Container>
        <Grid
          xs
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight={"100vh"}
        >
          <GenericCard width="18rem" />
        </Grid>
      </Container>
    </div>
  );
}
