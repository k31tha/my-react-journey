import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
//import { action } from '@storybook/addon-actions';

import ClubDetail from './ClubDetail';

export default {
  component: ClubDetail,
  title: 'ClubDetail',
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};


export const clubDetailData = {
  name: 'Woking FC',
  url: 'woking-fc',
  clubofficialwebsiteurl: 'https://wokingfc.co.uk/',
  active: true,
  logoname:'WokingLogo.png'
};

export const ActiveClub = () => {
  return <ClubDetail clubdetail={object('clubdetail',{ ...clubDetailData })} />;
};

export const ActiveClubNoKnobs = () => {
  return <ClubDetail clubdetail={clubDetailData} />;
};

export const clubDetailWithNoWebsiteData = {
  name: 'Woking FC',
  url: 'woking-fc',
  clubofficialwebsiteurl: '',
  active: true,
  logoname:''
};

export const ActiveClubWithNoWebsite = () => {
  return <ClubDetail clubdetail={object('clubdetail',{ ...clubDetailWithNoWebsiteData })} />;
};


