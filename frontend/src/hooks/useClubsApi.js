import React, {useState,useEffect,useReducer} from "react";
import clubFetchReducer from "../reducers/clubFetchReducer";

const useClubsApi = (initialClubs) => {
    //const [clubs, setClubs] = useState( initialClubs );
    //const [isLoading, setIsLoading] = useState(false);
    //const [isError, setIsError] = useState(false);

    const [state, dispatch] = useReducer(clubFetchReducer, {
        isLoading: false,
        isError: false,
        clubs: initialClubs,
      });

    /* useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          //const result = await axios(url);
          //setClubs(result.data);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
      fetchData();
    }, []);
    return [{ clubs, isLoading, isError }];
  } */

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        //const result = await axios(url);
        //dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        dispatch({ type: 'FETCH_SUCCESS', payload: initialClubs });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };
    fetchData();
  }, []);

  return [state];
}

  export default useClubsApi;
