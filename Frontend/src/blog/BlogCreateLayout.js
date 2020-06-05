import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import BlogEditor from "./BlogEditor";
import React from "react";
import CreateBlog from "./CreateBlog";

const BlogCreateLayout = (props) => {
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
            width: "60vw",
          }}
        >
          <Container>
            <Typography variant="body1">
              <CreateBlog />
            </Typography>
          </Container>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default BlogCreateLayout;
