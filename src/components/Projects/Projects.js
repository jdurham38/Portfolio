import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/flower.png";
import discord from "../../Assets/Projects/discord-music.jpeg";
import ebo from "../../Assets/Projects/portfolio-img-ebo.png";
import mars from "../../Assets/Projects/mars-rover.jpeg";
import dabloon from "../../Assets/Projects/dabloon.jpeg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mars}
              isBlog={false}
              title="Mars Rover ML"
              description="Using recent image processing techniques paired with a custom machine learning algorithm to aid future rovers in hazard detection."
              ghLink="https://github.com/jdurham38/Mars-Rover-ImageProcessing-MachineLearning-Algorithm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Aimset"
              description="The foundation of Aimset where developers, PM's, and designers come together to create and work on projects they find interesting."
              demoLink="https://aimset.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebo}
              isBlog={false}
              title="EBO"
              description="An Android app that digitzes EBT cards using NFC for easy access and use."
              ghLink="https://github.com/jdurham38/Official-Economic-Benenfit-Opportunity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Mechanical Flower"
              description="A mechanical flower that opens and closes based on time, button input, or light sensor input."
              ghLink="https://github.com/jdurham38/MechanicalFlower"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dabloon}
              isBlog={false}
              title="Dabloon Token"
              description="My first take on blockchain, where I created my own crypto currency based on a growing TikTok Meme"
              ghLink="https://github.com/jdurham38/Dabloon-Token"
              demoLink="hhttps://goerli.etherscan.io/token/0x91cba5a61174Dac58f2AEEaDCF802E563e311ba1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Discord Music Bot"
              description="A custom discord music bot for my discord channels."
              ghLink="https://github.com/jdurham38/discord-bot"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
