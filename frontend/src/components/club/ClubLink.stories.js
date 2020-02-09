import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import ClubLink from './ClubLink';

export default {
  component: ClubLink,
  title: 'ClubLink',
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClubSelected: action('onClubSelected'),
};

export const activeClubLinkData = {
  name: 'Woking FC',
  url: 'woking-fc',
  active: true
};

export const ActiveClub = () => {
  return <ClubLink clublink={object('clubLink',{ ...activeClubLinkData })} {...actionsData} />;
};

export const inactiveClubLinkData = {
  name: 'Leyton Orient FC',
  url: 'leyton-orient-fc',
  active: false
};

export const InActiveClub = () => {
  return <ClubLink clublink={object('clubLink',{ ...inactiveClubLinkData })} {...actionsData} />;
};
