import { normalSupportedLanguages } from '../utils';

const initialRepos = {}
normalSupportedLanguages.forEach(lang => initialRepos[lang] = null);

const repoList = (state = initialRepos, action) => {
  switch (action.type) {
    case 'CACHE_REPO_LIST':
      return {
        ...state,
        [action.lang]: action.data,
      };
    default:
      return state;
  }
};

export default repoList
