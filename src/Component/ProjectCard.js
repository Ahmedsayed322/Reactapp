import React from 'react';
import './projectCard.css';
import { NavLink } from 'react-router-dom';
function ProjectCard() {
  return (
    <div className="col-lg-4 col-md-6 col-12 pcard ">
      <div className="card-content  mx-auto">
        <div className="project-contnet ">
          <img src="1.png" alt="project" />
          <div className=" d-flex flex-column justify-content-between p-3">
            <h3 className="w-100 text-center">Project</h3>
            <p className="project-discription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              purus lacus, faucibus et mollis sit amet, posuere vitae odio.
              Nullam massa dui, tincidunt quis ullamcorper pulvinar, lacinia
              eget sem. Integer efficitur p
            </p>
            <NavLink
            
              className="text-end mx-4 nav-link-h"
              style={{
                color: 'var(--color1)',
                textDecoration: 'none',
                fontSize: '1.5rem',
              }}
            >
              <p className="">Click Me-{'>'} </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
