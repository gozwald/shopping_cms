import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./Font.css";
import createClient from "../Contentful";

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

export default function categories() {

  const [datCat, setDatCat] = useState(null);

  //   useEffect(() => {
  //   createClient.getEntry("7dazFg9VYSXuAKX1dWT9In").then(function(entry) {
  //     // logs the entry metadata
  //     console.log(entry);
  //   });
  // }, []);

  datCat && console.log(datCat.items)

  return (
        <>
          <Grid item xs={3} />
          <Grid item xs={9}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="h3">Tasters</Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image="https://www.anuga.com/media/redaktionell/anuga_1/img_15/fachmessen_3/fine_food_1/Fine_Food_j.jpg"
                title="Tasters"
              />
            </Card>
          </Grid>
          </>
         
  );
}
