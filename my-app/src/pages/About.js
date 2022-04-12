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
          Educational Attainment
        </h2>
        <p class="ap1">
          For my degree, I studied a BSc in Computer Science at Heriot-Watt University in Edinburgh. The following
          breakdown showcases the grades i attained per year including any awards achieved on top.
        </p>
        <Grades/>
         
        
      </div>
    </>
  );
}

export default About;

