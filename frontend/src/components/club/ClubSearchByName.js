import React, { useState } from 'react';

const ClubSearchByName = ({ nameSearch, handleNameSearch, children }) => {
    return(
    <>
      {children}
      <input type="text" value={nameSearch} aria-label="club-search" onChange={handleNameSearch} />
    </>
    );
}

export default ClubSearchByName;