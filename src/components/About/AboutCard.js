import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! You can call me <span className="purple">Josh </span>
            from <span className="purple"> Boston, MA.</span>
            <br />
            I am currently working as the Lead Engineer at Aimset
            <br />
            I have my B.S. in Software Engineering from FGCU.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Backpacking
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on my Future Business
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fix one bug, two more show up in its place."{" "}
          </p>
          <footer className="blockquote-footer">Josh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
