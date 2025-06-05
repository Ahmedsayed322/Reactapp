export const Addskill = 'addSkill';
export const ADD_PROJECT = 'ADD_PROJECT';
export const addToSkillList = (name, percent) => {
  return {
    type: Addskill,
    payload: {
      name,
      percent,
    },
  };
};
export const addToProjectList = (name, discreption, img) => {
  return {
    type: ADD_PROJECT,
    payload: {
      name,
      discreption,
      img,
    },
  };
};
