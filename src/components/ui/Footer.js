import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import footerAdornment from "../../assets/Footer Adornment.svg";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: "100%",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  gridContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainers: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
  },
}));
export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.gridContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  props.setValue(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  props.setValue(1);
                }}
                to="/mobileapps"
              >
                Mobile App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  props.setValue(1);
                }}
                to="/websites"
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
              >
                The Revolution
              </Grid>
              <Grid item className={classes.link} component={Link} to="/vision">
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => props.setValue(2)}
                to="/technology"
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/process"
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => props.setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/history"
              >
                History
              </Grid>
              <Grid item className={classes.link} component={Link} to="/team">
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => props.setValue(4)}
                to="/contact"
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        alt="Black decorative slash"
        src={footerAdornment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainers}
      >
        <Grid item component={"a"} href="hhtp://www.fb.com">
          <img
            alt="Facebook"
            src={facebook}
            className={classes.icon}
            rel="noopener noreferrer"
            target="_blank"
          />
        </Grid>

        <Grid item component={"a"} href="hhtp://www.twitter.com">
          <img
            alt="twitter"
            src={twitter}
            className={classes.icon}
            rel="noopener noreferrer"
            target="_blank"
          />
        </Grid>
        <Grid item component={"a"} href="http://www.instagram.com">
          <img
            alt="instagram"
            src={instagram}
            className={classes.icon}
            rel="noopener noreferrer"
            target="_blank"
          />
        </Grid>
      </Grid>
    </footer>
  );
}
