import React from 'react'
import PropTypes from 'prop-types'

const ClubLink = ( {clublink: { url, name, active} }) => {
    return (
        <li className={active?'':'InActiveClub'} key={name}><a href={url}>
            {name}
        </a></li>
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
