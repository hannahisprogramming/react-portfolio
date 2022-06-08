import React from 'react';
import resume from '../assets/hannah-bush-resume.pdf';

function Resume () {
  return (
    <article className='pdf'>
      <div>
        <h2 id="resume" className='title'>Resume</h2>
        <iframe
          title='My Resume'
          src={resume} alt="Resume"
          style={{
            border: 0
          }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </article>
  );
}

export default Resume;