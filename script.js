console.log('hello');


//----------------------------------------------Arrow function (IIFE)-----------------------------------------------
let counter = (() => {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function() {
        changeBy(1);
      },

      reset: function(){
        privateCounter = 0;
      },

      value: function() {
        return privateCounter;
      }
    };
  })();

  setInterval(() => { 
    if (counter.value() >= 10){
         // console.log('reset');  
          counter.reset();
    }     
    counter.increment();
   // console.log(counter.value());
  }, 1000)


//----------------------------------------------Arrow function (Non-IIFE)-----------------------------------------------
  var makeCounter = () => {
    let privateCounter = 10;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
  
      reset: function(){
        privateCounter = 10;
      },
  
      value: function() {
        return privateCounter;
      }
    }
  };

  var counter1 = makeCounter();

  setInterval(() => { 
    if (counter1.value() >= 20){
         // console.log('reset');  
          counter1.reset();
    }     
    counter1.increment();
   //console.log(counter1.value());  
  }, 1000)
  
//----------------------------------------------Traditional function-----------------------------------------------
  function myTraditionalCounter(){
    let privateCounter = 20;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
  
      reset: function(){
        privateCounter = 20;
      },
  
      value: function() {
        return privateCounter;
      }
    }
  }

  let counter2 = myTraditionalCounter();

  setInterval(() => { 
    if (counter2.value() >= 30){
         // console.log('reset');  
          counter2.reset();
    }     
    counter2.increment();
   // console.log(counter2.value());  
  }, 1000)
  

window.onload = (e) => {

    console.log(e);



};

 function dummyFunction(){

    return 7;

}