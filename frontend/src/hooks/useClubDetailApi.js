import {useEffect,useReducer} from "react";
import axios from 'axios';
import clubDetailFetchReducer from "../reducers/clubDetailFetchReducer";

const useClubDetailApi = (clubUrl) => {

    const [state, dispatch] = useReducer(clubDetailFetchReducer, {
        isLoading: true,
        isError: false,
        clubDetail: null,
      });

const url='http://localhost:3090/clubs/'+clubUrl;
useEffect(() => {
  async function fetchData() {
    dispatch({ type: 'CLUB_FETCH_INIT' });
    try {
      const response = await axios.get(
        url
    );
    dispatch({ type: 'CLUB_FETCH_SUCCESS', payload: response.data });
    }
    catch (error) {
      dispatch({ type: 'CLUB_FETCH_FAILURE' });
    }
  }
  fetchData();
},[url]); 

  return [state];
}

export default useClubDetailApi;
