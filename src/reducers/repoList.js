import { normalSupportedLanguages } from '../utils';

const initialRepos = {}

const repoList = (state = initialRepos, action) => {
  switch (action.type) {
    case 'CACHE_REPO_LIST':
      return state;
    default:
      return state;
  }
};

export default repoList
