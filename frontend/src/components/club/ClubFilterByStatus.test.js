import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ClubFilterByStatus from './ClubFilterByStatus';
import VisibilityFilters from './VisibilityFilters';

describe('ClubFilterByStatus check render', () => {
afterEach(cleanup);
test ('shows the filter buttons', () => {
  const spy = jest.fn();
  const { getByText } = render(<ClubFilterByStatus statusFilterBy={VisibilityFilters.SHOW_ALL} statusQuery={spy} />);
  expect(getByText('InActive')).toBeInTheDocument();
  expect(getByText('Active')).toBeInTheDocument();
  expect(getByText('All')).toBeInTheDocument();
});

test ('check the filter button is called', () => {
  const spy = jest.fn();
  const { getByText } = render(<ClubFilterByStatus statusFilterBy={VisibilityFilters.SHOW_ALL} statusQuery={spy} />);
  fireEvent.click(getByText('Active'));
  fireEvent.click(getByText('InActive'));
  fireEvent.click(getByText('All'));
  expect(spy).toHaveBeenCalledTimes(3);
});

});
