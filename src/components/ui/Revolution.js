import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import vision from "../../assets/vision.svg";
import mockup from "../../assets/mockupIcon.svg";
import review from "../../assets/reviewIcon.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import design from "../assets/designIcon.svg";
import build from "../../assets/buildIcon.svg";
import launch from "../../assets/buildIcon.svg";
// import maintain from "../../maintainIcon.svg";
import iterate from "../../assets/iterateIcon.svg";
import consultation from "../../assets/consultationIcon.svg";
import technologyAnimation from "../../animations/technologyAnimation/data.json";
import Lottie from "react-lottie";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

const Revolution = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="row">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2" style={{ fontFamily: "Pacifico" }}>
          The Revolution
        </Typography>
      </Grid>
      <Grid item container direction="row" className={classes.rowContainer}>
        <Grid item lg>
          <img
            src={vision}
            alt="Mountain through binoculars"
            style={{
              maxWidth: matchesSmall ? 300 : "40em",
              marginRight: "5em",
            }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item align="right">
            <Typography variant="h4" gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item align="right">
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              bibendum mauris, hendrerit aliquam ex. Cras luctus sed mauris a
              blandit. Phasellus blandit fringilla mi ut mollis. Donec egestas,
              quam eu viverra lobortis, mauris augue scelerisque tellus, nec
              euismod neque eros non purus. Ut faucibus varius velit ut semper.
              Duis in accumsan augue, quis commodo ex. Donec tincidunt egestas
              velit non aliquet. Phasellus consequat, leo eu pellentesque
              pretium, turpis velit vehicula urna, in porttitor lectus quam
              vitae diam. Nam elit nisl, dignissim posuere neque eget, egestas
              malesuada sapien. Nunc tincidunt maximus purus, eget porta nisl
              dictum consectetur. Fusce nec massa at nibh pharetra posuere vitae
              id justo.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              bibendum mauris, hendrerit aliquam ex. Cras luctus sed mauris a
              blandit. Phasellus blandit fringilla mi ut mollis. Donec egestas,
              quam eu viverra lobortis, mauris augue scelerisque tellus, nec
              euismod neque eros non purus. Ut faucibus varius velit ut semper.
              Duis in accumsan augue, quis commodo ex. Donec tincidunt egestas
              velit non aliquet. Phasellus consequat, leo eu pellentesque
              pretium, turpis velit vehicula urna, in porttitor lectus quam
              vitae diam. Nam elit nisl, dignissim posuere neque eget, egestas
              malesuada sapien. Nunc tincidunt maximus purus, eget porta nisl
              dictum consectetur. Fusce nec massa at nibh pharetra posuere vitae
              id justo.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid
          item
          container
          direction="column"
          lg
          className={classes.rowContainer}
          style={{ marginRight: "10em" }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              bibendum mauris, hendrerit aliquam ex. Cras luctus sed mauris a
              blandit. Phasellus blandit fringilla mi ut mollis. Donec egestas,
              quam eu viverra lobortis, mauris augue scelerisque tellus, nec
              euismod neque eros non purus. Ut faucibus varius velit ut semper.
              Duis in accumsan augue, quis commodo ex. Donec tincidunt egestas
              velit non aliquet. Phasellus consequat, leo eu pellentesque
              pretium, turpis velit vehicula urna, in porttitor lectus quam
              vitae diam. Nam elit nisl, dignissim posuere neque eget, egestas
              malesuada sapien. Nunc tincidunt maximus purus, eget porta nisl
              dictum consectetur. Fusce nec massa at nibh pharetra posuere vitae
              id justo.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              bibendum mauris, hendrerit aliquam ex. Cras luctus sed mauris a
              blandit. Phasellus blandit fringilla mi ut mollis. Donec egestas,
              quam eu viverra lobortis, mauris augue scelerisque tellus, nec
              euismod neque eros non purus. Ut faucibus varius velit ut semper.
              Duis in accumsan augue, quis commodo ex. Donec tincidunt egestas
              velit non aliquet. Phasellus consequat, leo eu pellentesque
              pretium, turpis velit vehicula urna, in porttitor lectus quam
              vitae diam. Nam elit nisl, dignissim posuere neque eget, egestas
              malesuada sapien. Nunc tincidunt maximus purus, eget porta nisl
              dictum consectetur. Fusce nec massa at nibh pharetra posuere vitae
              id justo.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              bibendum mauris, hendrerit aliquam ex. Cras luctus sed mauris a
              blandit. Phasellus blandit fringilla mi ut mollis. Donec egestas,
              quam eu viverra lobortis, mauris augue scelerisque tellus, nec
              euismod neque eros non purus. Ut faucibus varius velit ut semper.
              Duis in accumsan augue, quis commodo ex. Donec tincidunt egestas
              velit non aliquet. Phasellus consequat, leo eu pellentesque
              pretium, turpis velit vehicula urna, in porttitor lectus quam
              vitae diam. Nam elit nisl, dignissim posuere neque eget, egestas
              malesuada sapien. Nunc tincidunt maximus purus, eget porta nisl
              dictum consectetur. Fusce nec massa at nibh pharetra posuere vitae
              id justo.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ maxWidth: "40em" }}>
          <Lottie options={defaultOptions} isStopped={true} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" gutterBottom style={{ color: "#000" }}>
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              एवम् बनाने हमेहो। प्रेरना कम्प्युटर यन्त्रालय प्रोत्साहित ढांचा
              विषय विशेष उनके तकरीबन प्रव्रुति तरीके उसीएक् सभीकुछ वास्तविक अधिक
              ब्रौशर विज्ञान पहेला ७हल शीघ्र अधिकार दोषसके रिती और्४५० दोषसके
              व्रुद्धि किया समाजो आधुनिक व्यवहार सामूहिक करता। उनके कीने पुस्तक
              स्थापित कार्यलय प्रति
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              सिद्धांत हार्डवेर वहहर नवंबर शुरुआत विज्ञान रखते संदेश देते प्राण
              दिनांक वार्तालाप कार्यसिधान्तो कराना तकनीकी बातसमय विश्वव्यापि
              रखते रखते गुजरना शारिरिक होसके बहुत गुजरना आधुनिक कम्प्युटर उन्हे
              अतित सक्षम समस्याओ समस्याए सकते होसके ब्रौशर अत्यंत विश्व उनका
              उसीएक् सम्पर्क जानकारी
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              लाभो विशेष तकरीबन वर्तमान लाभो मानसिक अमितकुमार पहेला जैसी वास्तव
              दस्तावेज प्रौध्योगिकी सीमित अपने मेंभटृ लचकनहि यायेका खरिदे कारन
              बढाता तकनिकल प्रेरना स्थिति एकत्रित विकासक्षमता विकास रखति विकास
              प्रमान दुनिया लेने बदले सीमित अंतर्गत संपुर्ण करके कराना एसेएवं
              मुश्किल कार्यकर्ता समजते कुशलता लक्ष्य आधुनिक किया
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={consultation} alt="handshake" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{
          backgroundColor: "red",
          height: "90em",
          paddingBottom: "50px",
        }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" gutterBottom style={{ color: "#000" }}>
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
              tempor nec feugiat nisl pretium. Gravida arcu ac tortor dignissim
              convallis aenean et. Ultricies lacus sed turpis tincidunt id
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Ullamcorper sit amet risus nullam eget. Purus faucibus ornare
              suspendisse sed. Mauris nunc congue nisi vitae suscipit. Ut
              tristique et egestas quis ipsum suspendisse. Metus aliquam
              eleifend mi in. Felis bibendum ut tristique et egestas quis ipsum
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Tincidunt eget nullam non nisi est sit. Nullam non nisi est sit
              amet facilisis magna etiam tempor. Et odio pellentesque diam
              volutpat. Pretium lectus quam id leo in vitae. Magna etiam tempor
              orci eu lobortis elementum nibh. Eleifend donec pretium vulputate
              sapien nec sagittis aliquam malesuada bibendum. Ultricies integer
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={mockup} alt="basic website deisgn" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{
          backgroundColor: "green",
          height: "90em",
          paddingBottom: "50px",
        }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" gutterBottom style={{ color: "#000" }}>
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
              tempor nec feugiat nisl pretium. Gravida arcu ac tortor dignissim
              convallis aenean et. Ultricies lacus sed turpis tincidunt id
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Ullamcorper sit amet risus nullam eget. Purus faucibus ornare
              suspendisse sed. Mauris nunc congue nisi vitae suscipit. Ut
              tristique et egestas quis ipsum suspendisse. Metus aliquam
              eleifend mi in. Felis bibendum ut tristique et egestas quis ipsum
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Tincidunt eget nullam non nisi est sit. Nullam non nisi est sit
              amet facilisis magna etiam tempor. Et odio pellentesque diam
              volutpat. Pretium lectus quam id leo in vitae. Magna etiam tempor
              orci eu lobortis elementum nibh. Eleifend donec pretium vulputate
              sapien nec sagittis aliquam malesuada bibendum. Ultricies integer
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="basic website deisgn" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;
