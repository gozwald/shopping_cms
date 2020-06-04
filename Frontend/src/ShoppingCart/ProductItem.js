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
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles((theme) => ({
  rooty: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  item: {
    width: theme.spacing(1),
  },
  imageWrapper: {
    width: "100%",
    overflow: "hidden",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    // display: "block"
  },
  textContent: {
    maxWidth: "50%",
  },
  secondary: {
    display: "flex",
    alignItems: "center",
  },
}));

const ProductItem = (props) => {
  const { productID } = props;
  const classes = useStyle();

  const handleClick = (e, data) => {
    const action = e.currentTarget.textContent;

    props.updateShoppingCart(data, action);
  };

  const secondaryText = (
    <div className={classes.secondary}>
      <Typography color={"textPrimary"}>{props.category}</Typography>
      <Button color="secondary" onClick={(e) => handleClick(e, productID)}>
        -
      </Button>
      <Typography color={"primary"}>{props.count}</Typography>
      <Button color="secondary" onClick={(e) => handleClick(e, productID)}>
        +
      </Button>
      <Typography color={"primary"}>{props.total.toFixed(2)}</Typography>
    </div>
  );

  const primaryText = (
    <Typography component={"span"}>{props.productName}</Typography>
  );
  return (
    <Box m={1}>
      <Paper>
        <ListItem className={classes.rooty}>
          <Link
            to={`/shop/${productID}`}
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <ListItemAvatar>
              <Avatar
                className={classes.image}
                variant={"square"}
                src={props.image}
              />
            </ListItemAvatar>
          </Link>
          <ListItemText primary={primaryText} secondary={secondaryText} />
        </ListItem>
      </Paper>
    </Box>
  );
};

export default ProductItem;
