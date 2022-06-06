import React from 'react';
//hero image
import heroImage from '../assets/codeblock.jfif';

function About() {
  return (
    <section className="about">
      <h2 className='title'>About Me</h2>
      <p className='text-dark'>
        Welcome to my portfolio, my name is Hannah Bush. I've recently begun my
        journey into being a software developer, starting by earning a Responsive
        Web Design certificate from FreeCodeCamp in July of 2021, to now successfully 
        graduating from Rutgers Coding Bootcamp and earning my certificate in Full 
        Stack Web Development. I've completed over 30 projects, starting with small, 
        strictly CSS and HTML webpages to a full MERN stack application. I can't wait 
        to build some fun personal projects in the future-- plus my friends have 
        already started making requests! 
        My future goals for my career are to learn python and help in the development 
        of automated robots!
      </p>
      <img src={heroImage} className='my-2' style={{width: "100%"}} alt="hero" />
    </section>
  );
}

export default About;