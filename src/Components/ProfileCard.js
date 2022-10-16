import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import GenericCard from "./GenericCard";

export default function ProfileCard() {
  return (
    <div style={{ backgroundColor: "hsl(185, 75%, 39%)" }}>
      {/* <img
        src="bg-pattern-top.svg"
        style={{ position: "absolute", width: "50%", bottom: "50%" }}
      />
      <img
        src="bg-pattern-top.svg"
        style={{
          position: "absolute",
          width: "50%",
          top: "50%",
          left: "50%",
        }}
      /> */}
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
