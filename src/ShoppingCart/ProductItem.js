import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const ProductItem = props => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar variant={"square"} src={props.pic} />
      </ListItemAvatar>
      <ListItemText
        primary={props.productName}
        secondary={
          <>
            <Typography
              component="span"
              variant={"body2"}
              color={"textPrimary"}
            >
              {props.category}
            </Typography>
            <Typography component="span" variant={"body2"} color={"primary"}>
              {props.price}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default ProductItem;
