/* HACK: @see https://github.com/babel/babel-eslint/issues/316#issuecomment-233173916 */
/* eslint generator-star-spacing: 0 */

console.group('ES-next: Stage-4: Async Functions');
{
  function delayedJob(n) {
    return new Promise(resolve => setTimeout(() => {
      console.log(`Async Functions value: ${n}`);
      resolve();
    }, 1000));
  }
  async function asyncFunc() {
    for (const v of [1, 2, 3]) {
      await delayedJob(v);
    }
  }
  asyncFunc();

  async function asyncFunc2() {
    await Promise.all([1, 2, 3].map(delayedJob));
  }
  asyncFunc2();
}
console.groupEnd();
