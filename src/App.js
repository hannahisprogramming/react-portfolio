import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

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
