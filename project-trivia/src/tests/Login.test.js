import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Teste o componente Login', () => {
  it('Teste se a página contém um campo de email', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('input-gravatar-email');
    expect(email).toBeInTheDocument();
  });
  it('Teste se a página contém um campo de senha', () => {
    renderWithRouterAndRedux(<App />);
    const name = screen.getByTestId('input-player-name');
    expect(name).toBeInTheDocument();
  });
  it('Teste se a página contém um button', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', {
      name: /play/i });
    expect(button).toBeInTheDocument();
  });
  it('Teste se a página contém o botão desabilidado', () => {
    renderWithRouterAndRedux(<App />);
    const button = screen.getByRole('button', {
      name: /play/i });
    expect(button).toBeDisabled();
  });
  it('Teste também se ao clicar no botão enviar, você é redirecionado para outra página', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    expect(window.location.pathname).toBe('/');
    const email = screen.getByTestId('input-gravatar-email');
    userEvent.type(email, 'camilaskaf@gmail.com');
    const name = screen.getByTestId('input-player-name');
    userEvent.type(name, 'camila');
    const button = screen.getByRole('button', {
      name: /play/i });
    expect(button).toBeEnabled();
    userEvent.click(button);

    act(() => {
      expect(history.location.pathname).toBe('/game');
    });
  });
  it('Teste também se ao clicar no botão enviar, você é redirecionado para outra página', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    expect(window.location.pathname).toBe('/');
    const button = screen.getByRole('button', {
      name: /configurações/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    const texto = screen.getByRole('heading', {
      name: /você esta na pagina de configurações!!!/i
    })
    expect(texto).toBeInTheDocument();

    act(() => {
      expect(history.location.pathname).toBe('/seeting');
    });
  });
});