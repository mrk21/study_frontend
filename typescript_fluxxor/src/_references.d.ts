///<reference path='../typings/bundle.d.ts' />
///<reference path='../node_modules/ts-jsx-loader/react-jsx.d.ts' />
///<reference path='../node_modules/typed-react/dist/typed-react.d.ts' />
"use strict";

// see: https://github.com/primus/eventemitter3
declare module EventEmitter3 {
  class EventEmitter3 {
    constructor();
    listeners(event: string) : Function[];
    emit(event: string, ...args: any[]) : boolean;
    on(event: string, fn: Function, context?: any) : EventEmitter;
    once(event: string, fn: Function, context?: any) : EventEmitter;
    removeListener(event: string, fn: Function, once: boolean) : EventEmitter;
    removeAllListeners(event: string) : EventEmitter;
    
    off(event: string, fn: Function, once: boolean) : EventEmitter;
    addListener(event: string, fn: Function, context?: any) : EventEmitter;
  }
  type EventEmitter = EventEmitter3;
  type EventEmitter2 = EventEmitter3;
}

declare module Fluxxor {
  class Dispatcher {
    constructor(stores: any);
    addStore(name: string, store: Store) : void;
    dispatch(action: Function) : void;
    doDispatchLoop(action: Function) : void;
    waitForStores(store: Store, stores: string[], fn: Function) : void;
  }
  
  class Flux extends EventEmitter3.EventEmitter3 {
    constructor(stores: any, actions: any);
    addActions(actions: any) : void;
    addAction(...names: string[], action: Function) : void;
    addAction(names: string[], action: Function) : void;
    store<T extends Store>(name: string) : T;
    addStore(name: string, store: Store) : void;
    addStores(stores: any) : void;
    stores: any;
    actions: any;
  }
  
  class Store extends EventEmitter3.EventEmitter3 {
    constructor(dispatcher?: Dispatcher);
    bindActions(...args: Array<string|Function>) : void;
    bindActions(args: Array<string|Function>) : void;
    waitFor(stores: string[], fn: Function) : void;
    __handleAction__(action: Function): void;
  }
  
  interface Context {
    flux: Flux;
  }
  
  interface StoreSpec {
    initialize?(instance?: any, options?: {}): void;
    actions?: Array<string|Function>;
  }
  
  interface StoreClass {
    new (options?: {}) : any;
  }
  
  module Mixin {
    interface Flux {
      getFlux() : Fluxxor.Flux;
    }
    
    interface FluxChild {
      getFlux() : Fluxxor.Flux;
    }
    
    interface StoreWatch<State> {
      getStateFromFlux() : State;
    }
  }
  
  function FluxMixin(React: any) : Mixin.Flux;
  function FluxChildMixin(React: any) : Mixin.FluxChild;
  function StoreWatchMixin<State>(...storeNames: string[]) : Mixin.StoreWatch<State>;
  function createStore(spec: StoreSpec): StoreClass;
  var version: string;
}

declare module 'fluxxor' {
  export = Fluxxor;
}

declare module 'fluxxor/lib/store' {
  class Store extends Fluxxor.Store {}
  export = Store;
}

declare module ReactRouter {
  module Mixin {
    interface FakeNode {}
    
    interface Navigation {
      makePath(to: string, params: {}, query: {}) : string;
      makeHref(to: string, params: {}, query: {}) : string;
      transitionTo(to: string, params: {}, query: {}) : void;
      replaceWith(to: string, params: {}, query: {}) : void;
      goBack() : void;
    }
    
    interface NavigationContext {
      getChildContext() : Navigation;
    }
    
    interface RouteHandler {
      getChildContext() : {routeHandlers: RouteHandler[]};
      getRouteDepth() : number;
      getRouteHandler(props: any) : RouteHandler | null;
    }
    
    interface Scrolling {
      statics: {
        recordScrollPosition(path: string) : void;
        getScrollPosition(path: string) : {x: number, y: number} | null;
      };
    }
    
    interface State {
      getPath() : string;
      getRoutes() : Route[];
      getPathname() : string;
      getParams() : {};
      getQuery() : {};
      isActive(to: string, params: {}, query: {}) : boolean;
    }
    
