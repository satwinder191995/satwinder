import React from 'react';
import avatar from '../../assets/satwinder.png';
function Certificate() {
  const aws = ["aws1.png","aws2.png","aws3.png"]
  const azure = ["azure1.png","azure2.png"]
  return (
    
    <section className=" p-5 bg-dark" id="about">
    <h2 className='m-2'>
      Certifications
    </h2>
    
    <h3 className='m-4'>
      Aws Certifications
    </h3> 
    <article className='bg-black'>
    <div className='d-flex overflow-auto'>
      {aws.map(aws =>(
        <img id="awsImg" src={require(`../../assets/images/certifications/${aws}`)}
        className='mx-2'
     
      ></img>
      ))} 
    </div>
    </article>
    <h3 className='m-3'>
      Azure Certifications
    </h3> 
    <article className='bg-black px-4'>
    <div className='d-flex overflow-auto'>
      {azure.map(azure =>(
        <img id="azureImg" src={require(`../../assets/images/certifications/${azure}`)}
        className='p-1 mx-2'
        ></img>
      ))} 
    </div>
    </article>
  </section>
  );
}

export default Certificate;
