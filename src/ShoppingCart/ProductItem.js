import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const useStyle = makeStyles(theme => ({
  rooty: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  item: {
    width: theme.spacing(1)
  },
  imageWrapper: {
    width: "100%",
    overflow: "hidden"
  },
  image: {
    maxWidth: "100%",
    height: "auto"
    // display: "block"
  },
  textContent: {
    maxWidth: "100%"
  }
}));

const ProductItem = props => {
  const { productID } = props;
  const classes = useStyle();

  const secondaryText = (
    <>
      <Typography color={"textPrimary"}>{props.category}</Typography>
      <Typography color={"primary"}>{props.priceList}</Typography>
    </>
  );

  const primaryText = (
    <Typography component={"span"}>{props.productName}</Typography>
  );
  return (
    <Paper>
      <Link to={`/shop/${productID}`}>
        <ListItem onClick={() => null} className={classes.rooty}>
          <ListItemAvatar>
            <Avatar
              className={classes.image}
              variant={"square"}
              src={props.image}
            />
          </ListItemAvatar>
          <ListItemText primary={primaryText} secondary={secondaryText} />
        </ListItem>
      </Link>
    </Paper>
  );
};

export default ProductItem;
