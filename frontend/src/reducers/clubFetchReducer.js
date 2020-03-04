  
  const clubFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
          return { ...state,isLoading: true,
            isError: false };
        case 'FETCH_SUCCESS':
          return { ...state,isLoading: false,
            isError: false,
        clubs: action.payload };
        case 'FETCH_FAILURE':
          return { ...state, isLoading: false,
            isError: true };
        default:
          throw new Error();
      }
  };

  export default clubFetchReducer;