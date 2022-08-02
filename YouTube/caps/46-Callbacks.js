function cuadradoCallback(value,callback){
  setTimeout(() => {
    callback(value, value*value);
  }, 0|Math.random()*100);
}

