import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'
import Card from './components/PlayerCards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test ('get athletes', () => {
  const { getByText } = rtl.render(<App />);
  getByText('Athletes');
});

test ('Checking h2 renders', () => {
  const { getByText } = rtl.render(<App />);
  getByText('List of Athletes');
});
