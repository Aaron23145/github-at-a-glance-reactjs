import { combineReducers } from 'redux'
import repositories from './repositories';
import repository from './repository';

export default combineReducers({
  repositories,
  repository,
});
