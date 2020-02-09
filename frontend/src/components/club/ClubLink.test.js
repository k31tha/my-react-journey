import React from 'react';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ClubLink from './ClubLink';

describe('ClubLink check render scenarios', () => {
afterEach(cleanup);
test('shows the active club detail', () => {
  const activeClubLinkData = {
    name: 'Woking FC',
    url: 'woking-fc',
    active: true
  };

  const { getByText } = render(<ClubLink clublink={activeClubLinkData} />);
  expect(getByText(activeClubLinkData.name)).toBeInTheDocument();
});

test('shows the inactive club detail', () => {
  const inactiveClubLinkData = {
    name: 'Leyton Orient FC',
    url: 'leyton-orient-fc',
    active: false
  };
  const { getByText, debug } = render(<ClubLink clublink={inactiveClubLinkData} />);
  debug();
  expect(getByText(inactiveClubLinkData.name)).toBeInTheDocument();
  expect(getByText(inactiveClubLinkData.name).closest("li")).toHaveClass("InActiveClub");
});
});
