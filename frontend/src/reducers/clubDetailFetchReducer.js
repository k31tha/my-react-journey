const clubDetailFetchReducer = (state, action) => {
  switch (action.type) {
    case "CLUB_FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "CLUB_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        clubDetail: action.payload
      };
    case "CLUB_FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      return { ...state };
  }
};

export default clubDetailFetchReducer;
