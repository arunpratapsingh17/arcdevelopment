import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import backArrow from "../../assets/backArrow.svg";
import swiss from "../../assets/swissKnife.svg";
import access from "../../assets/extendAccess.svg";
import engagement from "../../assets/increaseEngagement.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import integrationAnimation from "../../animations/integrationAnimation/data.json";
import CallToAction from "./CallToAction";

const useStyle = makeStyles((theme) => ({
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
}));
const MobileApps = (props) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
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
            <IconButton component={Link} to="/customsoftware">
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
              IOS/Android App Development
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
            <IconButton component={Link} to="/websites">
              <img src={forwardArrow} alt="Forward Arrow to next" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid
          item
          container
          direction="column"
          align={matchesSM ? "center" : undefined}
          style={{ marginLeft: "5em" }}
          md
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
              vitae. Felis bibendum ut tristique et egestas quis.
            </Typography>
            <Typography variant="body1" paragraph>
              aliquet enim tortor at auctor urna nunc id cursus metus aliquam
              eleifend mi in nulla posuere sollicitudin aliquam ultrices
              sagittis
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ maxWidth: "20em" }}>
          <Lottie
            options={defaultOptions}
            style={{ marginLeft: matchesSM ? "7em" : undefined }}
          ></Lottie>
        </Grid>
        <Grid
          item
          container
          direction="column"
          align={matchesSM ? "center" : "right"}
          style={{ marginRight: "5em" }}
          md
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
              vitae. Felis bibendum ut tristique et egestas quis.
            </Typography>
            <Typography variant="body1" paragraph>
              aliquet enim tortor at auctor urna nunc id cursus metus aliquam
              eleifend mi in nulla posuere sollicitudin aliquam ultrices
              sagittis
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginBottom: "15em", marginTop: "5em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid>
            <img src={access} style={{ maxWidth: "28em" }} />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid>
            <img src={engagement} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};
export default MobileApps;
