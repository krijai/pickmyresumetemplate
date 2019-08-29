import React, { Component } from 'react';
import './App.scss';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    resume: state
  };
}

function mapDispatchToProps(dispatch, props) {
  return {

  };
}

class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
