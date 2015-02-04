///<reference path='../node_modules/typed-react/dist/typed-react.d.ts' />
///<reference path='../node_modules/typed-react/typings/react/react.d.ts' />

import React = require('react');
import TypedReact = require('typed-react');

class App extends TypedReact.Component<{},{}> {
  render() {
    return React.DOM.div(null, "hello");
  }
}

export var component = React.createFactory(TypedReact.createClass<{},{}>(App));
