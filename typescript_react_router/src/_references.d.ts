///<reference path='../typings/bundle.d.ts' />
///<reference path='../node_modules/ts-jsx-loader/react-jsx.d.ts' />

declare module "react-router" {
  interface Context {
    makePath(to: string, params?: {}, query?: {}): string;
    makeHref(to: string, params?: {}, query?: {}): string;
    transitionTo(to: string, params?: {}, query?: {}): void;
    replaceWith(to: string, params?: {}, query?: {}): void;
    goBack(): void;

    getCurrentPath(): string;
    getCurrentRoutes(): Route[];
    getCurrentPathname(): string;
    getCurrentParams(): {};
    getCurrentQuery(): {};
    isActive(to: string, params?: {}, query?: {}): boolean;
  }
}

declare module "react/addons" {
  import ReactRouter = require("react-router");

  // for DefaultRoute
  function createElement(
    type: ReactRouter.DefaultRouteClass,
    props: ReactRouter.DefaultRouteProp,
    ...children: ReactNode[]): ReactRouter.DefaultRoute;

  // for Link
  function createElement(
    type: ReactRouter.LinkClass,
    props: ReactRouter.LinkProp,
    ...children: ReactNode[]): ReactRouter.Link;

  // for NotFoundRoute
  function createElement(
    type: ReactRouter.NotFoundRouteClass,
    props: ReactRouter.NotFoundRouteProp,
    ...children: ReactNode[]): ReactRouter.NotFoundRoute;

  // for Redirect
  function createElement(
    type: ReactRouter.RedirectClass,
    props: ReactRouter.RedirectProp,
    ...children: ReactNode[]): ReactRouter.Redirect;

  // for Route
  function createElement(
    type: ReactRouter.RouteClass,
    props: ReactRouter.RouteProp,
    ...children: ReactNode[]): ReactRouter.Route;

  // for RouteHandler
  function createElement(
    type: ReactRouter.RouteHandlerClass,
    props: ReactRouter.RouteHandlerProp,
    ...children: ReactNode[]): ReactRouter.RouteHandler;
}
