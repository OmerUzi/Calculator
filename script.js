const add = function(a,b) {
    return parseInt(a)+parseInt(b);
      
  };
  
  const subtract = function(a,b) {
    return parseInt(a)-parseInt(b);
      
  };
  
  
  const multiply = function(a,b) {
    return parseInt(a)*parseInt(b);  
  };
  
  
  const divide = function(a,b) {
    return parseInt(a)/parseInt(b);
      
  };
  
  function operate(a,b,operator){
      if(operator == "+") return add(a,b);
      else if(operator == "-") return subtract(a,b);
      else if(operator == "/") return divide(a,b);
      else if(operator=="*") return multiply(a,b);

      return "error";
   }

  function operateButtonsclick(e){
      if (countOperator == 0) {
          screen.innerText += e.target.innerText;
          countOperator++
      }
      else alert("only one oprator");
  }
  
  function numberButtonsclick(e){
    screen.innerText += e.target.innerText;
  }


const screen = document.querySelector("#screen");

let operateButtons = document.querySelectorAll("button.OperateClass");
operateButtons = Array.from(operateButtons);
operateButtons.forEach(button => {
    button.addEventListener("click", operateButtonsclick);
});

let numberButtons = document.querySelectorAll("button.NumClass");
numberButtons = Array.from(numberButtons);
numberButtons.forEach(button => {
    button.addEventListener("click", numberButtonsclick)
});

const clbtn = document.querySelector("#clearbt");
clbtn.addEventListener("click", () => {
    screen.innerText = ""
    countOperator = 0;
});

const equalbtn = document.querySelector("#equal")
equalbtn.addEventListener("click", () => {
    let text = screen.innerText;
    let result;
    for(let i = 0; i<text.length; i++){
        if(text.substr(i,1)== "+") result = add(text.slice(0,i),text.slice(i+1))
        else if(text.substr(i,1)== "-") result = subtract(text.slice(0,i),text.slice(i+1))
        else if(text.substr(i,1)== "x") result = multiply(text.slice(0,i),text.slice(i+1))
        else if(text.substr(i,1)== ":") result = divide(text.slice(0,i),text.slice(i+1))
    }
    countOperator = 0;
    screen.innerText = result;

});

let countOperator = 0;





