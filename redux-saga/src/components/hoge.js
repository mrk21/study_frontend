import React from 'react';
import { connect } from 'react-redux';
import * as hogeActions from 'actions/hoge';

const mapStateToProps = state => ({state});

const mapDispatchToProps = Object.assign({}, hogeActions);

class Hoge extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {value: 0};
  }
  
  handleClick() {
    this.setState({value: this.state.value + 1});
    this.props.doSomething(this.state.value);
  }
  
  render() {
    return <p onClick={ this.handleClick }>{ this.state.value }</p>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hoge);
