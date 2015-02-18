///<reference path='_references.d.ts' />
"use strict";

import React = require('react/addons');
import Router = require('react-router');
import TypedReact = require('typed-react');
import Fluxxor = require("fluxxor");

// Store
module ListStore {
    export type ValueType = string;
    
    export class State {
        list = Array<ValueType>();
    }
    
    export module Action {
        export function add(value: ValueType) {
            this.dispatch("list:add", value);
        }
        
        export function clear() {
            this.dispatch("list:clear");
        }
    }
    
    export var Store = Fluxxor.createStore({
        state: State,
        
        initialize: function() {
            this.state = new State;
            this.bindActions(
                "list:add", this.onAdd.bind(this),
                "list:clear", this.onClear.bind(this)
            );
        },
        
        onAdd: function(value: ValueType) {
            this.state.list.push(value);
            this.emit("change");
        },
        
        onClear: function() {
            this.state.list = [];
            this.emit("change");
        }
    });
}

// Component
module ListComponent {
    class State {
        list: ListStore.State;
        
        constructor(flux: Fluxxor.Flux) {
            this.list = flux.store('list').state;
        }
    }
    
    class Spec extends TypedReact.Component<any, State> implements Fluxxor.FluxMixin, Fluxxor.StoreWatchMixin<State> {
        getFlux: () => Fluxxor.Flux;
        
        getStateFromFlux() {
            return new State(this.getFlux());
        }
        
        render() {
            return React.jsx(`
                <div>
                    <button onClick={this.onAdd}>add</button>
                    <button onClick={this.onClear}>clear</button>
                    <ul>{this.state.list.list.map((v) =>
                        <li>{v}</li>
                    )}</ul>
                </div>
            `);
        }
        
        onAdd() {
            this.getFlux().actions.list.add(`${this.state.list.list.length} clicked`);
        }
        
        onClear() {
            this.getFlux().actions.list.clear();
        }
    }
    
    export var Component = TypedReact.createClass(Spec, [
        Fluxxor.FluxMixin(React),
        Fluxxor.StoreWatchMixin<State>('list')
    ]);
}

module InfoComponent {
    class Spec extends TypedReact.Component<any,any> {
        render() {
            return React.jsx(`<p>info</p>`);
        }
    }
    
    export var Component = TypedReact.createClass(Spec);
}

module AppComponent {
    class Spec extends TypedReact.Component<any,any> {
        render() {
            var Link = Router.Link;
            var RouteHandler = Router.RouteHandler;
            
            return React.jsx(`
                <div>
                    <h1><Link to="home">www</Link></h1>
                    <ul>
                        <li><Link to="info">info</Link></li>
                    </ul>
                    <RouteHandler {...this.props} />
                </div>
            `);
        }
    }
    
    export var Component = TypedReact.createClass(Spec);
}

// Flux
module Flux {
    var App = AppComponent.Component;
    var Info = InfoComponent.Component;
    var List = ListComponent.Component;
    
    module Stores {
        export var list = new ListStore.Store();
    }
    
    module Actions {
        export var list = ListStore.Action;
    };
    
    module Routes {
        var Route = Router.Route;
        var DefaultRoute = Router.DefaultRoute;
        
        export var Component = React.jsx(`
            <Route handler={App} name="home" path="/">
                <Route name="info" handler={Info} />
                <DefaultRoute handler={List} />
            </Route>
        `);
    }
    
    var flux = new Fluxxor.Flux(Stores, Actions);
    
    flux.on("dispatch", (type: string, payload: any) => {
        if (console && console.log) {
            console.log("[Dispatch]", type, payload);
        }
    });
    
    Router.run(Routes.Component, (RouteHandler: any, state: any) => {
        React.render(React.jsx(`<RouteHandler flux={flux} />`), document.getElementById("app"));
    });
}
