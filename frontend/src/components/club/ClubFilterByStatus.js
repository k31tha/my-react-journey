import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ClubLinkList from './ClubLinkList';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_INACTIVE: 'SHOW_INACTIVE'
}

ClubLinkList.propTypes = {
  clubs: PropTypes.arrayOf(ClubLinkList.propTypes.clublink).isRequired,
};

const FilterByStatus = (clubs, filterBy) => {
  const filteredClubs = [...clubs];
  return (filterBy === VisibilityFilters.SHOW_ALL) ?  filteredClubs :
    filteredClubs.filter((club)=>club.active ===
    (filterBy === VisibilityFilters.SHOW_ACTIVE) ? true : false);
}

function ClubFilterByStatus({clubs}) {
  const [filterBy, setFilterBy] = useState(VisibilityFilters.SHOW_ALL);
  return(
    <>
    <button onClick={() => setFilterBy(VisibilityFilters.SHOW_ACTIVE)}>Active</button>
    <button onClick={() => setFilterBy(VisibilityFilters.SHOW_INACTIVE)}>InActive</button>
    <button onClick={() => setFilterBy(VisibilityFilters.SHOW_ALL)}>All</button>
    <ClubLinkList clubs={FilterByStatus(clubs,filterBy)}/>
    </>
  );
}

export default ClubFilterByStatus;
