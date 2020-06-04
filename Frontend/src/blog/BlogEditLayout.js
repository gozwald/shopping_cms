import React from "react";
import Grid from "@material-ui/core/Grid";
import BlogEditor from "./BlogEditor";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const BlogEditLayout = (props) => {
  return (
    <Grid container xs={12} alignContent="space-between">
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Box
          border={1}
          p={2}
          margin={1}
          style={{
            // backgroundColor: "dimgrey",
            minHeight: "60vh",
            maxWidth: "70vw",
          }}
        >
          <Container>
            <Typography variant="body1">
              <BlogEditor />
            </Typography>
          </Container>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default BlogEditLayout;
