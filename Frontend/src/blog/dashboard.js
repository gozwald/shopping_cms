import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Cookies from "js-cookie";
import Welcome from "./welcome";
import Grid from "@material-ui/core/Grid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "70vh",
    width: "100vw",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [authorPosts, setAuthorposts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 500);
  }, []);

  const fetchData = () => {
    fetch("http://localhost:5000/blog/dashboard", {
      method: "GET",
      headers: { token: Cookies.get("token") },
    })
      .then((response) => response.json())
      .then((e) => setAuthorposts(e));
  };

  // const fetchData = () => {
  //   fetch("http://localhost:5000/blog/dashboard/author", {
  //     method: "GET",
  //     headers: { token: Cookies.get("token") },
  //   })
  //     .then((response) => response.json())
  //     .then((e) => setAuthordetails(e))
  //     .then(fetch("http://localhost:5000/blog/dashboard/posts", {
  //       method: "GET",
  //       headers: { token: Cookies.get("token") },
  //     })
  //       .then((response) => response.json())
  //       .then((e) => setAuthorposts(e)))
  //       .catch((e) => console.log(e))
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="My Blog Posts" {...a11yProps(0)} />
        <Tab label="Add Post" {...a11yProps(1)} />
      </Tabs>
      <Grid item xs={12}>
        <TabPanel value={value} index={0}>
          {authorPosts && <Welcome author={authorPosts} />}
          blabla
        </TabPanel>
        <TabPanel value={value} index={1}>
          Add Post
        </TabPanel>
      </Grid>
    </div>
  );
}
