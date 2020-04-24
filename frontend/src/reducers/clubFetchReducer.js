const clubFetchReducer = (state, action) => {
  switch (action.type) {
    case "CLUB_FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "CLUBLIST_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        clubs: action.payload
      };
    case "CLUBLIST_FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      return { ...state };
  }
};

export default clubFetchReducer;
