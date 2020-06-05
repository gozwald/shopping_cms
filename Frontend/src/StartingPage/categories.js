import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./Font.css";

import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    margin: "10px",
    height: "12vh",
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
  },
}));

export default function Categories({ title, pic }) {
  const classes = useStyles();

  return (
    <>
      <Link
        style={{ textDecoration: "none" }}
        to={`/products/${title.toLowerCase()}`}
      >
        <Card raised="true" className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="h3">{title}</Typography>
            </CardContent>
          </div>
          <CardMedia className={classes.cover} image={pic} title={title} />
        </Card>
      </Link>
    </>
  );
}
