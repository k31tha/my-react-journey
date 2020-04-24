import {useEffect,useReducer} from "react";
import axios from 'axios';
import clubFetchReducer from "../reducers/clubFetchReducer";

const useClubsApi = (initialClubs) => {

    const [state, dispatch] = useReducer(clubFetchReducer, {
        isLoading: true,
        isError: false,
        clubs: initialClubs,
      });

const url='http://localhost:3090/clubs';
useEffect(() => {
  async function fetchData() {
    dispatch({ type: 'CLUBLIST_FETCH_INIT' });
    try {
      const response = await axios.get(
        url
    );
    dispatch({ type: 'CLUBLIST_FETCH_SUCCESS', payload: response.data });
    }
    catch (error) {
      dispatch({ type: 'CLUBLIST_FETCH_FAILURE' });
    }
  }
  fetchData();
},[]); 

  return [state];
}

export default useClubsApi;
