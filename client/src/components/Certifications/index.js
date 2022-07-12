import React from 'react';
import avatar from '../../assets/satwinder.png';
function Certificate() {
  const aws = ["aws1.png","aws2.png","aws3.png"]
  const azure = ["azure1.png","azure2.png"]
  return (
    
    <section className="p-3 p-md-5 bg-dark" id="about">
    <h2 className='m-md-3' style={{color:"red"}}>
      Certifications
    </h2>
    
    <h3 className='m-md-3'>
      Aws Certifications
    </h3> 
    <article className='bg-black mx-md-3'>
    <div className='d-flex overflow-auto'>
      {aws.map(aws =>(
        <img id="awsImg" src={require(`../../assets/images/certifications/${aws}`)}
        className='mx-4'
     
      ></img>
      ))} 
    </div>
    </article>
    <h3 className='m-md-3'>
      Azure Certifications
    </h3> 
    <article className='bg-black px-4 mx-md-3'>
    <div className='d-flex overflow-auto'>
      {azure.map(azure =>(
        <img id="azureImg" src={require(`../../assets/images/certifications/${azure}`)}
        className='p-1 mx-3'
        ></img>
      ))} 
    </div>
    </article>
  </section>
  );
}

export default Certificate;
