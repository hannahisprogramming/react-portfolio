import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;


  // const [currentPage, setCurrentPage] = useState('About');
  // const handlePagechange = (page) => setCurrentPage(page);

  // const renderPage = () => {
  //   if(currentPage === 'About') {
  //     return <About />;
  //   }
  //   if(currentPage === 'Projects') {
  //     return <Projects />
  //   }
  //   if(currentPage === 'Resume') {
  //     return <Resume />
  //   }

  //   return <Contact />
  // }