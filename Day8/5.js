// Named Function
function namedFun(p1) {
   console.log(`Named Function`+p1);
}
namedFunDemo(15);

// Overloaded Named Function
function namedFunDemo(p1, p2) {
    console.log("Overloaded Named Function: " + p1 + ", " + p2);
  }
  namedFunDemo(20, 30)
  // Named Function with Default Value
function namedFunDemoWithDefault(p1 = 0) {
    console.log("Named Function with Default Value: " + p1);
  }
  namedFunDemoWithDefault(); 

