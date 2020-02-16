import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ClubLink from './ClubLink';
import ClubLinkList from './ClubLinkList';
import ClubFilterByStatus from './ClubFilterByStatus';
import VisibilityFilters from './VisibilityFilters';
import ClubSearchByName from './ClubSearchByName';

const filterByStatus = (clubs, filterBy) => {
    const filteredClubs = [...clubs];
    return (filterBy === VisibilityFilters.SHOW_ALL) ?  filteredClubs :
      filteredClubs.filter((club)=>club.active ===
      (filterBy === VisibilityFilters.SHOW_ACTIVE) ? true : false);
  }
  const filterByClubName = clubName => club =>
  !clubName || club.name.toLowerCase().includes(clubName.toLowerCase());

const ClubSearch = ({clubs}) => {
    const [statusFilterBy, setStatusFilterBy] = useState(VisibilityFilters.SHOW_ALL);
    const [clubNameSearch, setClubNameSearch] = useState('');
    const handleStatusQuery = filterValue => {
        setStatusFilterBy(filterValue);
      };
    const handleNameSearchChange = ev => {
      setClubNameSearch(ev.target.value);
    };
    const filteredList = filterByStatus(clubs.filter(filterByClubName(clubNameSearch)),statusFilterBy);
    return (
        <>
        <ClubSearchByName nameSearch={clubNameSearch} handleNameSearch={handleNameSearchChange}>{'Search by:'}</ClubSearchByName>
        <br />
        <br />
        <ClubFilterByStatus statusFilterBy={statusFilterBy} statusQuery={handleStatusQuery} />
        <br />
        <ClubLinkList clubs={filteredList} />
        </>
    );
}

ClubSearch.propTypes = {
    clubs: PropTypes.arrayOf(ClubLink.propTypes.clublink).isRequired,
  };

export default ClubSearch;