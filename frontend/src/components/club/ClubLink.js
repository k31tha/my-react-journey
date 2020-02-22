import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const ClubLink = ( {clublink: { url, name, active} }) => {
    return (
        <li className={active?'':'InActiveClub'} key={name}><Link to={'club/'+url}>
            {name}
        </Link></li>
    );
}

ClubLink.propTypes = {
  clublink: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  })
}

export default ClubLink;
