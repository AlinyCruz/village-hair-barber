import React from 'react';
import { connect } from 'react-redux';

class Settings extends React.Component {
  render() {
    return (
      <h2
        data-testid="settings-title"
      >
        Você esta na pagina de configurações!!!
      </h2>
    );
  }
}
export default connect()(Settings);
