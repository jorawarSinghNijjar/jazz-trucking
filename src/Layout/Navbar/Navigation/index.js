import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Navigation = () => {
  const classes = useStyles();
  return <Grid container component="nav" justify="center" alignItems="center">
    <Grid item>
      <Link to="/home" className={classes.navLink}>Home</Link>
    </Grid>
    <Grid item>
      <Link to="/about-us" className={classes.navLink}>About Us</Link>
    </Grid>
    <Grid item>
      <Link to="/services" className={classes.navLink}>Services</Link>
    </Grid>
    <Grid item>
      <Link to="/careers" className={classes.navLink}>Careers</Link>
    </Grid>
    <Grid item>
      <Link to="/contact-us" className={classes.navLink}>Contact Us</Link>
    </Grid>
  </Grid>;
};

export default Navigation;
