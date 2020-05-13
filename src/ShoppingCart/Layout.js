import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";

const Layout = props => {
  return (
    <Grid container border={1}>
      <Grid item xs={12}>
        <Box borderBottom={1}>
          <Typography variant={"h1"}>Header</Typography>
        </Box>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={8}>
          <Box borderRight={1}>
            <Typography variant={"h1"}>Items List</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography variant={"h1"}>Cost Details</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
