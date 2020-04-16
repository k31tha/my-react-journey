import React from 'react';
import ClubSearch from '../components/club/ClubSearch';
import useClubsApi from '../hooks/useClubsApi';

const ClubSearchContainer = () => {
  const [{ clubs, isLoading }] = useClubsApi([]);

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