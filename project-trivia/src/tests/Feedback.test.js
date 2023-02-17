import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import Feedback from '../pages/Feedback';

describe('Teste o componente Feedback', () => {
  it('Teste se a página contém um o nome do jogador', () => {
    renderWithRouterAndRedux(<Feedback />);
    const name = screen.getByTestId('header-player-name');
    expect(name).toBeInTheDocument();
  });
  it('Teste se a página contém a pontuação', () => {
    renderWithRouterAndRedux(<Feedback />);
    const pontuacao = screen.getByTestId('header-score');
    expect(pontuacao).toBeInTheDocument();
  });
  it('Teste se a página contém a imagem do gravatar', () => {
    renderWithRouterAndRedux(<Feedback />);
    const img = screen.getByRole('img', { name: /gravatar/i });
    expect(img.alt).toBe("gravatar");
  });
  });
  it('Teste se a página contém o botão playAgain', () => {
    renderWithRouterAndRedux(<Feedback />);
    const buttonPlay = screen.getByRole('button', {
      name: /play again/i });
    expect(buttonPlay).toBeInTheDocument();
  });
  it('Teste também se ao clicar no botão enviar, você é redirecionado para página do jogo', () => {
    const { history } = renderWithRouterAndRedux(<Feedback />);
    const buttonPlay = screen.getByRole('button', {
      name: /play again/i });
    userEvent.click(buttonPlay);
    act(() => {
      expect(history.location.pathname).toBe('/game');
    });
  });
  it('Teste também se ao clicar no botão enviar, você é redirecionado para outra página', () => {
    const { history } = renderWithRouterAndRedux(<Feedback />);
    const buttonRanking = screen.getByRole('button', {
      name: /ranking/i });
    userEvent.click(buttonRanking);
    const texto = screen.getByRole('heading', { level: 1,
      name: /ranking/i
    })
    act(() => {
      expect(history.location.pathname).toBe('/ranking');
    });
  });