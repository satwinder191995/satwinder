import React from 'react';
import avatar from '../../assets/satwinder.png';
import Certifications from '../Certifications';
import Education from '../Education'
function About() {
  return (
    <>
    <section id="about" className="p-3 p-md-5 bg-dark" >
      <h2 className='m-md-3' style={{color:"red"}}>
        About me
      </h2>
      <p className='mx-md-3'>
      Hi, and welcome, I’m Satwinder Singh.
      </p>
      <p className='mx-md-3'>
      Full Stack web developer with exceptional knowledge in front-end and back-end proficiencies. Recently earned certifications in full stack web development from University of Toronto and cloud certifications in AWS and Azure. Passionate about developing unique apps, with a focus on mobile-first and user-friendly design. I can collaborate and work with a team while solving problems in high-stress environments. Looking forward to contribute my values and technical skills to a company to grow and become a valuable asset.
      </p>  
    </section>
    <Certifications/>
    <Education/>
    </>
  );
}

export default About;
