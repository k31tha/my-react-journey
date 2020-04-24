import React from 'react';
import {render, cleanup, waitForElement} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from 'react-router-dom';
import ClubSearchContainer from './ClubSearchContainer';
import axiosMock from 'axios'
jest.mock('axios');
beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(cleanup);

describe('ClubSearchContainer', () => {
  
  test('test the api call for a known club', async () => {
    axiosMock.get.mockResolvedValue({
      data: [{  
        
        name: 'Knaphill FC',
        url: 'knaphill-fc',
        active: true
        
      }]
    });
    const { getByTestId } = render(<MemoryRouter><ClubSearchContainer /></MemoryRouter>);
    const resolvedEl = await waitForElement(() => getByTestId("search-club-list"));
    expect((resolvedEl.firstChild).textContent).toBe("Knaphill FC");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith("http://localhost:3090/clubs");
  });

  test('test the api call for an error', async () => {
    const errorMessage = 'Network Error';
    axiosMock.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    const { getByTestId } = render(<ClubSearchContainer />);
    const resolvedEl = await waitForElement(() => getByTestId("empty-club-list"));
    expect((resolvedEl).textContent).toBe("empty list");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith("http://localhost:3090/clubs");
  });

});