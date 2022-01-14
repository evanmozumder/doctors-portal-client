import { Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{ textAlign: "left" }} item xs={12} md={5}>
          <Typography variant="h3">
            Your New Smile <br />
            Starts Here
          </Typography>
          <Typography variant="h4" sx={{ fontSize: 14, color: "gray" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            molestiae quos impedit voluptatum! Fugiat laborum ipsum itaque
            maxime excepturi aspernatur.
          </Typography>
          <Button variant="contained">Get Appointment</Button>
        </Grid>
        <Grid item xs={12} md={7} style={verticalCenter}>
          <img style={{ width: "300px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
