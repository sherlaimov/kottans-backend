function curryN(fn, n) {
  const arity = n || fn.length;

  return function nestToArity(...params) {
    return params.length < arity ? (...rest) => nestToArity(...params, ...rest) : fn(...params);
  };
}

module.exports = curryN;

/* Bsic Currying

   function curryN(fn, n) {
      n = n || fn.length
      return function curriedN(arg) {
        if (n <= 1) return fn(arg)
        return curryN(fn.bind(this, arg), n - 1)
      }
    }
    

    function curry3(fun){
      return function(one){
        return function(two){
          return function (three){
            return fun(one, two, three)
          }
        }
      }
    }

*/
