console.group('proxies')
console.group('basic')
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

console.group('reflect')
{
  const target = {
    value1: 1
  };
  const handler = {
    get(receiver, name) {
      console.log(receiver, name);
      console.log('Reflect.has(receiver, name)', Reflect.has(receiver, name));
      return Reflect.get(receiver, name);
    }
  };
  const proxy = new Proxy(target, handler);
  console.log(proxy.value1);
  console.log(proxy.value2);
}
console.groupEnd();

console.group('method missing')
{
  const target = {
    method1(value) {
      return value;
    },
    methodMissing(name) {
      return (...args) => {
        console.log(`${name}() is not found`);
        return args;
      };
    }
  };
  const handler = {
    get(receiver, name) {
      console.log(receiver, name);
      if (name in receiver) return receiver[name];
      return receiver.methodMissing(name);
    }
  };
  const proxy = new Proxy(target, handler);
  console.log(proxy.method1(1)); // 1
  console.log(proxy.method2(1,2,3)); // [1,2,3]
}
console.groupEnd();
console.groupEnd();
