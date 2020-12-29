import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.header}>
      <Grid
        container
        component="section"
        justify="flex-start"
        alignItems="center"
        className={classes.headingContainer}
      >
        <Grid item>
          <Typography variant="h3" gutterBottom>Deliver, Move and Relocate</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
