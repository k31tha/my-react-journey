import React from 'react';
import { render, waitForElement, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import axiosMock from 'axios'

const clubListData =
  [{
    name: 'Woking FC',
    url: 'woking-fc',
    active: true,
    clubofficialwebsiteurl: 'https://wokingfc.co.uk/',
    logoname:'WokingLogo.png'
  },
  {
    name: 'Leyton Orient FC',
    url: 'leyton-orient-fc',
    active: false,
    clubofficialwebsiteurl:'',
    logoname:''
  },
  {
    name: 'Knaphill FC 1',
    url: 'knaphill-fc',
    active: true,
    clubofficialwebsiteurl: 'https://knaphill.co.uk/',
    logoname:''
  }
];

jest.mock('axios');
describe('ClubSearchContainer', () => {
//jest.mock('axios');
beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(cleanup);

test('renders learn react link', async () => {
  axiosMock.get.mockResolvedValue({
    data: clubListData
  });
  //axios.get.mockImplementation(() => Promise.resolve({data: clubListData}));

  const { getByText,getByTestId } = render(<App />);
  //await wait(() => {
  //  expect(getByText(/Search by/i)).toBeInTheDocument();
  //})
  const resolvedEl = await waitForElement(() => getByTestId("search-club-list"));
  expect(getByText(/Search by/i)).toBeInTheDocument();

});
});
