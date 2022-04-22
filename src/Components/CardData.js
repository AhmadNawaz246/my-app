import React from "react";

import {
  Container,
  Box,
  Grid,
  Paper,
  Typography,
  createTheme,
  ThemeProvider,
  ImageList,
  ImageListItem,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "subtitle2",
          },
          style: {
            fontSize: 20,
            fontWeight: 200,
            textAlign: "center",
          },
        },
        {
          props: {
            variant: "subtitle1",
          },
          style: {
            fontSize: 20,
            fontWeight: 200,
            textAlign: "center",
            marginTop: 25,
          },
        },
      ],
    },
  },
});

export default function CardData(props) {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={12}>
        <Box>
          <img className="cardImg" src={`${props.Img}`} loading="lazy" />
        </Box>
        <Box mx={2}>
          <Box>
            <Typography variant="subtitle2" component="h4">
              <strong>{props.Description}</strong>{" "}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">{props.author}</Typography>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
