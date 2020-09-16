import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import ClubSearchByName from './ClubSearchByName';

export default {
  component: ClubSearchByName,
  title: 'ClubSearchByName',
  //decorators: [withKnobs,StoryRouter()],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  handleNameSearch: action('handleNameSearch'),
};

//return <ClubSearchByName nameSearch={nameSearch} handleNameSearch={(ev)=>handleChange(ev)}>Search:</ClubSearchByName>;

export const Default = () => {
  const nameSearch = 'Knaphill';
  
  return <ClubSearchByName nameSearch={nameSearch} {...actionsData}>Search:</ClubSearchByName>;
};

