import React from 'react';
import * as rtl from '@testing-library/react';

import App from './App';

test('renders without crashing', () => {
  const wrapper = rtl.render(<App />);
  console.log(wrapper.debug())
});

test("World Cup Names are here", () => {
  const { getByText }= rtl.render(<App />);
  getByText('Top Most Searched World Cup Names');
});

