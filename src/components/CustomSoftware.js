import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import lightBulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopWatch from "../assets/stopwatch.svg";
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
    paddingTop: "2em",
    paddingBottom: "10em",
  },
}));
const CustomSoftware = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer} direction="column">
      <Grid item container direction="row">
        <Grid
          item
          className={classes.arrowButton}
          style={{ marginRight: "1em", marginleft: "-3.5em" }}
        >
          <IconButton component={Link} to="/services">
            <img src={backArrow} alt="Back Arrow" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
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
        <Grid item className={classes.arrowButton}>
          <IconButton component={Link} to="/mobileapps">
            <img src={forwardArrow} alt="Forward Arrow to next" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightBulb} alt="Light Bulb" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopWatch} alt="Stop Watch" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="Cash" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CustomSoftware;
