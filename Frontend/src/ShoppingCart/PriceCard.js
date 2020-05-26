import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyle = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  },
  paperContent: {
    marginBottom: "0.625rem"
  }
}));

const PriceCard = props => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <Box p={2}>
        <Typography mt={1} variant={"h5"}>
          Total
        </Typography>
        <Typography
          className={classes.paperContent}
          variant={"h4"}
          color={"primary"}
        >
          €{props.price}
        </Typography>
        <Button
          size={"medium"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Buy
        </Button>
      </Box>
    </Paper>
  );
};

export default PriceCard;
