import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ClubSearch from './ClubSearch';

describe('ClubSearch', () => {
afterEach(cleanup);
test('shows the list of clubs', () => {
  const clubListData = [{
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

  const { getByText,queryByText } = render(<ClubSearch clubs={clubListData} />);
  expect(getByText(clubListData[2].name)).toBeInTheDocument();
  expect(queryByText('Liverpool')).toBeNull();
  fireEvent.click(getByText('InActive'));
  expect(queryByText(clubListData[1].name)).toBeInTheDocument();
  expect(queryByText(clubListData[0].name)).toBeNull();
  fireEvent.click(getByText('Active'));
  expect(queryByText(clubListData[2].name)).toBeInTheDocument();
  expect(queryByText(clubListData[1].name)).toBeNull();
});

test('shows the empty list of clubs', () => {
  const clubListData = [];
  const { getByText } = render(<ClubSearch clubs={clubListData} />);
  expect(getByText('empty list')).toBeInTheDocument();
  //fireEvent.click();
});

});
