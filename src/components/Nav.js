import React from 'react';

function Nav({ currentPage, handlePageChange}) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a  className='navbar-brand' href='#about' onClick={() => handlePageChange('About')}>
          Hannah's Portfolio
        </a>
        <div id="navbar" className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a href='#about' onClick={() => handlePageChange('About')}
              className={currentPage === 'About'}
              >
                About Me
              </a>
            </li>
            <li className='nav-item'>
              <a href='#projects' onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects'}
              >
                My Projects
              </a>
            </li>
            <li className='nav-item'>
              <a href='#resume' onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume'}
              >
                My Resume
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact'}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;