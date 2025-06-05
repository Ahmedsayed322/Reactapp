const intialValue = {
  projects: [],
};
const ProjectReducer = (state = intialValue, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            name: action.payload.name,
            discreption: action.payload.discreption,
            img: action.payload.img,
          },
        ],
      };
    default:
      return state;
  }
};
export default ProjectReducer;
