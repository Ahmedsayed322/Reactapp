import React, { useEffect } from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToProjectList } from '../redux/actionType';
function Projects() {
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addToProjectList('e-Commerce', 'ahmedSayedGreatProject', 'ay7aga')
    );
    dispatch(
      addToProjectList('e-Commerce', 'ahmedSayedGreatProject', 'ay7aga')
    );
  }, []);
  return (
    <div>
      <div className="container project-container">
        <div className="row">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Projects;
