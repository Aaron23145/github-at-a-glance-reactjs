const repositories = (state = {}, action) => {
  switch (action.type) {
    case 'CACHE_REPOSITORIES':
      return {
        ...state,
        [action.lang]: action.data,
      };
    default:
      return state;
  }
};

export default repositories;
