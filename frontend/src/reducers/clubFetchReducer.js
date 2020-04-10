const clubFetchReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "CLUBLIST_FETCH_INIT":
    case "CLUB_FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "CLUBLIST_FETCH_SUCCESS":
    case "CLUBLIST_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        clubs: action.payload
      };
    case "CLUBLIST_FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    case "CLUBLIST_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        club: action.payload
      };
    default:
      //throw new Error();
  }
};

export default clubFetchReducer;
