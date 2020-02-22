import React from 'react';
import PropTypes from 'prop-types';

const OfficialWebsite = ({ clubofficialwebsiteurl }) => {
  if (clubofficialwebsiteurl === "") {
    return <span>official website: not known</span>;
  }
  return (
    <span>
      official website:{" "}
      <a href={clubofficialwebsiteurl} target="_blank" rel="noopener noreferrer">
        {clubofficialwebsiteurl}
      </a>
    </span>
  );
};

const ClubLogo = ({ logoname,clubname }) => {
    if (logoname === "") {
      return <></>;
    }
    const logoimagepath='/assets/logos/'+logoname;
    return (
      <span>
       <img src={logoimagepath} alt={clubname} />
      </span>
    );
  };

const ClubDetail = ({
  clubdetail: { name, active, clubofficialwebsiteurl, logoname }
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <ClubLogo logoname={logoname} clubname={name}/>
      <br />
      <OfficialWebsite clubofficialwebsiteurl={clubofficialwebsiteurl} />
    </div>
  );
};

ClubDetail.propTypes = {
  clubdetail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    clubofficialwebsiteurl: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    logoname: PropTypes.string.isRequired
  })
};

export default ClubDetail;
 