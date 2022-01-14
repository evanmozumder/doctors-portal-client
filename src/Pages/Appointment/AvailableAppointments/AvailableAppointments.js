import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    price: 20,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    price: 25,
    space: 8,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    price: 30,
    space: 9,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "08.00 AM - 09.00 AM",
    price: 35,
    space: 5,
  },
  {
    id: 5,
    name: "Pediatric Dental",
    time: "06.00 AM - 07.00 AM",
    price: 40,
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "07.00 AM - 08.00 AM",
    price: 60,
    space: 10,
  },
];

const AvailableAppointments = ({ date }) => {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ color: "info.main", mb: 2, fontWeight: "600" }}
      >
        Available Appointments on {date.toDateString()}
      </Typography>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking booking={booking} key={booking.id} date={date} />
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
