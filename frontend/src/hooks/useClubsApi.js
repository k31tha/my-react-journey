import React, {useState,useEffect} from "react";

const useClubsApi = (initialClubs) => {
    const [clubs, setClubs] = useState( initialClubs );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
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
  }

  export default useClubsApi;
