import React from "react";
import weatherd from '../assets/weather-dashboard.jpg';
import readme from '../assets/readme.jpg';
import budgett from '../assets/budget-tracker.jpg';
import atob from '../assets/a-to-b.jpg';

function Projects() {
  return (
    <section className='project'>
      <h2 id="Projects" className="title">Projects</h2>
      <div className='project'>
        <h3>Weather Dashboard</h3>
        <div className="project-img">
          <p>
            <a href="https://hannahisprogramming.github.io/weather-dashboard/" target="_blank">
              <img src={weatherd} alt="Weather Dashboard" style={{ display: "flex" }} width="500" height="400"/>
            </a>
          </p>
        </div>
      </div>
      <div className='project'>
        <h3>Readme Generator</h3>
        <div className="project-img">
          <p>
            <a href="https://github.com/hannahisprogramming/readme-generator" target="_blank">
              <img src={readme} alt="Readme Generator" style={{ display: "flex" }} width="500" height="400"/>
            </a>
          </p>
        </div>
      </div>
      <div className='project'>
        <h3>Budget Tracker</h3>
        <div className="project-img">
          <p>
            <a href="https://quiet-oasis-81383.herokuapp.com/" target="_blank">
              <img src={budgett} alt="Budget Tracker" style={{ display: "flex" }} width="500" height="400"/>
            </a>
          </p>
        </div>
      </div>
      <div className='project'>
        <h3>A-to-B: Car Trading App</h3>
        <div className="project-img">
          <p>
            <a href="https://a-to-b-cars-rut-proj2.herokuapp.com/homepage" target="_blank">
              <img src={atob} alt="A To B Car Trading" style={{ display: "flex" }} width="500" height="400"/>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects;