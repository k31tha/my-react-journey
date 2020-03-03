import React from 'react';
import { render, wait } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  const { getByText } = render(<App />);
  // initially loading should appear
  //expect(getByText(/Loading/i)).toBeInTheDocument();
  // wait for Search By to appear
  await wait(() => {
    expect(getByText(/Search by/i)).toBeInTheDocument();
  })

});
