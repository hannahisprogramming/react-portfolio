import React from 'react';

function Nav({currentPage, handlePageChange}) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a  className='navbar-brand' href='#about' onClick={() => handlePageChange('About')}>
          Hannah's Portfolio
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a href='#about' onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>
            <li className='nav-item'>
              <a href='#projects' onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              >
                My Projects
              </a>
            </li>
            <li className='nav-item'>
              <a href='#resume' onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                My Resume
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
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