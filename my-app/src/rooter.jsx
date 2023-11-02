import React from 'react';
import { HashRouter as Router, Routes, Route, } from 'react-router-dom';

// Import the page components
import Projets from './Pages/Projects/projets';
import Home from './Pages/Home/home';
import Contact from './Pages/Contact/contact';


function Rooter(){
  return(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/projets' element={<Projets />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path='/cv' element="" />
        </Routes>
      </Router>
    </React.StrictMode>
  )
} 

export default Rooter