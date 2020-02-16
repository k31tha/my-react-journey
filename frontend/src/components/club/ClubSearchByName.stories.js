import React, {useState} from 'react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import ClubSearchByName from './ClubSearchByName';

export default {
  component: ClubSearchByName,
  title: 'ClubSearchByName',
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  handleNameSearch: action('handleNameSearch'),
};

//return <ClubSearchByName nameSearch={nameSearch} handleNameSearch={(ev)=>handleChange(ev)}>Search:</ClubSearchByName>;

export const Default = () => {
  const nameSearch = 'Knaphill';
  const handleChange = event => action(event.target.value);
  
  return <ClubSearchByName nameSearch={nameSearch} {...actionsData}>Search:</ClubSearchByName>;
};

