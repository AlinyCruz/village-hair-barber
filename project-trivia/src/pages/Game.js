import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MainGame from '../components/MainGame';

class Game extends React.Component {
  // async componentDidMount() {
  //   const { history } = this.props;
  //   const recoveryToken = localStorage.getItem('token');
  //   const url = `https://opentdb.com/api.php?amount=5&token=${recoveryToken}`;
  //   const response = await fetch(url);
  //   const dataQuestion = await response.json();
  //   console.log(dataQuestion.response_code);
  //   const codeResponse = 3;
  //   if (dataQuestion.response_code === codeResponse) {
  //     localStorage.removeItem('token');
  //     return history.push('/');
  //   }
  // }

  render() {
    const { history } = this.props;
    return (
      <div className="game">
        <Header />
        <MainGame history={ history } />
      </div>
    );
  }
}
Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect()(Game);
