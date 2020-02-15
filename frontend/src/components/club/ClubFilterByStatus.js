import React from 'react';
import PropTypes from 'prop-types';
import VisibilityFilters from './VisibilityFilters';

const FilterButton = ({children, filterStatus, statusFilterBy, statusQuery}) => {
  return (<button onClick={() => statusQuery(filterStatus)}>
    {children}
  </button>);
}

const ClubFilterByStatus = ({statusFilterBy, statusQuery}) => {
  return(
    <>
    <FilterButton filterStatus={VisibilityFilters.SHOW_ACTIVE} statusFilterBy={statusFilterBy} statusQuery={statusQuery}>Active</FilterButton>
    <FilterButton filterStatus={VisibilityFilters.SHOW_INACTIVE} statusFilterBy={statusFilterBy} statusQuery={statusQuery}>InActive</FilterButton>
    <FilterButton filterStatus={VisibilityFilters.SHOW_ALL} statusFilterBy={statusFilterBy} statusQuery={statusQuery}>All</FilterButton>
    </>
  );
}

PropTypes.ClubFilterByStatus = {
  statusFilterBy: PropTypes.string.isRequired,
  statusQuery: PropTypes.func
}

export default ClubFilterByStatus;
