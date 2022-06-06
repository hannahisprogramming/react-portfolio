import React from 'react';

function Nav({ currentPage, handlePageChange}) {
  return (
    <nav>
      <div>
        <a href='#about' onClick={() => handlePageChange('About')}>
          Hannah's Portfolio
        </a>
        <div id="navbar">
          <ul>
            <li>
              <a href='#about' onClick={() => handlePageChange('About')}
              className={currentPage === 'About'}
              >
                About Me
              </a>
            </li>
            <li>
              <a href='#projects' onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects'}
              >
                My Projects
              </a>
            </li>
            <li>
              <a href='#resume' onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume'}
              >
                My Resume
              </a>
            </li>
            <li>
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