import React from 'react';
import {render, cleanup} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";
import StoryRouter from '';
import ClubLink from './ClubLink';

describe('ClubLink check render scenarios', () => {
afterEach(cleanup);
test('shows the active club detail', () => {
  const activeClubLinkData = {
    name: 'Woking FC',
    url: 'woking-fc',
    active: true
  };

  const { getByText } = render(<MemoryRouter><ClubLink clublink={activeClubLinkData} /></MemoryRouter>);
  expect(getByText(activeClubLinkData.name)).toBeInTheDocument();
});

test('shows the inactive club detail', () => {
  const inactiveClubLinkData = {
    name: 'Leyton Orient FC',
    url: 'leyton-orient-fc',
    active: false
  };
  const { getByText } = render(<MemoryRouter><ClubLink clublink={inactiveClubLinkData} /></MemoryRouter>);
  //debug();
  expect(getByText(inactiveClubLinkData.name)).toBeInTheDocument();
  expect(getByText(inactiveClubLinkData.name).closest("li")).toHaveClass("InActiveClub");
});
});
describe('ClubLink check render scenarios', () => {
      afterEach(cleanup);
      test('shows the active club detail', () => {
          const activeClubLinkData = {
            name: 'Woking FC',
            url: 'woking-fc',
            active: true
          };

          const {
            getByText
          } = render( <MemoryRouter>< ClubLink clublink = {
              activeClubLinkData
            }
            /></MemoryRouter>);
            expect(getByText(activeClubLinkData.name)).toBeInTheDocument();
          });

        test('shows the inactive club detail', () => {
            const inactiveClubLinkData = {
              name: 'Leyton Orient FC',
              url: 'leyton-orient-fc',
              active: false
            };
            const {
              getByText
            } = render( <MemoryRouter><ClubLink clublink = {
                inactiveClubLinkData
              }
              /></MemoryRouter>);
              //debug();
              expect(getByText(inactiveClubLinkData.name)).toBeInTheDocument(); expect(getByText(inactiveClubLinkData.name).closest("li")).toHaveClass("InActiveClub");
            });
        });
