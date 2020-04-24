import React from 'react';
import {render, cleanup, waitForElement} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ClubDetailsContainer from './ClubDetailsContainer';
import axiosMock from 'axios'
jest.mock('axios');
beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(cleanup);

describe('ClubDetailsContainer', () => {
  test('test the api call for a known club', async () => {
    const url = 'Knaphill-FC';
    axiosMock.get.mockResolvedValue({
      data: {  
        name: 'Knaphill FC',
        url: 'knaphill-fc',
        active: true,
        clubofficialwebsiteurl: '',
        logoname: ''
      },
    });
    const { getByTestId } = render(<ClubDetailsContainer clubUrl={url} />);
    const resolvedEl = await waitForElement(() => getByTestId("clubdetail"));
    expect((resolvedEl.firstChild).textContent).toBe("Knaphill FC");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith("http://localhost:3090/clubs/"+url);
  });

  test('test the api call for an unknown club', async () => {
    const url = 'Knaphill-FC';
    const errorMessage = 'Network Error';
    axiosMock.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    const { getByTestId } = render(<ClubDetailsContainer clubUrl={url} />);
    const resolvedEl = await waitForElement(() => getByTestId("not-found"));
    expect((resolvedEl).textContent).toBe("Page Not Found");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith("http://localhost:3090/clubs/"+url);
  });

});