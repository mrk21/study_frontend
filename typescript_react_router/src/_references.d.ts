///<reference path='../typings/bundle.d.ts' />

declare module __React {
    function jsx(jsx?: string): __React.ReactElement<any>;
    function __spread(...args: any[]): any; // for JSX Spread Attributes
}
