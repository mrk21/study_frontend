import React from 'react';
import { connect } from 'react-redux';
import * as hogeActions from 'actions/hoge';

const mapStateToProps = state => ({state});

const mapDispatchToProps = Object.assign({}, hogeActions);

class Hoge extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.doSomething();
  }
  
  render() {
    return <p onClick={ this.handleClick }>hoge</p>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hoge);
