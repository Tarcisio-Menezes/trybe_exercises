import React from 'react';
import renderWithRouter from './renderWithRouter';
import { fireEvent } from '@testing-library/react';
import App from './App';
import Main from './pages/Main';

it('Renderiza página inicial?', () => {
  const { getByText } = renderWithRouter(<App />);
  const home = getByText(/Bem vindo a minha página/i);
  expect(home).toBeInTheDocument();
});

it('Navega até a page About?', () => {
  const { getByText, history } = renderWithRouter(<Main />);
  const linkSobre = getByText(/Sobre/);
  expect(linkSobre).toBeInTheDocument();
  fireEvent.click(getByText(/Sobre/));
  const url = history.location.pathname;
  expect(url).toBe('/about');
  const about = getByText(/Sou a página Sobre/i);
  expect(about).toBeInTheDocument();
});
