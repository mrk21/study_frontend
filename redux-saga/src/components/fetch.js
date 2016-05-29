import React from 'react';
import { connect } from 'react-redux';
import * as apiActions from 'actions/api';

const mapStateToProps = state => ({api: state.api});

const mapDispatchToProps = Object.assign({}, apiActions);

class Fetch extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.fetch();
  }
  
  render() {
    const State = () => this.props.api.state === 'fetching' ? <p>loading</p> : <span />;
    return (
      <div>
        <button type="button" onClick={ this.handleClick }>fetch api</button>
        <State />
        <pre>{ this.props.api.data }</pre>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fetch);
