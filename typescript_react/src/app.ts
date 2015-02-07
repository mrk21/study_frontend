"use strict";

import React = require('react/addons');

class AppState {
  data: number[] = [];
}

class App extends React.Component<any, AppState, any> {
  state = new AppState;
  
  render() {
    return React.jsx(`
      <div>
        <button onClick={this.onClick.bind(this)}>add</button>
        <button onClick={this.onClear.bind(this)}>clear</button>
        <ul>{this.state.data.map((v) =>
          <li key={v}>{v}</li>)
        }</ul>
      </div>
    `);
  }
  
  onClear(e: React.SyntheticEvent) {
    this.setState({data: []});
  }
  
  onClick(e: React.SyntheticEvent) {
    this.state.data.push(this.state.data.length + 1);
    this.setState({data: this.state.data});
  }
}

export = App;
