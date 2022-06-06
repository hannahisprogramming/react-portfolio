import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if(currentPage === 'About') {
      return <About />;
    }
    if(currentPage === 'Projects') {
      return <Projects />
    }
    if(currentPage === 'Resume') {
      return <Resume />
    }

    return <Contact />
  }

  const handlePagechange = (page) => setCurrentPage(page);
  return (
    <div>
      <Nav currentPage={currentPage} handlePagechange={handlePagechange} />
      {renderPage()}
    </div>
  );
}

export default App;
