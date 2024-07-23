import React from "react";
import { Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";
import calculateSpacing from "./calculateSpacing";

const iconSize = 80; // Larger size for icons

const features = [
  {
    color: "#00C853",
    headline: "HTML and CSS",
    text: "This beginner-friendly course will teach you the fundamentals of HTML and CSS, two essential languages for structuring and styling websites.",
    icon: <img src="https://cdn-icons-png.freepik.com/256/919/919827.png?semt=ais_hybrid" alt="HTML Icon" style={{ width: iconSize, height: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "JavaScript",
    text: "This comprehensive course will teach you the fundamentals of JavaScript, the programming language that powers the web. You will be able to give life to your websites and create functional websites and web apps.",
    icon: <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="JavaScript Icon" style={{ width: iconSize, height: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#d50000",
    headline: "React",
    text: "This course will teach you the fundamentals of React, a modern JavaScript library for building user interfaces. You will be able to use React to build Single Page Applications and dynamic, interactive user interfaces.",
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUssPTqAZaxQA6kN4D2I56zEXjGrMrQyvNPg&s" alt="React Icon" style={{ width: iconSize, height: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  {
    color: "#DD2C05",
    headline: "Angular",
    text: "This course will teach you everything you need to know to build single-page applications with Angular. You will be able to build real-world applications with Angular, using RxJS and Webpack.",
    icon: <img src="https://thumbs.dreamstime.com/b/airdroid-logo-airdroid-logo-white-background-vector-format-available-136767237.jpg" alt="Angular Icon" style={{ width: iconSize, height: iconSize }} />,
    mdDelay: "200",
    smDelay: "0",
  },
  {
    color: "#304FFE",
    headline: "Vue",
    text: "This course will teach you the fundamentals of Vue.js, a progressive JavaScript framework for building user interfaces. You will be able to build real-world applications with Vue.js, using Vuex and Vue Router.",
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcjpXa2jw9utNc4i8_c6blmBgCSxCEJnP5w&s" alt="Vue Icon" style={{ width: iconSize, height: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#C51162",
    headline: "Svelte",
    text: "This course will teach you the fundamentals of Svelte, a modern JavaScript framework for building fast and performant web applications. You will be able to build real-world applications with Svelte, using Axios and SvelteKit.",
    icon: <img src="https://static-00.iconduck.com/assets.00/svelte-icon-1703x2048-c1sw8yt9.png" alt="Svelte Icon" style={{ width: iconSize, height: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
];

function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          OUR CURRICULUMS
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width, theme)}>
            {features.map((element) => (
              <Grid
                item
                xs={12}
                md={6}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUpMd ? element.mdDelay : element.smDelay}
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                  buttonLink="#"
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
