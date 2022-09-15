console.log("calc JS loaded :D");

const calcResult = document.getElementById("result");

console.log(calcResult);

function testAssign(){
    calcResult.innerHTML = "Whatever";
}

// calcResult.innerHTML = "Whatever";

function aMultiply(){
    // var calcResult = 9 * 5;
    console.log ("Nine Times Five Is:" + (9 * 5));
    calcResult.innerHTML = 9 * 5;
}

function aDivide(){
    calcResult.innerHTML = "Stop Asking Me";
}

function aDivide(c, d){
   var result = c / d;
   calcResult.innerHTML = result;
}