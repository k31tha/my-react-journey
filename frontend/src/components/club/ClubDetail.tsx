import React from 'react';

type ClubOfficialWebsiteProps = {
  clubofficialwebsiteurl: string;
}; 
const OfficialWebsite = ({ clubofficialwebsiteurl }:ClubOfficialWebsiteProps) => {
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

type ClubLogoProps = {
  clubname: string;
  logoname: string;
}; 

const ClubLogo = ({ logoname,clubname } : ClubLogoProps  ) => {
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

  // ClubDetail.propTypes = {
//   clubdetail: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     clubofficialwebsiteurl: PropTypes.string.isRequired,
//     active: PropTypes.bool.isRequired,
//     logoname: PropTypes.string.isRequired
//   })
// };

type ClubDetailProps = {
  name: string;
  clubofficialwebsiteurl: string;
  active: boolean;
  logoname: string;
} ; 

const ClubDetail = (
  { name, active, clubofficialwebsiteurl, logoname }: ClubDetailProps
) => {
  return (
    <div data-testid="clubdetail">
      <h1>{name}</h1>
      <ClubLogo logoname={logoname} clubname={name}/>
      <br />
      <OfficialWebsite clubofficialwebsiteurl={clubofficialwebsiteurl} />
    </div>
  );
};

// ClubDetail.propTypes = {
//   clubdetail: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     clubofficialwebsiteurl: PropTypes.string.isRequired,
//     active: PropTypes.bool.isRequired,
//     logoname: PropTypes.string.isRequired
//   })
// };

export default ClubDetail;
 