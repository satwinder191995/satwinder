import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import avatar from '../../assets/images/sunnyPic/sunny6.jpeg';
import { NavLink,Link } from 'react-router-dom';
import coverImage from '../../assets/1.jpeg';
function Nav(props) {
  const {
    aboutSelected,
    setAboutSelected,
    resumeSelected,
    setResumeSelected,
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
  } = props;
  return (
    <header className="container-fluid my-md-4 h-3 " 
    style={{backgroundImage:`url(${coverImage})`}} 
    >
      <div className="row">
      <div className="col-12 my-4 my-md-0 col-md-6 col-lg-5 ">
     <NavLink exact to="/" activeClassName="active"  data-testid="link" href="/" className="text-decoration-none text-white" >
      <h1 id="myName">
          Satwinder
      </h1>
      </NavLink>
      </div>
      <nav className='col-12 col-md-6 col-lg-7 my-3'>
        <ul id="navList"className='row list-unstyled py-2'>
          <li className="col-3 col-md-3 col-lg-3 text-danger">
            <NavLink to = "/" 
            className={({ isActive }) => (isActive ? 'text-danger text-decoration-none' : 'text-white text-decoration-none')}
            data-testid="about" href="#about">

              About
            </NavLink>
          </li>
          <li className="col-3 col-md-3 col-lg-3">
            <NavLink to ="/portfolio" 
            className={({ isActive }) => (isActive ? 'text-danger text-decoration-none' : 'text-white text-decoration-none')}
            // className="text-decoration-none text-white"
            href="#portfolio">
         
              Projects
            </NavLink>
          </li>
          <li className="col-3 col-md-3 col-lg-3">
            <NavLink to = "/contact" 
            className={({ isActive }) => (isActive ? 'text-danger text-decoration-none' : 'text-white text-decoration-none')}
             href="#contact">
       
               Contact
            </NavLink>
          </li>
          <li className="col-3 col-md-3 col-lg-3">
            <NavLink to="resume" 
            className={({ isActive }) => (isActive ? 'text-danger text-decoration-none' : 'text-white text-decoration-none')}
             href="#resume">
              Resume
              </NavLink>
          </li>
        </ul>
      </nav>
      <div id="logo" className='border border-dark rounded-circle m-md-3 position-absolute' 
      style={{backgroundImage:`url(${avatar})`,backgroundSize: "100% 100%"}}>
      </div>
      </div>
    </header>
  );
}

export default Nav;
