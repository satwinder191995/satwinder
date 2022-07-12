import React from 'react';
import avatar from '../../assets/satwinder.png';
function Education() {
  const aws = ["aws1.png","aws2.png","aws3.png"]
  const azure = ["azure1.png","azure2.png"]
  return (
    
    <section className="p-3 p-md-3 bg-dark" id="about">
    <h2 className='m-md-5' style={{color:"red"}}>
      Education
    </h2>
    <h3 className='mx-md-5'>Coding Bootcamp</h3>
    <h4 className='mx-md-5' >Full Stack Developer<span>  6-month program</span></h4>
    <h5 className='mx-md-5'>University of Toronto</h5>
    <br></br>
    <h3 className='mx-md-5'>Graduation</h3>
    <h4 className='mx-md-5'>Computer System Technician and Software enginnering</h4>
    <h5 className='mx-md-5'>Sheridan college</h5>
  </section>
  );
}

export default Education;
