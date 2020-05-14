import React from 'react';
import ClubSearch from '../components/club/ClubSearch';
import useClubsApi from '../hooks/useClubsApi';
import { useAuth } from '../hooks/useAuth';
import { Redirect } from "react-router-dom";  

const ClubSearchContainer = () => {
  const [{ clubs, isLoading }] = useClubsApi([]);
  const auth = useAuth();

  
    if (!auth.authorised && !isLoading) {
        return (
        <>
            <Redirect to="/signin" /> 
    
        </>
        );
        //history.push('/signin');
    }

    if (isLoading) {
        return (
            <p>Loading......</p>
        );
    }
    return (
            <ClubSearch clubs={clubs} />
    );
}

export default ClubSearchContainer;