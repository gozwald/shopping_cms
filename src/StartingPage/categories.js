import React from "react";
import Grid from "@material-ui/core/Grid";
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
    margin: "2px",
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
    height: "12vh",
  },
  leftDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
}));

export default function Categories({ title, pic }) {
  const classes = useStyles();

  return (
    <>
      <Link>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="h3">{title}</Typography>
              </CardContent>
            </div>
            <CardMedia className={classes.cover} image={pic} title={title} />
          </Card>
        </Grid>
      </Link>
    </>
  );
}
