import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import animationData from "../../animations/landinganimation/data";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import Typography from "@material-ui/core/Typography";
import customeSoftwareIcon from "../../assets/Custom Software Icon.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import mobileicon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import revolutionBackground from "../../assets/repeatingBackground.svg";
import infoBackground from "../../assets/infoBackground.svg";
const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContained: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: "25",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.arcOrange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  // In order to put a background image behind any component
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingLeft: 0,
      paddingBottom: "8em",
      paddingRight: 0,
      borderRadius: 0,
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));
const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainConatiner}>
      <Grid item>
        {/* Hero Block */}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology <br />
              To The MidWest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContained}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: 10 }}> Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.arcBlue}
                  ></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* Custom Software Development Block */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            //when small or equal,orientations are changed accordingly
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy,Save Time,Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete Digital Solution,from ivestigation to
              <span className={classes.specialText}> celebration</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              ></ButtonArrow>
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={customeSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* Mobile Development Block */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            //when small or equal,orientations are changed accordingly
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">IOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality.Extend Access.Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Increase your web experience or create a standalone{" "}
              {matchesSM ? null : <br />} Mobile App
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              ></ButtonArrow>
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img className={classes.icon} alt="Mobile icon" src={mobileicon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* Web Development Block */}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            //when small or equal,orientations are changed accordingly
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Web Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More.Discover More.Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines,built for speed.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              ></ButtonArrow>
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="website icon"
              src={websiteIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          style={{ height: "100em", marginTop: "12em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                style={{ textAlign: "center" }}
                direction="column"
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for Revolution
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}> Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.arcBlue}
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/* Information Block */}
        <Grid
          container
          style={{ height: "80em" }}
          alignItems="center"
          direction="row"
        >
          <Grid item style={{ position: "absolute", marginLeft: "5em" }}>
            <Grid container direction="column">
              <Typography variant="h2" style={{ color: "white" }}>
                About Us
              </Typography>
              <Typography variant="subtitle2">Let's get PERSONAL</Typography>
            </Grid>
          </Grid>
          <div className={classes.infoBackground} />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LandingPage;
