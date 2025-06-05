const intial = {
  skills:[]
};
const Reducer1 = (state = intial, action) => {
  switch (action.type) {
    case 'addSkill':
      return {
        ...state,
        skills: [
          ...state.skills,
          { name: action.payload.name, percent: action.payload.percent },
        ],
      };

    default:
      return state;
  }
};
export default Reducer1;
