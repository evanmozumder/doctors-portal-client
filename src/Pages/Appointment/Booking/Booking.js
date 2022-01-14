import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: "600" }}
            variant="h5"
          >
            {name}
          </Typography>
          <Typography variant="h6">{time}</Typography>
          <Typography variant="caption" display="block">
            {space} spaces available
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        date={date}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
      ></BookingModal>
    </>
  );
};

export default Booking;
