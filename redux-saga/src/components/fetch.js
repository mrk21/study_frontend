import React from 'react';
import { connect } from 'react-redux';
import * as apiActions from 'actions/api';
import * as execSagaActions from 'actions/exec_saga';
import { put } from 'redux-saga/effects';

const mapStateToProps = state => ({api: state.api});

const mapDispatchToProps = Object.assign({}, apiActions, execSagaActions);

class Fetch extends React.Component {
  *saga() {
    yield put({type: 'FETCH', payload: { count: 5 }});
  }

  handleClickForExecSaga = () => {
    this.props.execSaga(this.saga.bind(this));
  }

  handleClickForApi = () => {
    this.props.fetch();
  }

  render() {
    const State = () => this.props.api.state === 'fetching' ? <p>loading</p> : <span />;
    return (
      <div>
        <button type="button" onClick={ this.handleClickForExecSaga }>exec saga</button>
        <button type="button" onClick={ this.handleClickForApi }>fetch api</button>
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
