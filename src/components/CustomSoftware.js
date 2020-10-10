import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import lightBulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopWatch from "../assets/stopwatch.svg";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import roots from "../assets/root.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";
import CallToAction from "./ui/CallToAction";
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
    // paddingTop: "2em",
    paddingBottom: "10em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));
const CustomSoftware = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowButton}
            style={{ marginRight: "1em", marginleft: "-3.5em" }}
          >
            <IconButton component={Link} to="/services">
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
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Arc Development will help you develop new softwares or work on
              already existing softwares to help you achieve your dreams.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
              suscipit sapien, ac malesuada velit. Aenean enim urna, facilisis
              eu sagittis a, vestibulum in magna. Fusce vel felis pretium,
              venenatis metus tempus, tempor purus. Mauris cursus vitae massa at
              vehicula. Fusce ut nulla quis felis dignissim aliquet et id
              tortor. Nullam sagittis, nisl eget vulputate fermentum, dolor nisl
              pulvinar lectus, vitae euismod libero neque nec felis. Curabitur
              at nisi blandit, iaculis tellus a, imperdiet ligula. Aenean vel
              laoreet tellus. In aliquet mollis magna non commodo.
            </Typography>
            <Typography variant="body1" paragraph>
              Cras ut semper lectus. Vivamus sollicitudin, mi eget pellentesque
              porttitor, turpis dui pretium magna, non posuere nulla tortor non
              orci. In hac habitasse platea dictumst. Curabitur efficitur
              convallis risus eget ultricies. Nam elementum tortor vel mi
              aliquet pharetra. Nunc sodales tortor erat, ac volutpat lectus
              facilisis et. Mauris non molestie tellus.
            </Typography>
            <Typography variant="body1" paragraph>
              Donec lobortis vulputate ex vehicula gravida. Nullam porta
              pulvinar turpis, at fermentum leo posuere sit amet. Donec quis
              ligula ac purus maximus vestibulum. Nam at diam et nisl egestas
              interdum. Nunc vel elit quam. In sem lectus, ornare vitae arcu
              eget, gravida viverra velit. Integer mollis venenatis sodales.
              Quisque rhoncus ut eros ac iaculis. Phasellus id sem non ex
              ullamcorper sagittis.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowButton}>
            <IconButton component={Link} to="/mobileapps">
              <img src={forwardArrow} alt="Forward Arrow to next" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginBottom: matchesSM ? "10em" : undefined,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightBulb} alt="Light Bulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginBottom: matchesSM ? "10em" : undefined,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopWatch} alt="Stop Watch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="Cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid
          item
          container
          direction="row"
          className={classes.mainContainer}
          justify="space-around"
          alignItems={matchesMD ? "center" : undefined}
          style={{ marginBottom: "10em" }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                No Errors.No Waste.Less Cost
              </Typography>
              <Typography variant="body1" paragraph>
                A lot of money is spent globally on making and printing
                papers.It is also causing a lot of environmental wastage
              </Typography>
              <Typography variant="body1" paragraph>
                lacus luctus accumsan tortor posuere ac ut consequat semper
                viverra nam libero justo laoreet sit amet cursus sit amet dictum
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
              options={documentsOptions}
            ></Lottie>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          style={{ marginLeft: "60%" }}
          className={classes.itemContainer}
          className={classes.mainContainer}
          justify="flex-end"
        >
          <Grid item md>
            <Lottie
              style={{ maxWidth: "275em" }}
              options={scaleOptions}
            ></Lottie>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            align={matchesSM ? "center" : "right"}
          >
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Reach More People
              </Typography>
              <Typography variant="body1" paragraph>
                placerat vestibulum lectus mauris ultrices eros in cursus turpis
                massa
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          style={{ marginTop: "20em", marginBottom: "20em" }}
          className={classes.rowContainer}
        >
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <img
                src={roots}
                alt="tree with roots extending out"
                height={matchesSM ? "300em" : "450em"}
                width={matchesSM ? "300em" : "450em"}
              />
            </Grid>
            <Grid item className={classes.itemContainer}>
              <Typography variant="h4" align="center" gutterBottom>
                Root-Cause Analysis
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                We can help you thoroughly examine all areas of your business to
                develop a holistic plan for the most effective implementation of
                technology.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems={matchesMD ? "center" : undefined}
          direction={matchesMD ? "column" : "row"}
          justify="space-between"
          style={{ marginBottom: "20em" }}
          className={classes.mainContainer}
        >
          <Grid
            item
            container
            className={classes.itemContainer}
            direction={matchesSM ? "column" : "row"}
            style={{ marginBottom: matchesMD ? "15em" : 0 }}
            md
          >
            <Grid item container direction="column" md>
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesSM ? "center" : undefined}
                >
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Why waste time when you don’t have to?
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={automationOptions}
                isStopped={true}
                style={{ maxHeight: 290, maxWidth: 280 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            className={classes.itemContainer}
            direction={matchesSM ? "column" : "row"}
            md
          >
            <Grid item md>
              <Lottie
                options={uxOptions}
                isStopped={true}
                style={{ maxHeight: 310, maxWidth: 155 }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                  User Experience Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : "right"}
                  paragraph
                >
                  A good design that isn’t usable isn’t a good design.
                </Typography>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : "right"}
                  paragraph
                >
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : "right"}
                  paragraph
                >
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <CallToAction />
      </Grid>
    </Grid>
  );
};
export default CustomSoftware;
