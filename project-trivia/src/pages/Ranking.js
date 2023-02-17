import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Ranking extends React.Component {
  paginaHome = (rota) => {
    const { history } = this.props;
    return history.push(rota);
  };

  render() {
    return (
      <div>
        <h2 data-testid="ranking-title">Você esta na pagina de Ranking!!!</h2>
        <button data-testid="btn-go-home" onClick={ () => this.paginaHome('/') }>
          Home
        </button>
      </div>
    );
  }
}
Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect()(Ranking);
