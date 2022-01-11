import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import bg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";

const appointmentBanner = {
  background: `url(${bg})`,
  marginTop: 175,
  backgroundBlendMode: "darken, luminosity",
  backgroundColor: "rgba(45,58,74,0.9)",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: "-115px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ mb: 5 }}
              style={{ color: "lightblue" }}
            >
              Appointment
            </Typography>
            <Typography variant="h4" style={{ color: "white" }}>
              Make an Appointment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 5 }}
              style={{ color: "white", fontSize: 14, fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores similique officiis odio quam modi aut voluptas fugiat
              sit voluptates. Tempora?
            </Typography>
            <Button variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
