import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ProductCard from "../Products/ProductCard";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
  },
  media: {
    height: 400,
  },
});

export default function ProductPictures(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia image={props.picture} className={classes.media} />
    </Card>
  );
}
