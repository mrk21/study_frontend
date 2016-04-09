import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'reducers';

const mapStateToProps = state => ({state});

const mapDispatchToProps = {};

class Hoge extends React.Component {
  render() {
    return <p>hoge</p>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hoge);
