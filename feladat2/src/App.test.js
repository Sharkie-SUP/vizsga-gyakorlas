import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should display second level headings correctly', () => {
  render(<App />);

  const titles = [
    screen.getByText('Az antikvárium története'),
    screen.getByText('Hírességek, akik itt jártak'),
    screen.getByText('Új híresség jelzése'),
  ];

  titles.forEach(e => {
    expect(e).toBeInTheDocument();
    expect(e.tagName).toMatch(/^h2$/i);
  });
});

it('should display third level headings correctly', () => {
  render(<App />);
  
  const titles = [
    screen.getByText(/Ady Endre/i),
    screen.getByText(/Móra Ferenc/i),
    screen.getByText(/Névtelen adományozó/i),
  ];

  titles.forEach(e => {
    expect(e).toBeInTheDocument();
    expect(e.tagName).toMatch(/^h3$/i);
  });
});

it('should have Wikipedia links', () => {
  render(<App />);

  const links = screen.getAllByText('Wikipédia');
  expect(links).toHaveLength(2);
  links.forEach(a => {
    expect(a.tagName).toMatch(/^a$/i);
  });
});

it('should have the url field', () => {
  render(<App />);

  const urlField = screen.getByLabelText('Wikipédia link');
  expect(urlField).toBeInTheDocument();
  expect(urlField).toBeInstanceOf(HTMLInputElement);
  expect(urlField.type).toBe('url');
});


it('should have the description field', () => {
  render(<App />);

  const textField = screen.getByLabelText('Leírás');
  expect(textField).toBeInTheDocument();
  expect(textField).toBeInstanceOf(HTMLTextAreaElement);
});

it('should have a primary button', () => {
  render(<App />);

  let button = screen.queryByDisplayValue('Elküld');
  if (!button) {
    button = screen.getByText('Elküld');
  }
  expect(button).toBeInTheDocument();
  expect(button.type).toBe('submit');
  expect(button.classList).toContain('btn-primary');
});
