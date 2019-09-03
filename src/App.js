import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Header from './components/header/Header';

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
        <Header />
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
