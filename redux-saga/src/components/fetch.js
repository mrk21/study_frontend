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
        <h2>data</h2>
        <pre style={{padding: '10px', background: '#eee'}}>{ JSON.stringify(this.props.api.data) }</pre>
        <h2>error</h2>
        <pre style={{padding: '10px', background: '#eee'}}>{ JSON.stringify(this.props.api.error) }</pre>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fetch);
