import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import { Toolbar } from "@material-ui/core";
import "./Font.css";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";

export default function Logonav({ numItems }) {
  return (
    <Box style={{ height: "230px" }}>
      <Grid container item xs={12} justify="center">
        <Link
          to={"/"}
          style={{
            color: "inherit",
            textDecoration: "inherit",
          }}
        >
          <Box margin="20px">
            <img src="https://i.ibb.co/mbbtgkM/logo.png" alt="logo" />
          </Box>
        </Link>
      </Grid>
      <Grid
        style={{ backgroundColor: "rgb(55, 180, 0,0.32)" }}
        container
        xs={12}
        justify="center"
      >
        <Toolbar style={{ fontSize: "20px", fontFamily: "Roboto" }}>
          <Container>
            <Link
              to="/blog/login"
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
            >
              <Button style={{ fontSize: "1rem", padding: "20px" }}>
                Writers Portal
              </Button>
            </Link>
            <Link
              to="/blog"
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
            >
              <Button style={{ fontSize: "1rem", padding: "20px" }}>
                Blog
              </Button>
            </Link>

            <Link
              to="/shop"
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
            >
              <Button style={{ fontSize: "1rem", padding: "20px" }}>
                Shop
              </Button>
            </Link>
            <Button style={{ fontSize: "1rem", padding: "20px" }}>FAQ</Button>
            <Button style={{ fontSize: "1rem", padding: "20px" }}>
              Contact
            </Button>
          </Container>
          <Link
            to="/card"
            style={{
              color: "inherit",
              textDecoration: "inherit",
              marginLeft: "17vw",
            }}
          >
            <Badge badgeContent={numItems} color="secondary">
              <ShoppingCartTwoToneIcon />
            </Badge>
          </Link>
        </Toolbar>
      </Grid>
    </Box>
  );
}
