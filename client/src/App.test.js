import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'
import PlayerCard from './components/Cards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test ('World Cup Names', () => {
  const { getByText } = rtl.render(<App />);
  getByText('World Cup Players');
});

test ('Checking h2 renders', () => {
  const { getByText } = rtl.render(<App />);
  getByText('From Most-Searched to Least Searched');
});

