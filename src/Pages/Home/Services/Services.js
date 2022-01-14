import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import cavity from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluride Treatment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur cum reprehenderit ipsa sint aperiam odit natus facilis fuga explicabo deleniti?",
    img: fluoride,
  },
  {
    name: "Whitening",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur cum reprehenderit ipsa sint aperiam odit natus facilis fuga explicabo deleniti?",
    img: whitening,
  },
  {
    name: "Cavity",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur cum reprehenderit ipsa sint aperiam odit natus facilis fuga explicabo deleniti?",
    img: cavity,
  },
  /* {
    name: "Fluride Treatment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur cum reprehenderit ipsa sint aperiam odit natus facilis fuga explicabo deleniti?",
    img: fluoride,
  },
  {
    name: "Fluride Treatment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur cum reprehenderit ipsa sint aperiam odit natus facilis fuga explicabo deleniti?",
    img: fluoride,
  },
  {
    name: "Fluride Treatment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur cum reprehenderit ipsa sint aperiam odit natus facilis fuga explicabo deleniti?",
    img: fluoride,
  }, */
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, color: "success.main", m: 2 }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
          Service We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
