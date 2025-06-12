import React, { useEffect, useRef, useState } from 'react';
import './HeroImage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function HeroImage({ name, title }) {
  const [textState, setTextState] = useState('');
  const [textJob, setTextJob] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const nameIndex = useRef(-1);
  const titleIndex = useRef(-1);
  const titleIndex1 = useRef(-1);
  const element = <FontAwesomeIcon icon={faArrowRight} className="ico" />;
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (nameIndex.current < name.length - 1) {
        nameIndex.current++;
        setTextState((prev) => prev + name[nameIndex.current]);
      } else {
        if (titleIndex1.current === -1) {
          titleIndex1.current = 0;
        }
        if (titleIndex.current < title[titleIndex1.current].length - 1) {
          titleIndex.current++;
          setTextJob(
            (prev) => prev + title[titleIndex1.current][titleIndex.current]
          );
        } else {
          setTextJob((prev) => prev.slice(0, -1));
          if (titleIndex1.current === title.length - 1) {
            titleIndex1.current = 0;
          } else {
            titleIndex1.current++;
          }
          if (textJob.length === 0) {
            titleIndex.current = -1;
          }
        }
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [textJob]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="container d-flex flex-column flex-lg-row ">
      <div className="image mx-auto">
        <img
          src="Gemini_Generated_Image_5br8to5br8to5br8-Photoroom.png"
          alt="ProgrammerHeroImage"
        />
      </div>
      <div className="textC mx-auto">
        <div className="welcome-text">Welcome All In my Portfolio</div>
        <span
          className={`text ${
            textState.length > 7 && textState.length < 11 ? 'blue' : 'red'
          }`}
        >
          Hi! I'm {textState}
          <span
            className="cursor"
            style={{
              visibility: cursorVisible ? 'visible' : 'hidden',
              display: textState.length === name.length ? 'none' : 'inline',
            }}
          >
            |
          </span>
          <br />
          {textJob}
          <span
            className="cursor"
            style={{
              visibility: cursorVisible ? 'visible' : 'hidden',
              display: textState.length === name.length ? 'inline' : 'none',
            }}
          >
            |
          </span>
        </span>
        <p className="adj">
          Hello Everyone, I have 1 year of experience in Web Development.
        </p>
        <p className="contact-txt adj">Let's Contact {element}</p>
      </div>
    </div>
  );
}

export default HeroImage;
