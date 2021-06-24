import React from 'react';
import renderWithRouter from './renderWithRouter';
//import { fireEvent } from '@testing-library/react';
import App from './App';
import { fireEvent } from '@testing-library/react';

it('Renderiza página inicial?', () => {
  const { getByText } = renderWithRouter(<App />);
  const home = getByText(/Bem vindo a minha página/i);
  expect(home).toBeInTheDocument();
});

it('Navega até a page About?', () => {
  const { getByText, history } = renderWithRouter(<App />);
  fireEvent.click(getByText(/Sobre/i));
  const url = history.location.pathname;
  expect(url).toBe('/about');
  const about = getByText(/Sou a página Sobre/i);
  expect(about).toBeInTheDocument();
});
