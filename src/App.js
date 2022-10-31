import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header";

// page paths/routes

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // page state
  function renderPage() {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="grow flex flex-col justify-center">
        {renderPage(currentPage)}
      </div>
      <Footer />
    </div>
  );
}

// function App() {

// return (
// <Router>
//         <div className="flex flex-col min-h-screen ">
//           <Header />
//           <div className="grow flex flex-col justify-center">
//           <Routes>
//             <Route path="/" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/resume" element={<Resume />} />
//           </Routes>
//           </div>
//           <Footer />
//         </div>
//       </Router>

// )
// }

export default App;
