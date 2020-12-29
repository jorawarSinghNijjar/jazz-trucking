import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import mapIcon from "../../Images/icons/map.png";
import phoneIcon from "../../Images/icons/phone.png";
import emailIcon from "../../Images/icons/email.png";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Grid
        container
        component="footer"
        justify="space-between"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item md={3}>
          <Typography variant="h5" gutterBottom>
            Jazz Trucking
          </Typography>
          <Typography variant="subtitle1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h5" gutterBottom>
            Navigation
          </Typography>
          <Grid container direction="column">
            <Link to="/services" className={classes.navLink}>
              <i class="fas fa-angle-right"></i> Services
            </Link>
            <Link to="/careers" className={classes.navLink}>
              <i class="fas fa-angle-right"></i> Careers
            </Link>
            <Link to="/policies" className={classes.navLink}>
              <i class="fas fa-angle-right"></i> Policies
            </Link>
            <Link to="/faqs" className={classes.navLink}>
              <i class="fas fa-angle-right"></i> FAQs
            </Link>
            <Link to="/queries" className={classes.navLink}>
              <i class="fas fa-angle-right"></i> Queries
            </Link>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Typography variant="h5" gutterBottom>
            Get In Touch
          </Typography>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item className={classes.contactBox}>
              <img src={mapIcon} className={classes.icon} />
              <div className={classes.contactTextContainer}>
                <Typography variant="body2" gutterBottom>
                  2500 Chemin de la Côte-de-Liesse Mont-Royal, QC
                </Typography>
              </div>
            </Grid>
            <Grid item className={classes.contactBox}>
              <img src={phoneIcon} className={classes.icon} />
              <div className={classes.contactTextContainer}>
                <Typography variant="body2" gutterBottom>
                  + 617-897-7456
                </Typography>
              </div>
            </Grid>
            <Grid item className={classes.contactBox}>
              <img src={emailIcon} className={classes.icon} />
              <div className={classes.contactTextContainer}>
                <Typography variant="body2" gutterBottom>
                  <a href="mailto:info@jazztrucking.ca">info@jazztrucking.ca</a>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.copyrightBox}
      >
        <Typography variant="body2">
          Copyright © 2020{" "}
          <a href="http://www.jorawarsinghs.com" target="_blank">
            Jorawar Singh Nijjar.
          </a>
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;
