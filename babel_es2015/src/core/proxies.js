console.group('proxies')
{
  const target = {
    value1: 1
  };
  const handler = {
    get(receiver, name) {
      console.log(receiver, name);
      if (name in receiver) return receiver[name];
      return 'not found';
    }
  };
  const proxy = new Proxy(target, handler);
  console.log(proxy.value1); // 1
  console.log(proxy.value2); // not found
}
console.groupEnd();
