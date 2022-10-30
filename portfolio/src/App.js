import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './components/Footer'
import Header from './components/Header';


// function renderPage(currentPage) {
//   if (currentPage === 'About') { 
//     return  <About />
//    }
//    if (currentPage === 'Contact') { 
//      return <Contact />
//    }
//    if (currentPage === 'Portfolio') { 
//      return <Portfolio />
//    }
//    if (currentPage === 'Resume') { 
//      return <Resume />
//    }
// };

function App() {
 
return (
<Router>
        <div className="flex flex-col min-h-screen ">
          <Header />
          <div className="grow flex flex-col justify-center">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          </div>
          <Footer />
        </div>
      </Router>
 
  
)
}

export default App;
