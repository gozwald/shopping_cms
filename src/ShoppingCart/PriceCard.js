import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles({
  root: {
    margin: "0.4rem"
  },
  paperContent: {
    marginBottom: "0.625rem"
  }
});

const PriceCard = props => {
  const classes = useStyle();
  return (
    <Box className={classes.paperContent} m={2}>
      <Typography className={classes.paperContent} mt={1} variant={"h5"}>
        Total
      </Typography>
      <Typography
        className={classes.paperContent}
        variant={"h4"}
        color={"primary"}
      >
        €{props.price}
      </Typography>
      <Button size={"medium"} fullWidth variant={"contained"} color={"primary"}>
        Buy
      </Button>
    </Box>
  );
};

export default PriceCard;
