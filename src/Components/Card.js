import React from "react";
import CardData from "./CardData";
import {
  Container,
  Box,
  Grid,
  Paper,
  Typography,
  createTheme,
} from "@mui/material";

export default function Card({ cardCoursesData, onDataClick }) {
  console.log("finalCardData", cardCoursesData);
  return (
    <Container>
      {cardCoursesData.map((items, i) => {
        return (
          <CardData
            noWrap
            key={i}
            Img={items.displayImage}
            Description={items.title}
            author={items.author}
          />
        );
      })}
    </Container>
  );
}
