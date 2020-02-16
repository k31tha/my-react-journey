import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ClubSearch from './ClubSearch';

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

describe('ClubSearch', () => {
afterEach(cleanup);
test('shows the list of clubs', () => {

  const { getByText,queryByText } = render(<ClubSearch clubs={clubListData} />);
  expect(getByText(clubListData[2].name)).toBeInTheDocument();
  expect(queryByText('Liverpool')).toBeNull();
});

test('filter the list of clubs by status', () => {

  const { getByText,queryByText } = render(<ClubSearch clubs={clubListData} />);
  fireEvent.click(getByText('InActive'));
  expect(queryByText(clubListData[1].name)).toBeInTheDocument();
  expect(queryByText(clubListData[0].name)).toBeNull();
  fireEvent.click(getByText('Active'));
  expect(queryByText(clubListData[2].name)).toBeInTheDocument();
  expect(queryByText(clubListData[1].name)).toBeNull();
});

test('filter the list of clubs by name', () => {

  const { getByText,queryByText,getByLabelText,debug } = render(<ClubSearch clubs={clubListData} />);
  const input = getByLabelText('club-search');
  fireEvent.change(input,{ target: { value: 'Knaphill' } });
  expect(queryByText(clubListData[2].name)).toBeInTheDocument();
  expect(queryByText(clubListData[1].name)).toBeNull();
  fireEvent.change(input,{ target: { value: 'leyton' } });
  expect(queryByText(clubListData[1].name)).toBeInTheDocument();
});

test('filter the list of clubs by name and status', () => {

  const { getByText,queryByText,getByLabelText,debug } = render(<ClubSearch clubs={clubListData} />);
  const input = getByLabelText('club-search');
  fireEvent.change(input,{ target: { value: 'leyton' } });
  expect(queryByText(clubListData[1].name)).toBeInTheDocument();
  fireEvent.click(getByText('InActive'));
  expect(queryByText(clubListData[1].name)).toBeInTheDocument();
  fireEvent.click(getByText('Active'));
  fireEvent.change(input,{ target: { value: 'o' } });
  expect(queryByText(clubListData[0].name)).toBeInTheDocument();
  expect(queryByText(clubListData[1].name)).toBeNull();
});

test('shows the empty list of clubs', () => {
  const clubListDataEmpty = [];
  const { getByText } = render(<ClubSearch clubs={clubListDataEmpty} />);
  expect(getByText('empty list')).toBeInTheDocument();
});

});
