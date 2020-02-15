import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import ClubSearch from './ClubSearch';

export default {
  component: ClubSearch,
  title: 'ClubSearch',
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const clubListData =
  [{
    name: 'Woking FC',
    url: 'woking-fc',
    active: true
  },
  {
    name: 'Leyton Orient FC',
    url: 'leyton-orient-fc',
    active: false
  },
  {
    name: 'Knaphill FC',
    url: 'knaphill-fc',
    active: true
  }
];

export const actionsData = {
  statusQuery: action('statusQuery'),
};

export const Default = () => {
  return <ClubSearch clubs={clubListData} />;
};

export const Empty = () => {
  return <ClubSearch clubs={[]} />;
};
