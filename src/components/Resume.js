import React from 'react';

function Resume () {
  return (
    <article className='pdf'>
      <div>
        <h2 id="resume" className='title'>Resume</h2>
        <iframe
          title='My Resume'
          src="/assets/hannah-bush-resume.pdf" alt="Resume"
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