import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ProductCard from "../Products/ProductCard";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
    // backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 400
  }
}));

export default function ProductPictures(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.images.map(tile => (
          <GridListTile key={Math.random()} cols={Math.floor(Math.random() * 3) + 1
          }>
            {/*<img src={tile.img} alt={tile.title} />*/}
            <img src={`http://${tile.fields.file.url}`} alt={null} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
// img={`http://${item.fields.productPicture[1].fields.file.url.substring(2)}`}
