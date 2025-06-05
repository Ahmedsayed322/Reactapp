import React from 'react';
import './card.css';
function Card({ percent, type }) {
  return (
    <div className="col-lg-4 col-md-6 col-xl-3  mt-5 ">
      <div
        className="skill text-center  mt-5 mx-auto"
        style={{ '--skill-percent': `${percent}%` }}
      >
        <div className="skill-discreption">
          <h2>{percent}</h2>
          <h2>{type}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
