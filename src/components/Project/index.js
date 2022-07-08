import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import './project.css';
function Project(props) {
  const [isShown, setIsShown] = useState(false);
  const [hide, setHide] = useState();
 const apps = [
  {
  title:'Book Around',
  type:'Full Stack',
  liveUrl:'https://floating-reef-77198.herokuapp.com/',
  gitUrl:'https://github.com/TheBookStore05/bookaround.git',
  img:'bookaround',
  },
  {
    title:'Music Slayers',
    type:'Full Stack',
    liveUrl:'https://project01-team14.github.io/Music-Slayers/',
    gitUrl:'https://github.com/Project01-Team14/Music-Slayers.git',
    img:'music',
  },
  {
    title:'Note taker',
    type:'Full Stack',
    liveUrl:'https://satwinder-note.herokuapp.com/',
    gitUrl:'https://github.com/satwinder191995/note-taker.git',
    img:'note',
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
        <a href={app.liveUrl} className='col-sm-12 col-md-6 p-3 text-decoration-none' key={i} 
        >
        <article id="projectContainer" className ='position-relative'
        key={i}
        style={{ height:"250px",cursor:"pointer"
        // ,backgroundImage:`url(/images/${app.img}.png)` ,backgroundSize: "100% 100%",filter:"blur(4px)"
      }}
        onMouseEnter={(e) => {
        setIsShown(true);
        setHide(i)
        console.log(hide)
        }}
        onMouseLeave={(e) => {
        setIsShown(false);
        setHide()
        }}
    
        >
            <img
            src={require(`../../assets/images/${app.img}.png`)}
            alt={app.title}
            className={(hide === i)? 'projectImage' : 'null'}
            key={app.title}
            style={{width:"100%",height:"100%"}}
          />
          <div id="overlay">
          <div className="d-flex"><h2 id='projectTitle'><a className='text-decoration-none text-white' href={app.liveUrl}>{app.title}</a></h2></div>
          <div id="buttons">
          <a className='text-decoration-none text-white' href={app.liveUrl}>
          <button className='mx-2' style={{width:"120px",fontSize:"20px"}}>Demo</button>
          </a>
          <a className='text-decoration-none text-white' href={app.gitUrl}>
          <button style={{width:"150px",fontSize:"20px"}}>Source Code</button>
          </a>
          </div>
        {/* <h3 id='projectSub' style={{fontSize:"20px"}}><a className='text-decoration-none text-white' href={app.gitUrl}>{app.type}</a></h3> */}
        </div>
        </article>
        </a>
       )
       )}
       </div>
    </section>
    </>
  );
}
export default Project;
