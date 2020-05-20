import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import { Toolbar } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./Font.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
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
  const theme = useTheme();

  return (
    <div>
      <Container>
        <Grid container direction="row">
          <Grid container item xs={12} justify="center">
            <Box margin="20px">
              <img src="https://i.ibb.co/mbbtgkM/logo.png" alt="logo" />
            </Box>
          </Grid>
          <Grid
            style={{ backgroundColor: "rgb(55, 180, 0,0.32)" }}
            container
            item
            xs={12}
            justify="center"
          >
            <Toolbar style={{ fontSize: "20px", fontFamily: "Roboto" }}>
              <Container>
                <Button style={{ fontSize: "1rem", padding: "20px" }}>
                  About
                </Button>
                <Button style={{ fontSize: "1rem", padding: "20px" }}>
                  Blog
                </Button>

                <Link
                  to="/shop"
                  style={{
                    color: "inherit",
                    textDecoration: "inherit"
                  }}
                >
                  <Button style={{ fontSize: "1rem", padding: "20px" }}>
                    Shop
                  </Button>
                </Link>
                <Button style={{ fontSize: "1rem", padding: "20px" }}>
                  FAQ
                </Button>
                <Button style={{ fontSize: "1rem", padding: "20px" }}>
                  Contact
                </Button>
              </Container>
              <Link
                to="/card"
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  marginLeft: "17vw"
                }}
              >
                <ShoppingCartTwoToneIcon />
              </Link>
            </Toolbar>
          </Grid>
          <Grid item xs={12}>
            <Box
              style={{
                backgroundColor: "#FF533D"
              }}
            >
              <Grid container direction="row">
                <Grid
                  style={{
                    maxHeight: "30vh"
                  }}
                  item
                  xs={6}
                >
                  <Box
                    height="100%"
                    alignItems="center"
                    display="flex"
                    direction="row"
                    justify="center"
                  >
                    <Typography
                      style={{
                        padding: "30px",
                        color: "white",
                        fontSize: "2.0em",
                        fontFamily: "Quicksand",
                        fontWeight: "600"
                      }}
                    >
                      Carefully curated care packages for loved ones needing
                      love.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box display="flex" height="100%" alignItems="flex-end">
                    <img
                      src="https://i.ibb.co/0fnnH39/female-hands-love-heart-symbol.jpg"
                      alt="heart hands"
                      width="100%"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={9}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="h3">Thinkers</Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image="https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"
                title="Lovers"
              />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <CardContent className={classes.leftDetails}>
              <Typography noWrap variant="h4">
                choose a flavor
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={9}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="h3">Lovers</Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image="https://www.irishcentral.com/uploads/article/120774/1-artist-paintbrush-iStock.jpg?t=1503746230"
                title="Lovers"
              />
            </Card>
          </Grid>
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

          <Grid item xs={12}>
            Footer
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
