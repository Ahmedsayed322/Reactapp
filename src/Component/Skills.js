import React, { useEffect } from 'react';
import Card from '../card';
import { useDispatch, useSelector } from 'react-redux';
import { addToSkillList } from '../redux/actionType';

function Skills() {
  const skills = useSelector((state) => state.skills.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    if (skills.length > 0) {
      return;
    }
    dispatch(addToSkillList('JavaScript', 65));
    dispatch(addToSkillList('Reactjs', 80));
    dispatch(addToSkillList('Redux', 80));
    dispatch(addToSkillList('Html', 90));
    dispatch(addToSkillList('css', 75));
    // addToList(dispatch, 'JavaScript', 65);
    // addToList(dispatch, 'Reactjs', 80);
    // addToList(dispatch, 'Redux', 80);
    // addToList(dispatch, 'Html', 90);
    // addToList(dispatch, 'Css', 75);
  }, []);


  return (
    <div className="container" style={{}}>
      <div className="row">
        {skills.map((skill, index) => (
          <Card type={skill.name} percent={skill.percent} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