    interface StateContext {
      getCurrentPath() : string;
      getCurrentRoutes() : Route[];
      getCurrentPathname() : string;
      getCurrentParams() : {};
      getCurrentQuery() : {};
      isActive(to: string, params: {}, query: {}) : boolean;
      getChildContext() : StateContext;
    }
  }
  
  module Component {
    interface DefaultRoute extends
      React.ComponentClass<{
        name?: string;
        path?: string;
        handler: Function;
      }>,
      Mixin.FakeNode
    {}
    
    interface Link extends
      React.ComponentClass<{
        activeClassName: string;
        to: string;
        params?: {};
        query?: {};
        onClick?: Function;
      }>
      Mixin.Navigation,
      Mixin.State
    {
      getHref() : string;
      getClassName() : string;
    }
    
    interface NotFoundRoute extends
      React.ComponentClass<{
        name?: string;
        path?: string;
        handler: Function
      }>,
      Mixin.FakeNode
    {}
    
    interface Redirect extends
      React.ComponentClass<{
        path?: string;
        from?: string;
        to?: string;
        handler?: Function;
      }>,
      Mixin.FakeNode
    {}
    
    interface Route extends
      React.ComponentClass<{
        name?: string;
        path?: string;
        handler: Function;
        ignoreScrollBehavior?: boolean;
      }>,
      Mixin.FakeNode
    {}
    
    interface RouteHandler extends
      React.ComponentClass<{
        ref: string;
      }>,
      Mixin.RouteHandler
    {}
  }
  
  module Location {
    interface HashLocation {
      addChangeListener(listener: Function) : void;
      removeChangeListener(listener: Function) : void;
      push(path: string) : void;
      replace(path: string) : void;
      pop() : void;
      getCurrentPath() : void;
    };
    
    interface HistoryLocation {
      addChangeListener(listener: Function) : void;
      removeChangeListener(listener: Function) : void;
      push(path: string) : void;
      replace(path: string) : void;
      pop() : void;
      getCurrentPath() : void;
    };
    
    interface RefreshLocation {
      push(path: string) : void;
      replace(path: string) : void;
      pop() : void;
      getCurrentPath() : void;
    };
  }
  
  module Behavior {
    interface ImitateBrowserBehavior {
      updateScrollPosition(position: {x: number; y: number}, actionType: string) : void;
    }
    
    interface ScrollToTopBehavior {
      updateScrollPosition() : void;
    }
  }
  
  module Util {
    interface Router extends
      React.ComponentClass<{
        children: any;
      }>,
      Mixin.NavigationContext,
      Mixin.StateContext,
      Mixin.Scrolling
    {
      statics: {
        defaultRoute: any;
        notFoundRoute: any;
        
        addRoutes(children: any) : void;
        match(pathname: string) : any;
        dispatch(path: string, action: any, callback: Function) : any;
        run(callback: Function) : void;
        teardown() : void;
      };
      
      getLocation() : any;
      getScrollBehavior() : any;
      getRouteAtDepth(depth: number) : number;
      getRouteComponents() : any;
      getChildContext() : {
        getRouteAtDepth: Function;
        getRouteComponents: Function;
        routeHandlers: any[];
      };
    }
    
    export function createRouter(options: {}) : Router;
    export function runRouter(routes: Component.Route, location: any, callback?: Function) : Router;
    
    interface History {
      export function back() : void;
      export var length: number;
    }
  }
  
  interface Exports {
    // Component
    DefaultRoute: Component.DefaultRoute;
    Link: Component.Link;
    NotFoundRoute: Component.NotFoundRoute;
    Redirect: Component.Redirect;
    Route: Component.Route;
    RouteHandler: Component.RouteHandler;
    
    // Location
    HashLocation: Location.HashLocation;
    HistoryLocation: Location.HistoryLocation;
    RefreshLocation: Location.RefreshLocation;
    
    // Behavior
    ImitateBrowserBehavior: Behavior.ImitateBrowser;
    ScrollToTopBehavior: Behavior.ScrollToTop;
    
    // Mixin
    Navigation: Mixin.Navigation;
    State: Mixin.State;
    
    // Util
    create: Util.createRouter;
    run: Util.runRouter;
    History: Util.History;
  }
}

declare module 'react-router' {
  var exports: ReactRouter.Exports;
  export = exports;
}
