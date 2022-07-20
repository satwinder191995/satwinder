import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import './project.css';
function Project(props) {
 const apps = [
  {
  title:'Book Around',
  type:'Full Stack',
  liveUrl:'https://glacial-headland-92988.herokuapp.com/',
  gitUrl:'https://github.com/satwinder191995/booksale.git',
  img:'bookaround',
  },
  {
    title:'Retail Shop',
    type:'Full Stack',
    liveUrl:'https://satwinder-ecommerce.herokuapp.com/',
    gitUrl:'https://github.com/satwinder191995/e-commerce.git',
    img:'retail',
    },
  {
    title:'Music Slayers',
    type:'Full Stack',
    liveUrl:'https://project01-team14.github.io/Music-Slayers/',
    gitUrl:'https://github.com/Project01-Team14/Music-Slayers.git',
    img:'music',
  },
  {
    title:'Search books',
    type:'Full Stack',
    liveUrl:'https://satwinder-books.herokuapp.com/',
    gitUrl:'https://github.com/satwinder191995/books-search.git',
    img:'booksearch',
    },
  {
    title:'Tech Blog',
    type:'My Sql',
    liveUrl:'https://satwinder-blog.herokuapp.com/',
    gitUrl:'https://github.com/satwinder191995/blog.git',
    img:'blog',
  },
  {
    title:'Weather',
    type:'Frontend',
    liveUrl:'https://satwinder191995.github.io/weather/',
    gitUrl:'https://github.com/satwinder191995/weather.git',
    img:'weather',
  },
  {
    title:'Budget tracker',
    type:'Full Stack',
    liveUrl:'https://lit-reef-40274.herokuapp.com/',
    gitUrl:'https://github.com/satwinder191995/financial.git',
    img:'budget',
  },
  {
    title:'Note taker',
    type:'Full Stack',
    liveUrl:'https://satwinder-note.herokuapp.com/',
    gitUrl:'https://github.com/satwinder191995/note-taker.git',
    img:'note',
  },
  {
    title:'Workday Scheduler',
    type:'Javascript',
    liveUrl:'https://satwinder191995.github.io/workdaySchedular/',
    gitUrl:'https://github.com/satwinder191995/workdaySchedular.git',
    img:'workday', 
  },

 ];

  // const { currentCategory } = props;
  return (
    <>
       <section id="projects" className='container-fluid' >
        <div className='row'>
       { apps.map((app,i) =>(
        <article id="projectContainer" 
        className ='position-relative col-sm-12 col-md-6 p-3'
        key={i}
        style={{ height:"280px",cursor:"pointer"
      }}
        >
            <img
            src={require(`../../assets/images/apps/${app.img}.png`)}
            alt={app.title}
            key={app.title}
            style={{width:"100%",height:"100%"}}
          />
          <div id="overlay">
          <div className="d-flex p-3"><h2 id='projectTitle'><a className='text-decoration-none text-white' href={app.liveUrl}>{app.title}</a></h2></div>
          <div id="buttons" className='px-3'>
          <a className='text-decoration-none text-white' href={app.liveUrl}>
          <button className='m-2' style={{width:"120px",fontSize:"20px"}}>Demo</button>
          </a>
          <a className='text-decoration-none text-white' href={app.gitUrl}>
          <button style={{width:"150px",fontSize:"20px"}}>Source Code</button>
          </a>
          </div>
        </div>
        </article>
       )
       )}
       </div>
    </section>
    </>
  );
}
export default Project;
