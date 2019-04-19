const repository = (state = {}, action) => {
  switch (action.type) {
    case 'CACHE_REPOSITORY':
      return {
        ...state,
        [action.id]: action.data,
      };
    default:
      return state;
  }
}

export default repository;
