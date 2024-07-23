import React from "react";
import PropTypes from "prop-types";
import { Typography, Button } from "@mui/material";
import withStyles from "@mui/styles/withStyles";

const styles = (theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    border: '1px solid #ddd',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#FFFFFF",
    height: '100%', // Ensure full height of the grid item is utilized
  },
  iconWrapper: {
    marginRight: theme.spacing(3), // Increase space between icon and text
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100, // Set a fixed width for the icon wrapper
    height: 100, // Set a fixed height for the icon wrapper
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  headline: {
    marginBottom: theme.spacing(1),
  },
  description: {
    color: theme.palette.text.secondary,
  },
  button: {
    marginTop: theme.spacing(2), // Space above the button
  },
});

function FeatureCard(props) {
  const { classes, Icon, color, headline, text, buttonLink } = props;

  return (
    <div className={classes.container} style={{ borderColor: color }}>
      <div className={classes.iconWrapper} style={{ color: color, backgroundColor: shadeColor(color, 0.1) }}>
        {Icon}
      </div>
      <div className={classes.textWrapper}>
        <Typography variant="h5" className={classes.headline}>
          {headline}
        </Typography>
        <Typography variant="body1" className={classes.description}>
          {text}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => window.location.href = buttonLink}
        >
          View this Course
        </Button>
      </div>
    </div>
  );
}

function shadeColor(hex, percent) {
  const f = parseInt(hex.slice(1), 16);
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;
  const R = f >> 16;
  const G = (f >> 8) & 0x00ff;
  const B = f & 0x0000ff;
  return `#${(
    0x1000000 +
    (Math.round((t - R) * p) + R) * 0x10000 +
    (Math.round((t - G) * p) + G) * 0x100 +
    (Math.round((t - B) * p) + B)
  )
    .toString(16)
    .slice(1)}`;
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonLink: PropTypes.string, // Optional prop for button link
};

export default withStyles(styles, { withTheme: true })(FeatureCard);
