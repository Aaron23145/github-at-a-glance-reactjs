import { combineReducers } from 'redux'
import repoList from './repoList';
import repoDetails from './repoDetails';

export default combineReducers({
  repoList,
  repoDetails,
});
