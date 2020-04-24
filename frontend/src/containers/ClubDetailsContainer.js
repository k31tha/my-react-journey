import React from 'react';
import ClubDetail from '../components/club/ClubDetail';
import useClubDetailApi from '../hooks/useClubDetailApi';
import NotFound from './NotFound';

const ClubDetailsContainer = ({clubUrl}) => {
    
    const [{ clubDetail, isLoading }] = useClubDetailApi(clubUrl);


    if (isLoading) {
        return (
            <p>Loading...</p>
        );
    }

    if (clubDetail === undefined || clubDetail === null) {
      return <NotFound />
    }
    return (
      <ClubDetail clubdetail={clubDetail} />
    );
}

export default ClubDetailsContainer;