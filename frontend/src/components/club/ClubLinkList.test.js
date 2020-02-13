import React from 'react';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ClubLinkList from './ClubLinkList';

describe('ClubLinkList check render scenarios', () => {
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
  }];

  const { getByText } = render(<ClubLinkList clubs={clubListData} />);
  expect(getByText(clubListData[0].name)).toBeInTheDocument();
});

test('shows the empty list of clubs', () => {
  const clubListData = [];

  //const { getByText } = render(<ClubLinkList clubs={[]} />);
  const { getByText } = render(<ClubLinkList clubs={clubListData} />);
  expect(getByText('empty list')).toBeInTheDocument();
});

});
