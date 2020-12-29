import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import {Grid, Button} from '@material-ui/core';
import Navigation from './Navigation';

const Navbar = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center" className={classes.navbar}>
      <Grid item sm={2}>
        <Typography variant="h5">Jazz Trucking</Typography>
      </Grid>
      <Grid item sm={8}>
        <Navigation />
      </Grid>
      <Grid item sm={2}>
        <Button color="primary" variant="contained">
          <Typography variant="subtitle1">Request A Quote</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
