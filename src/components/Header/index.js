import React from 'react';
import Navbar from '../Navbar';

const Header = ({ currentPage, setCurrentPage}) => {
  return (
    <header>
      <div>
        
      </div>
      <div>
       
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </header>
  );
};

export default Header;
