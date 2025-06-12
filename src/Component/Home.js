import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroImage from './HeroImage';
import './Home.css';
import Skills from './Skills';
import Projects from './Projects';

function Home() {
  return (
    <>
      <section
        id="hero-section"
        style={{
          marginTop: '5rem',
        }}
      >
        <HeroImage
          id="hero"
          name="Ahmed Sayed Abdelnaby Soliman"
          title={[
            'Frontend Developer',
            'FullStack Developer',
            'Backend Developer',
          ]}
        />
      </section>
      <section id="skills-section">
        <div className="text-center mt-5">
          <h2 className="mb-3">Skills</h2>{' '}
          <h3 className="mb-5">You Can See my Skills here</h3>
        </div>

        <Skills />
      </section>
      <section id="projects-section">
        <div className=" mt-5">
          <h2 className=" text-center mb-3">Projects</h2>{' '}
          <h3 className=" text-center mb-5">You Can See my Projects here</h3>
          <Projects />
        </div>
      </section>
    </>
  );
}

export default Home;
