import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import VisibilityFilters from './VisibilityFilters';
import ClubFilterByStatus from './ClubFilterByStatus';

export default {
  component: ClubFilterByStatus,
  title: 'ClubFilterByStatus',
  //decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  statusQuery: action('statusQuery'),
};

export const Default = () => {
  return <ClubFilterByStatus statusFilterBy={VisibilityFilters.SHOW_ALL} {...actionsData} />;
};
