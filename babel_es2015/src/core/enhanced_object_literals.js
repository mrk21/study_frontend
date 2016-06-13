{
  const proto = {
    protoMethod() {
      console.log('protoMethod');
    }
  };
  
  const handler = () => {
    console.log('handler');
  };
  
  const obj = {
    // __proto__
    __proto__: proto,
    
    // Shorthand for `handler: handler`
    handler,
    
    // Methods
    toString() {
     // Super calls
     return "my toString() - " + super.toString();
    },
    
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
  };
  
  obj.protoMethod();
  obj.handler();
  obj.toString();
  console.log(obj.prop_42);
}
