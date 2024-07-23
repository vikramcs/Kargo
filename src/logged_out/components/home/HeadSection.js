import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Button, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    border: 'none', // Ensure no border is applied
    margin: 0, // Remove any margins
    padding: 0, // Remove any padding
  },
  container: {
    marginTop: theme.spacing(3), // Reduced margin top
    marginBottom: theme.spacing(6), // Reduced margin bottom
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(5), // Reduced margin bottom
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4), // Reduced margin bottom
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2), // Reduced margin bottom
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0, // Remove any padding around the image
    margin: 0, // Remove any margin around the image
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box display="flex" alignItems="center">
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} className={classes.imageContainer}>
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg`}
                        className={classes.image}
                        alt="header example"
                      />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.textContainer}>
                      <Typography variant={isWidthUpLg ? "h3" : "h4"}>
                        Frontend Development: From Beginner to Frontend Engineer
                      </Typography>
                      <Box mb={1}> {/* Reduced margin bottom */}
                        <Typography
                          variant={isWidthUpLg ? "h6" : "body1"}
                          color="textSecondary"
                        >
                          Learn the essential skills of frontend development, from HTML and CSS to JavaScript. Then choose a path between React, Angular, Vue and Svelte, 
                          build real-world projects and gain the confidence to land a job as a frontend engineer.
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        className={classes.extraLargeButton}
                        classes={{ label: classes.extraLargeButtonLabel }}
                        href="https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
                      >
                        Begin your journey
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
