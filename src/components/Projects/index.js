import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//cut n paste pikey job - just a carousel component to tinker with later once I've got some projects

let styles = {
  margin: "auto",
  width: "500px",
};

function Projects() {
  return (
    <div style={styles}>
      <Carousel>
        <div>
          <img
            src="https://lh3.googleusercontent.com/proxy/Kj9202J4Ss0rlxweQm_dKUOqvkxGUzTcwt2yCbi0C35HE1hOp7mkVm-slaSr8Ml-prK1v6wg0NKVzWF0JE1OjnO3vXOUfWAzXbHoaFsQP5fezKUz7ba4fA"
            alt="Project1"
          />
          <p className="legend">Project1</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"
            alt="Singapore"
          />
          <p className="legend"></p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"
            alt="Japan"
          />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"
            alt="New York"
          />
          <p className="legend">New York</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Projects;
