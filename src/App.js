import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const handlePagechange = (page) => setCurrentPage(page);

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

  return (
    <div>
      <Nav currentPage={currentPage} handlePagechange={handlePagechange}></Nav>
      {renderPage()}
    </div>
  );
}

export default App;