import React, {useState,useEffect} from 'react';
import ClubSearch from '../components/club/ClubSearch';
import useClubsApi from '../hooks/useClubsApi';

const clubListData =
  [{
    name: 'Woking FC',
    url: 'woking-fc',
    active: true,
    clubofficialwebsiteurl: 'https://wokingfc.co.uk/',
    logoname:'WokingLogo.png'
  },
  {
    name: 'Leyton Orient FC',
    url: 'leyton-orient-fc',
    active: false,
    clubofficialwebsiteurl:'',
    logoname:''
  },
  {
    name: 'Knaphill FC',
    url: 'knaphill-fc',
    active: true,
    clubofficialwebsiteurl: 'https://knaphill.co.uk/',
    logoname:''
  }
];

const ClubSearchContainer = () => {
    /* const [clubs,setClubs] = useState([]);
    const [clubsLoading,setClubsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setClubs(clubListData);
            setClubsLoading(false);
            console.log('This will execute after 2 seconds!')
        }, 2000);
        return () => clearTimeout(timer);
      }, []); */
      const [{ clubs, isLoading, isError }] = useClubsApi(clubListData);

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