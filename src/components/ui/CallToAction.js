import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
}));
const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container style={{ height: "60em" }}>
      <Grid item style={{ position: "absolute" }}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software <br />
              Revolutionary Results
            </Typography>
            <Typography variant="subtitle2">
              Take advantage of 21st Century
            </Typography>
            <Grid container item>
              <Button variant="outlined" className={classes.learnButton}>
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.arcBlue}
                ></ButtonArrow>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.background} />
    </Grid>
  );
};
export default CallToAction;
