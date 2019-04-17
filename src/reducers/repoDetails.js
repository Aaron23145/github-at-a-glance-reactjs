const repoDetails = (state = {}, action) => {
  switch (action.type) {
    case 'CACHE_REPO_DETAILS':
      return {
        ...state,
        [action.id]: action.data,
      };
    default:
      return state;
  }
}

export default repoDetails;
