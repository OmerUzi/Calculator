const add = function(a,b) {
    return a+b;
      
  };
  
  const subtract = function(a,b) {
    return a-b;
      
  };
  
  
  const multiply = function(a,b) {
    return a*b;  
  };
  
  
  const divide = function(a,b) {
    return a/b;
      
  };
  
  function operate(a,b,operator){
      if(operator == "+") return add(a,b);
      else if(operator == "-") return subtract(a,b);
      else if(operator == "/") return divide(a,b);
      else if(operator=="*") return multiply(a,b);

      return "error";
   }

  function buttonclick(e){
    console.log(e)
  }

let buttons = document.querySelectorAll("button");
buttons = Array.from(buttons);
buttons.forEach(button => {
    button.addEventListener("click", buttonclick)
    
});