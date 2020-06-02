import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import TagBatch from "./TagBatch";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    // height: "19rem",
    width: 300,
    // width: "17rem",
    margin: "auto",
  },
  media: {
    // // width: "300",
    // // // objectFit: "contain",
    // height: 0,
    // paddingTop: "56.25%", // 16:9
    height: 255,
    // height: 300,
    // margin: "auto",
    width: "100%",
    objectFit: "cover",
  },
});

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        <Link
          style={{
            color: "inherit",
            textDecoration: "inherit",
          }}
          to={`/shop/${props.pid}`}
        >
          <CardActionArea className={classes.imageContainer}>
            <CardMedia
              className={classes.media}
              image={props.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography color="textPrimary">75.45 €</Typography>
              <Typography gutterBottom variant="subtitle1">
                {props.productName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.price}
              </Typography>{" "}
              <Typography variant="body2" color="textSecondary" component="p">
                {/*Category: {props.price}*/}
                Thinkers
              </Typography>
              {/*<TagBatch tag={props.tag} size="small" />*/}
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
}
