import React from 'react';
import PropTypes from 'prop-types';
import ClubLink from './ClubLink';

ClubLinkList.propTypes = {
  clubs: PropTypes.arrayOf(ClubLink.propTypes.clublink).isRequired,
};

function ClubLinkList({clubs}) {
  if (clubs.length === 0) {
    return <div className="list-items">empty list</div>;
  }
  return(
    <ul>
    {clubs.map(club => (
        <ClubLink key={club.url} clublink={club} />
      ))}
    </ul>
  );
}

export default ClubLinkList;
