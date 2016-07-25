function receivesAFunction(functionName){
  functionName();
}

function returnsANamedFunction(){
  return function namedFunction(){};
}

function returnsAnAnonymousFunction(){
  return function (){};
}
