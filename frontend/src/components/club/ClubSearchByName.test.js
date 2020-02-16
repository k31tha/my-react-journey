import React, { useState } from 'react';
import {render, cleanup, fireEvent, debug} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ClubSearchByName from './ClubSearchByName';

describe('ClubLinkList check render scenarios', () => {
  afterEach(cleanup);
  test('shows the search box', () => {
    const spy = jest.fn();
    const { getByText } = render(<ClubSearchByName nameSearch={''} handleNameSearch={spy}>{'Search by:'}</ClubSearchByName>);
    expect(getByText('Search by:')).toBeInTheDocument();
  });

  test('shows the search box with an initial value', () => {
    const spy = jest.fn();
    const { queryByLabelText } = render(<ClubSearchByName nameSearch={'Woking'} handleNameSearch={spy}>{'Search by:'}</ClubSearchByName>);
    expect(queryByLabelText('club-search').value).toBe('Woking');
  });

  test('shows the search box after change', () => {
    const spy = jest.fn();
    const clubName = 'Woking';
    const { getByLabelText} = render(<ClubSearchByName nameSearch={clubName} handleNameSearch={spy}>{'Search by:'}</ClubSearchByName>);
    const input  = getByLabelText('club-search');
    expect(input.value).toBe("Woking");
    fireEvent.change(input,{ target: { value: 'Knaphill' } });
    expect(spy).toHaveBeenCalledTimes(1)
  });
})