import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Acertos extends Component {
  render() {
    const { assertions } = this.props;
    const acertei = 3;
    return (
      <div>
        {assertions < acertei ? (
          <h3 data-testid="feedback-text">Could be better...</h3>
        ) : (
          <h3 data-testid="feedback-text">Well Done!</h3>
        )}
      </div>
    );
  }
}
Acertos.propTypes = {
  assertions: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Acertos);
