import React from "react";
import github from "../../github.svg";
import linkedin from "../../linkedin.svg";
import twitter from "../../twitter.svg";
import css from "./contact.module.css";

function Contact() {
  return (
    <div>
      <a href="http://www.github.com/leckzilla" target="blank">
        <img id={css.links} src={github} alt="Github logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/alexa-jane-berry-48465a175/"
        target="blank"
      >
        <img id={css.links} src={linkedin} alt="LinkedIn logo" />
      </a>
      <a href="http://www.twitter.com/not_that_Alexa" target="blank">
        <img id={css.links} src={twitter} alt="twitter logo" />
      </a>
    </div>
  );
}

export default Contact;
