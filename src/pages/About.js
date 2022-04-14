import React from 'react';
import "./About.css";
import Grades from "../components/grades/Grades"

function About() {
  return (
    <>
      <div class="about-header">
        <h1 class="ah1">
          About Me
        </h1>
      </div>
      <div class="about-body">
        <h2 class="ah2">
          Personal Statement
        </h2>
        <p class="ap1">
          My name is Aaron and I am 22 year old aspiring Junior Software Engineer. My goal is to develop
          software that has an impact; whether it be an application that people use to make their 
          life simpler or a game that entertains the masses, I want to be a part of something big.
          Some of the areas of software development I am particularly interested in are 
          Games Programming and Design, VR and AR System designs and Web Development. 
          Generally I would be happy working on any software applications over an array of 
          different languages. From my education, I have experienced a wide range of programming languages (see CV) 
          as well as different coding styles, systems and datastructures.  
        </p>
        <p class="ap1">
          As a colleague, I believe I would fit into almost any team and would be able to work alongside
          fellow co-workers. This is due to my friendly nature coupled with a hard work ethic since it makes me 
          a dependent and reliable worker. From 
        </p>
        <h2 class="ah2">
          Educational Attainment
        </h2>
        <p class="ap1">
          For my degree, I studied a BSc in Computer Science at Heriot-Watt University in Edinburgh. The following
          breakdown showcases the grades i attained per year including any awards achieved on top.
        </p>
        <Grades/>
        <br/>
        <p class="ap1">
          I also have 3 A-Levels in Maths (B), Physics (C) and Geography (D) as well as 12 GCSEs (1 A*, 6 A's, 5 B's) including Maths, Further Maths and English.
        </p>
        <br/>
        <br/> 
      </div>
    </>
  );
}

export default About;

