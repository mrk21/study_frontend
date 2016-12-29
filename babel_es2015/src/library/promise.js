export default function promise() {
  console.group('Promise');
  {
    console.group('ES-next: Stage-2: Promise.prototype.finally');
    {
      // NOTICE: This code is not supported to babel-plugin-transform-runtime
      console.warn('This code is not supported to babel-plugin-transform-runtime');
      console.warn(`
      Promise.resolve(2).finally(v => console.log('Promise.resolve(2).finally()', v));
      Promise.reject(3).finally(v => console.log('Promise.reject(3).finally()', v));
      `);
    }
    console.groupEnd();
  }
  console.groupEnd();
}
