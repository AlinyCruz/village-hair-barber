import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MainGame.css';
import Timer from './Timer';
import { implementScore } from '../redux/actions';

const numero = 0.5;
// const opcoes = [];
const CORRECT_ANSWER = 'correct-answer';

class MainGame extends React.Component {
  state = {
    dados: [],
    resposta: [],
    habilitBorder: false,
    nextBtn: false,
    isDisabled: false,
    contador: 0,
    opcoes: [],
  };

  timer = 0;

  async componentDidMount() {
    const { history } = this.props;

    try {
      const recoveryToken = localStorage.getItem('token');
      const url = `https://opentdb.com/api.php?amount=5&token=${recoveryToken}`;
      const response = await fetch(url);
      const dataQuestion = await response.json();
      const codeResponse = 3;

      if (dataQuestion.response_code === codeResponse) {
        localStorage.removeItem('token');
        return history.push('/');
      }
      this.setState({
        dados: dataQuestion.results,
      }, () => this.criaOpcoes());
    } catch (error) {
      console.log(error);
    }
  }

  // handleFeedback = () => {
  //   const { history } = this.props;
  //   history.push('/feedback');
  // };
  setTimer = (newTimer) => {
    this.timer = newTimer;
  };

  embaralhar = (xablau) => xablau.sort(() => Math.random() - numero);

  criaOpcoes = () => {
    const { dados, contador, opcoes } = this.state;
    opcoes.push(...dados[contador].incorrect_answers.map((e) => e));
    opcoes.push(dados[contador].correct_answer);
    this.setState({
      resposta: this.embaralhar(opcoes),
    });
  };

  handleNext = () => {
    const { history } = this.props;
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
      habilitBorder: false,
      nextBtn: false,
      isDisabled: false,
      resposta: [],
      opcoes: [],
    }), () => {
      const countOpcoes = 5;
      const { contador } = this.state;
      if (contador === countOpcoes) {
        return history.push('/feedback');
      }
      this.criaOpcoes();
    });
  };
  // testa comentar para commit

  handleScore = (isCorrect) => {
    const { dados } = this.state;
    const { score, dispatch } = this.props;
    const formula = 10;
    console.log(isCorrect, 'isCorrect');
    if (isCorrect === CORRECT_ANSWER) {
      const questionsArray = dados[0];
      console.log(questionsArray);
      const difficultyQuestion = questionsArray.difficulty;
      const valueDifficulty = { hard: 3, medium: 2, easy: 1 };
      const scoreValue = formula + (this.timer * valueDifficulty[difficultyQuestion]);
      console.log('time', this.timer);
      console.log(valueDifficulty[difficultyQuestion]);
      const sum = score + scoreValue;
      dispatch(implementScore(sum, 1));
      // this.setState({
      // expired: true,
      // });
    // } else {
      // this.setState({
      // expired: true,
      // });
    }
  };

  //  handleResponse = () => {
  //  this.setState({
  //  response: true,
  //  freeze: true,
  //  counting: false,
  //  });
  //  };

  //  expireQuestion = () => {
  //  this.setState({
  //  expired: true,
  //  counting: false,
  //  freeze: true,
  //  });
  // };

  handleClick = (isCorrect) => {
    // const { habilitBorder } = this.state;
    this.setState({
      habilitBorder: true,
      nextBtn: true,
    });
    this.handleScore(isCorrect);
  };

  handleTimer = () => {
    this.setState({
      isDisabled: true,
    });
  };

  render() {
    const { dados, resposta, habilitBorder, nextBtn, isDisabled, contador } = this.state;
    console.log(dados[contador]?.question);
    console.log(contador);
    return (
      <div className="main-game">
        <div className="perguntas">
          <p
            className="pergunta"
            data-testid="question-text"
          >
            {dados[contador]?.question}
          </p>
          <p
            className="entretenimento"
            data-testid="question-category"
          >
            {dados[contador]?.category}
          </p>
        </div>
        <div data-testid="answer-options" className="botoes-respostas">
          {resposta && resposta?.map((dado, i) => (
            <button
              key={ i }
              data-testid={ dado === dados[contador]
                .correct_answer ? CORRECT_ANSWER : `wrong-answer-${i}` }
              onClick={
                () => this.handleClick(dado === dados[contador]
                  .correct_answer ? CORRECT_ANSWER : `wrong-answer-${i}`)
              }
              className={ habilitBorder && (dado === dados[contador]
                .correct_answer ? 'green' : 'red') }
              disabled={ isDisabled }
            >
              { dado }
            </button>
          ))}
        </div>
        { nextBtn && (
          <button
            className="proximo"
            data-testid="btn-next"
            onClick={ this.handleNext }
          >
            Next
          </button>
        )}

        {/* <Timer handleTimer={ this.handleTimer } /> */}

        {/* <button
          onClick={ this.handleFeedback }
        >
          Feedback
        </button> */}
        <Timer handleTimer={ this.handleTimer } setTimer={ this.setTimer } />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
  score: state.player.score,
});

MainGame.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    dispatch: PropTypes.func,
  }),
}.isRequired;

export default connect(mapStateToProps)(MainGame);
