import React from "react";
import Grid from "@material-ui/core/Grid";
import BlogEditor from "./BlogEditor";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import BlogPost from "./BlogPost";
import Paper from "@material-ui/core/Paper";

const BlogPostLayout = (props) => {
  return (
    <Grid container xs={12} alignContent="space-between">
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Box
          m={3}
          p={3}
          margin={1}
          style={{
            // backgroundColor: "dimgrey",
            minHeight: "60vh",
            width: "60vw",
          }}
        >
          <Paper elevation={1}>
            <Container>
              <Typography variant="body1">
                <BlogPost blogPostId={props.blogPostId} />
              </Typography>
            </Container>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default BlogPostLayout;
