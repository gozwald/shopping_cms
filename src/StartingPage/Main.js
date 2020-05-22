import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import "./Font.css";
import createClient from "../Contentful";
import Categories from "./categories";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    margin: "2px"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    height: "100%"
  },
  cover: {
    width: "100%",
    height: "8em"
  },
  leftDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%"
  }
}));

export default function Main() {
  const classes = useStyles();

  const [datCat, setDatCat] = useState(null);

  //   useEffect(() => {
  //   createClient.getEntry("7dazFg9VYSXuAKX1dWT9In").then(function(entry) {
  //     // logs the entry metadata
  //     console.log(entry);
  //   });
  // }, []);

  useEffect(() => {
    createClient
      .getEntries({
        content_type: "category"
      })
      .then(entries => {
        setDatCat(entries.includes.Asset);
      });
  }, []);

  datCat && console.log(datCat);

  return (
    <Box minWidth="800px">
      <Grid
        container
        direction="row"
        style={{ backgroundColor: "rgb(55, 180, 0,0.32)" }}
      >
        <Container>
          <Grid container item xs={12}>
            <Grid item xs={3}>
              <CardContent className={classes.leftDetails}>
                <Typography noWrap variant="h4">
                  choose a flavor
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={9}>
              {datCat &&
                datCat.map((result, index) => (
                  <Categories
                    key={index}
                    title={result.fields.title}
                    pic={result.fields.file.url}
                  />
                ))}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
}
