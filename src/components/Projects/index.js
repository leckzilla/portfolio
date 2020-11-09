import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import volt from "./VOLT.JPG";

//cut n paste pikey job - just a carousel component to tinker with later once I've got some projects
// VOLT
// CFG
// Parsnip
// Shenley SYS Site
// Shenanigans?

let styles = {
  margin: "auto",
  width: "500px",
};

function Projects() {
  return (
    <div style={styles}>
      <Carousel>
        <div>
          <img src={volt} alt="VOLT" />
          <p>VOLT - School of Code Final Project</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"
            alt="Singapore"
          />
          <p>Project 2 - CFG?</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"
            alt="Japan"
          />
          <p>Project 3 - WMCA</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"
            alt="New York"
          />
          <p>Project 4 - Parnsip</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Projects;
