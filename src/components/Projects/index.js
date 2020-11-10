import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import css from "./projects.module.css"
import volt from "./VOLT.JPG";
import animate from "./animate_health.png"
import parsnip from "./Parsnip.PNG"

// VOLT
// CFG
// Parsnip
// Shenley SYS Site
// Shenanigans?


function Projects() {
  return (
    <div className={css.carousel}>
      <Carousel>
        <div classname={css.items}>
          <img src={volt} alt="VOLT" />
          <p>VOLT - School of Code Final Project</p>
        </div>
        <div classname={css.items} >
        <img src={animate} alt="Ani-Mate" />
          <p>Project 2 - Ani-Mate</p>
        </div>
        <div>
          <img
            src={parsnip}
            alt="parnsip"
          />
          <p>Project 3 - Parsnip - A seasonal eating app</p>
        </div>
        <div>
          <img
            src=""
            alt="ShenleyFieldsSYS"
          />
          <p>Project 4 - ShenleyFields SYS Cricket Club</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Projects;
