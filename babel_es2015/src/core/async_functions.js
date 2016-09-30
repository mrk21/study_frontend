/* eslint generator-star-spacing: 0 */

console.group('ES-next: Stage-4: Async Functions');
{
  function delayedJob(n) {
    return Promise.new(resolve => setTimeout(() => {
      console.log(`Async Functions value: ${n}`);
      resolve();
    }), 1000);
  }
  async function asyncFunc() {
    for (const v of [1, 2, 3]) {
      await delayedJob(v);
    }
  }
  asyncFunc();
}
console.groupEnd();
