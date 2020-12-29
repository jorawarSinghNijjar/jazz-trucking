import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import Careers from "../Pages/Careers";
import ContactUs from "../Pages/ContactUs";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import useStyles from "./styles";
import theme from '../Theme';

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {/* <div className={classes.app}> */}
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/careers">
              <Careers />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
        {/* </div> */}
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
