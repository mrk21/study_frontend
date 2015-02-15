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
