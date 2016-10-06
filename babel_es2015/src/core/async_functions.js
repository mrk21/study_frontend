/* HACK: @see https://github.com/babel/babel-eslint/issues/316#issuecomment-233173916 */
/* eslint generator-star-spacing: 0 */

console.group('ES-next: Stage-4: Async Functions');
{
  function delayedJob(prefix, n) {
    return new Promise(resolve => setTimeout(() => {
      console.log(`Async Functions value: ${prefix} - ${n}`);
      resolve();
    }, 1000));
  }
  async function asyncFunc() {
    for (const v of [1, 2, 3]) {
      await delayedJob('asyncFunc', v);
    }
  }
  asyncFunc();

  async function asyncFunc2() {
    await Promise.all([1, 2, 3].map(delayedJob.bind(null, 'asyncFunc2')));
  }
  asyncFunc2();

  const obj = {
    async asyncFunc3() {
      for (const v of [1, 2, 3]) {
        await delayedJob('asyncFunc3', v);
      }
    },
    async [`${'asyncFunc4'}`]() {
      for (const v of [1, 2, 3]) {
        await delayedJob('asyncFunc4', v);
      }
    },
  };
  obj.asyncFunc3();
  obj.asyncFunc4();

  const asyncFunc5 = async () => {
    for (const v of [1, 2, 3]) {
      await delayedJob('asyncFunc5', v);
    }
  };
  asyncFunc5();
}
console.groupEnd();
