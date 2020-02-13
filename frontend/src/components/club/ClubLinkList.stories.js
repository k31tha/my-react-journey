import React from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';

import ClubLinkList from './ClubLinkList';

export default {
  component: ClubLinkList,
  title: 'ClubLinkList',
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
  }];

export const Default = () => {
  return <ClubLinkList clubs={clubListData} />;
};

export const Empty = () => <ClubLinkList clubs={[]} />;
