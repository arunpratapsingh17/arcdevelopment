import React from "react";
import { Link } from "react-router-dom";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import forwardArrow from "../../assets/forwardArrow.svg";
import backArrow from "../../assets/backArrow.svg";
import Hidden from "@material-ui/core/Hidden";
import analytics from "../../assets/analytics.svg";
import seo from "../../assets/seo.svg";
import outreach from "../../assets/outreach.svg";
import ecommerce from "../../assets/ecommerce.svg";
import CallToAction from "./CallToAction";
const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowButton: {
    marginTop: "0.5em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5em",
      paddingRight: "5em",
    },
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));
const Website = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        justify={matchesMD ? "center" : undefined}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowButton}
            style={{ marginRight: "1em", marginleft: "-3.5em" }}
          >
            <IconButton component={Link} to="/mobileapps">
              <img src={backArrow} alt="Back Arrow" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid
          item
          container
          direction="column"
          className={classes.heading}
          style={{ marginLeft: "2em" }}
        >
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Arc Development will help you develop new softwares or work on
              already existing softwares to help you achieve your dreams.
            </Typography>
            <Typography variant="body1" paragraph>
              Web development is the work involved in developing a Web site for
              the Internet or an intranet. Web development can range from
              developing a simple single static page of plain text to complex
              Web-based Internet applications, electronic businesses, and social
              network services.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowButton}>
            <IconButton component={Link} to="/services">
              <img src={forwardArrow} alt="Forward Arrow to next" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.mainContainer}
        style={{ marginTop: "10em" }}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid style={{ marginLeft: "-2.5em" }}>
              <img src={analytics} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            className={classes.paragraphContainer}
            paragraph
          >
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. C/O
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.mainContainer}
        alignItems="center"
        justify="flex-end"
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                E-Commerce
              </Typography>
            </Grid>
            <Grid style={{ marginLeft: "-2.5em" }}>
              <img src={ecommerce} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            className={classes.paragraphContainer}
            paragraph
            style={{ marginLeft: "1em" }}
          >
            It's an universal fact that people now prefer online shopping over
            offline shopping.
          </Typography>
          <Typography
            variant="body1"
            className={classes.paragraphContainer}
            paragraph
            style={{ marginLeft: "1em" }}
          >
            Online business has doubled in last 3 years.Online shopping is safer
            and more
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.mainContainer}
        alignItems="center"
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Outreach
              </Typography>
            </Grid>
            <Grid style={{ marginLeft: "-2.5em" }}>
              <img src={outreach} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            className={classes.paragraphContainer}
            paragraph
            style={{ marginLeft: "1em" }}
          >
            It's an universal fact that people now prefer online shopping over
            offline shopping.
          </Typography>
          <Typography
            variant="body1"
            className={classes.paragraphContainer}
            paragraph
            style={{ marginLeft: "1em" }}
          >
            Online business has doubled in last 3 years.Online shopping is safer
            and more
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.mainContainer}
        alignItems="center"
        justify="flex-end"
        style={{ marginBottom: "10em" }}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                SEO
              </Typography>
            </Grid>
            <Grid style={{ marginLeft: "-2.5em" }}>
              <img src={seo} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            className={classes.paragraphContainer}
            paragraph
            style={{ marginLeft: "1em" }}
            align={matchesSM ? "center" : undefined}
          >
            It's an universal fact that people now prefer online shopping over
            offline shopping.
          </Typography>
          <Typography
            variant="body1"
            className={classes.paragraphContainer}
            paragraph
            style={{ marginLeft: "1em" }}
          >
            Online business has doubled in last 3 years.Online shopping is safer
            and more
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};
export default Website;
