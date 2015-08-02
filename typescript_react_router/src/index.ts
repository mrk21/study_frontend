///<reference path='_references.d.ts' />
"use strict";

import React = require('react');
import Router = require('react-router');

import Route = Router.Route;
import DefaultRoute = Router.DefaultRoute;
import RouteHandler = Router.RouteHandler;
import Link = Router.Link;


class App extends React.Component<any, any> {
    render() {
        return React.jsx(`
            <div>
                <h1><Link to="home">www</Link></h1>
                <ul>
                    <li><Link to="info">info</Link></li>
                </ul>
                <RouteHandler />
            </div>
        `);
    }
}


class ListState {
    data: number[] = [];
}
class List extends React.Component<any, ListState> {
    state = new ListState;
    
    render() {
        return React.jsx(`
            <div>
                <button onClick={this.onClick.bind(this)}>add</button>
                <button onClick={this.onClear.bind(this)}>clear</button>
                <ul>{this.state.data.map((v) =>
                    <li key={v}>{v}</li>
                )}</ul>
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


class Info extends React.Component<any, any> {
    static contextTypes = {
        router: React.PropTypes.func
    }
    
    render() {
        return React.jsx(`<p onClick={this.onClick.bind(this)}>info</p>`);
    }
    
    onClick() {
        var router: Router.Context = this.context.router;
        console.log(router.getCurrentPath());
        console.log(router.isActive('info'));
        router.transitionTo('home');
    }
}


var routes = React.jsx(`
    <Route handler={App} name="home" path="/">
        <Route name="info" handler={Info} />
        <DefaultRoute handler={List} />
    </Route>
`);
Router.run(routes, (Handler, state) => {
    React.render(React.jsx(`<Handler />`), document.getElementById("app"));
});
