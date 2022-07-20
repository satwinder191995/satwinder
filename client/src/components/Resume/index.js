import React from 'react';

function Resume(props) {
  return (
    <section id="resume">
       <h1>Resume</h1> 
        <h2 className='mx-4' style={{fontSize:"22px"}}>Download my <a href="./satwinderResume.pdf" style={{fontSize:"20px"}} download>Resume</a></h2>
        <h3>Front-end Proficiencies</h3>
        <ul className='mx-4'>
          <li>HTMl</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Jquery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className='mx-4'>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL , Sequelize</li>
        <li>MongoDB,Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
        </ul>
    </section>
  );
}
export default Resume;
