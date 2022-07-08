import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Project from './components/Project';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  // const [aboutSelected, setAboutSelected] = useState(true);
  // const [resumeSelected, setResumeSelected] = useState(false);
  // const [portfolioSelected, setPortfolioSelected] = useState(false);
  // const [contactSelected, setContactSelected] = useState(false);

  return (
    <Router>
      <div className="App" >
        <Nav></Nav>
      <Routes>
  <Route path="/" element={<About/>} exact/>
  <Route path="/about" element={<About/>}/>
  <Route path="/portfolio" element={<Project/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/resume" element={<Resume/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
  //   
  //  <Nav
  //  aboutSelected={aboutSelected}
  //  setAboutSelected={setAboutSelected}
  //  resumeSelected={resumeSelected}
  //  setResumeSelected={setResumeSelected}
  //  portfolioSelected={portfolioSelected}
  //  setPortfolioSelected={setPortfolioSelected}
  //   contactSelected={contactSelected}
  //   setContactSelected={setContactSelected}
  //  ></Nav>
  //  <main>
  //   {portfolioSelected ?(
  //     <Project></Project>
  //   ):
  //   contactSelected ? (
  //  <ContactForm></ContactForm>
  //   ):resumeSelected ?(
  //     <Resume></Resume>
  //   ):(
  //     <>
  //   <About></About>
  //   <Certifications></Certifications>
  //   </>
  //   )
  //   }
  //  </main>
  //  <Footer></Footer>
  //   </div>

  );
  }
export default App;
