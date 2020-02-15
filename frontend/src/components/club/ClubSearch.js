import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ClubLink from './ClubLink';
import ClubLinkList from './ClubLinkList';
import ClubFilterByStatus from './ClubFilterByStatus';
import VisibilityFilters from './VisibilityFilters';

const FilterByStatus = (clubs, filterBy) => {
    const filteredClubs = [...clubs];
    return (filterBy === VisibilityFilters.SHOW_ALL) ?  filteredClubs :
      filteredClubs.filter((club)=>club.active ===
      (filterBy === VisibilityFilters.SHOW_ACTIVE) ? true : false);
  }

const ClubSearch = ({clubs}) => {
    const [statusFilterBy, setStatusFilterBy] = useState(VisibilityFilters.SHOW_ALL);
    const handleStatusQuery = filterValue => {
        setStatusFilterBy(filterValue);
      };
    return (
        <>
        <ClubFilterByStatus statusFilterBy={statusFilterBy} statusQuery={handleStatusQuery} />
        <ClubLinkList clubs={FilterByStatus(clubs,statusFilterBy)} />
        </>
    );
}

ClubSearch.propTypes = {
    clubs: PropTypes.arrayOf(ClubLink.propTypes.clublink).isRequired,
  };

export default ClubSearch;