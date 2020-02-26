import React, {useState,useEffect} from 'react';
import ClubDetail from '../components/club/ClubDetail';
import NotFound from './NotFound';

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

const ClubDetailsContainer = ({clubUrl}) => {
    const [clubs,setClubs] = useState([]);
    const [clubsLoading,setClubsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setClubs(clubListData);
            setClubsLoading(false);
            console.log('This will execute after 2 seconds!')
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

    if (clubsLoading) {
        return (
            <p>Loading......</p>
        );
    }

    const clubDetail = clubs.find(
      club => club.url === clubUrl
    );

    if (clubDetail === undefined || clubDetail === null) {
      return <NotFound />
    }
    return (
      <ClubDetail clubdetail={clubDetail} />
    );
}

export default ClubDetailsContainer;