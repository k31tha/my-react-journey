import React from 'react';
import PropTypes from 'prop-types';
import ClubLink from './ClubLink';

const ClubLinkList = ( {clubs} ) => {
  if (clubs.length === 0) {
    return <div data-testid="empty-club-list" className="list-items">empty list</div>;
  }
  return(
    <ul data-testid="search-club-list">
    {clubs.map(club => (
        <ClubLink key={club.url} clublink={club} />
      ))}
    </ul>
  );
}

ClubLinkList.propTypes = {
  clubs: PropTypes.arrayOf(ClubLink.propTypes.clublink).isRequired,
};

export default ClubLinkList;
