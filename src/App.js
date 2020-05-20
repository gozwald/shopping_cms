import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./StartingPage/Main";

const App = () => {
  return (
    <Router>
      <CssBaseline>
        <Main />
      </CssBaseline>
    </Router>
  );
};

export default App;
