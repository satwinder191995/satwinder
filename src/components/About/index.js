import React from 'react';
import avatar from '../../assets/satwinder.png';
import Certifications from '../Certifications';
import Education from '../Education'
function About() {
  return (
    <>
    <section id="about" className="p-5 bg-dark" >
      <h2 className='m-md-5'>
        About me
      </h2>
      <p className='mx-md-5'>
      Hi, and welcome, I’m Satwinder Singh.
      </p>
      <p className='mx-md-5'>
      I am highly skilled full stack developer with exceptional cloud architecting ability, has extensive knowledge of networking and building serverless architecture solutions within AWS and Azure cloud platforms. Future goals to advance my knowledge in full stack development
      </p>  
    </section>
    <Certifications/>
    <Education/>
    </>
  );
}

export default About;
