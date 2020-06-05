import React, { useCallback, useEffect, useMemo, useState } from "react";
import Grid from "@material-ui/core/Grid";
import BlogEditor from "./BlogEditor";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import BlogPost from "./BlogPost";
import Paper from "@material-ui/core/Paper";
import Cookies from "js-cookie";
import { useParams } from "react-router";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";
import { createEditor } from "slate";

const BlogPostLayout = (props) => {
  const { blogId } = useParams();

  return (
    <Grid container xs={12} alignContent="space-between">
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper elevation={1}>
          <Box
            m={3}
            mt={3}
            p={3}
            margin={1}
            style={{
              // backgroundColor: "dimgrey",
              minHeight: "60vh",
              width: "60vw",
            }}
          >
            <Container>
              <Typography variant="body1">
                <BlogPost blogId={blogId} />
              </Typography>
            </Container>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default BlogPostLayout;
