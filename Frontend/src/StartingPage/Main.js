import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import "./Font.css";
import Categories from "./categories";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: "100%",
  },
  cover: {
    width: "100%",
    height: "8em",
  },
  leftDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
}));

export default function Main() {
  const classes = useStyles();

  const [datCatloc, setDatCatloc] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/category", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setDatCatloc(data));
  }, []);

  datCatloc && console.log(datCatloc);

  return (
    <Box minWidth="800px">
      <Grid
        container
        direction="row"
        style={{ backgroundColor: "rgb(55, 180, 0,0.32)" }}
      >
        <Container maxWidth="lg">
          <Grid container item xs={12}>
            <Grid item xs={3}>
              <CardContent className={classes.leftDetails}>
                <Typography noWrap variant="h4">
                  Choose a flavor
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={9}>
              {datCatloc &&
                datCatloc.map((result, index) => (
                  <Categories
                    key={index}
                    title={result.category}
                    pic={result.picture}
                  />
                ))}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
}
