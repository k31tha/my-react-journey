import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';

import ClubFilterByStatus from './ClubFilterByStatus';

export default {
  component: ClubFilterByStatus,
  title: 'ClubFilterByStatus',
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
  }];

export const Default = () => {
  return <ClubFilterByStatus clubs={clubListData} />;
};

export const Empty = () => <ClubFilterByStatus clubs={[]} />;
