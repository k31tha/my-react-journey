import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import ClubSearch from './ClubSearch';

export default {
  component: ClubSearch,
  title: 'ClubSearch',
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
  return (<MemoryRouter><ClubSearch clubs={clubListData} /></MemoryRouter>);
};

//Default.story = {
//  decorators: [StoryRouter({})]
//}

export const Empty = () => {
  return (<MemoryRouter><ClubSearch clubs={[]} /></MemoryRouter>);
};

//Empty.story = {
//  decorators: [StoryRouter({})]
//}
