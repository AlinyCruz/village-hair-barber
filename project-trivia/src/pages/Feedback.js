import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import Acertos from '../components/Acertos';

class Feedback extends React.Component {
  handlePlayAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { name, score, gravatarEmail, assertions } = this.props;
    console.log(gravatarEmail);
    const hash = md5(gravatarEmail).toString();
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return (
      <div>
        <header>
          <div>
            <img
              src={ url }
              alt="gravatar"
              data-testid="header-profile-picture"
            />
          </div>
          <h3 data-testid="header-player-name">{name}</h3>
          <p data-testid="header-score">
            <span data-testid="feedback-total-score">{score}</span>
          </p>
          <Acertos />
          <p data-testid="feedback-total-question">{assertions}</p>
        </header>
        <button data-testid="btn-play-again" onClick={ this.handlePlayAgain }>
          Play Again
        </button>
        <button data-testid="btn-ranking" onClick={ this.handleRanking }>
          Ranking
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
  score: state.player.score,
  assertions: state.player.assertions,
});

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(mapStateToProps)(Feedback);
