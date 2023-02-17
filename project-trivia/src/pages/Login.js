import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { actionNome, fetchToken } from '../redux/actions';
import '../App.css';
import trivia from '../trivia.png';

class Login extends React.Component {
  state = {
    name: '',
    email: '',
    isDisabled: true,
  };

  handleChange = ({ target }) => {
  // const { name, value } = target;
    const alvo = target.value;
    const inputAlvo = target.name;
    this.setState({
      [inputAlvo]: alvo,
    }, () => this.validate());
  };

  validate = () => {
    const { email, name } = this.state;

    let validaEmail = false;

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(regex)) {
      validaEmail = true;
    } else {
      validaEmail = false;
    }

    const min = 3;
    const validaName = name.length >= min;

    const dataValidate = (validaEmail && validaName);

    this.setState({
      isDisabled: !dataValidate,
    });

    return dataValidate;
  };

  paginaGame = async (rota) => {
    const { history, dispatch } = this.props;
    const { name, email } = this.state;
    // dispatch(fetchToken(token));
    await fetchToken();
    dispatch(actionNome(name, email));
    return history.push(rota);
  };

  paginaSetting = (rota) => {
    const { history } = this.props;
    return history.push(rota);
  };

  render() {
    const { email, name, isDisabled } = this.state;
    return (
      <div className="header-trivia">
        <img src={ trivia } alt="Trivia" className="trivia" />
        <div className="login">
          <form className="form">
            <div className="label-name">
              Player Game
            </div>
            <input
              name="name"
              value={ name }
              type="text"
              onChange={ this.handleChange }
              data-testid="input-player-name"
              // placeholder="Player name"
              className="input-name"
            />

            <div className="label-email">
              Email
            </div>
            <input
              name="email"
              value={ email }
              type="email"
              onChange={ this.handleChange }
              data-testid="input-gravatar-email"
              // placeholder="Email"
              className="input-email"
            />

            <button
              type="button"
              disabled={ isDisabled }
              data-testid="btn-play"
              onClick={ () => this.paginaGame('/game') }
              className="button-play"
            >
              Play
            </button>

            <button
              type="button"
              data-testid="btn-settings"
              onClick={ () => this.paginaSetting('/settings') }
              className="button-setting"
            >
              Settings
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
