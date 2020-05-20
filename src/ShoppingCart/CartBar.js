import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end"
  }
}));

function CartBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color={"transparent"}
        variant={"outlined"}
        square={false}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton>
            <HomeIcon />
          </IconButton>

          <Typography className={classes.title} variant="h4" noWrap>
            {props.headerTitle}
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default CartBar;
