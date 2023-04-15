import React from "react";
import "../styles/About.css"

function About() {
  return (
    <div className="pitch">
      <h2>About Me</h2>
      <div className="skills" >
         <h2 className="skillheader">Skills</h2>
         <ol className="list">
<li className="item">
  <h3>Front-End</h3>
  <span>HTML, CSS, ReactJS, Bootstrap, React Bootstrap, MaterialUI</span>
</li>
<li className="item backend">
  <h3>Back-End</h3>
  <span>ExpressJS, NodeJs, MongoDB</span>
</li>
         </ol>
      </div>
     
    </div>
  );
}

export default About;
