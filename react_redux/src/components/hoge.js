import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({state});

const mapDispatchToProps = {};

class Hoge extends React.Component {
  render() {
    return <p>hoge</p>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hoge);
