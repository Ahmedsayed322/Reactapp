import { combineReducers } from 'redux';
import Reducer1 from './SkillReducer';
import ProjectReducer from './ProjectReduce';

export default combineReducers({
  skills:Reducer1,
  projects:ProjectReducer,
});
