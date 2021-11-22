
  var expression = "";
  var clearNumber = "";
  var resultNumber = "";
  var operate = "";
  var operators = [];
  var userInputs = [];
  var oper = "";
  var counter = 0;
  // var equalCounter = 0;
  
  function one(){
    expression = expression + 1;
    clearNumber = clearNumber + 1;
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    document.querySelector(".textStyle").innerHTML = clearNumber;
    counter = counter + 1;
  }

  function two(){
    expression = expression + 2;
    clearNumber = clearNumber + 2;
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    document.querySelector(".textStyle").innerHTML = clearNumber;
    counter = counter + 1;
  }

  function three(){
    expression = expression + 3;
    clearNumber = clearNumber + 3;
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    document.querySelector(".textStyle").innerHTML = clearNumber;
    counter = counter + 1;
  }

  function four(){
    expression = expression + 4;
    clearNumber = clearNumber + 4;
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    document.querySelector(".textStyle").innerHTML = clearNumber;
    counter = counter + 1;
  }

  function five(){
    expression = expression + 5;
    clearNumber = clearNumber + 5;
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    document.querySelector(".textStyle").innerHTML = clearNumber;
    counter = counter + 1;
  }

  function six(){
    expression = expression + 6;
    clearNumber = clearNumber + 6;
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    document.querySelector(".textStyle").innerHTML = clearNumber;
    counter = counter + 1;
  }

  function seven(){
    expression = expression + 7;
    clearNumber = clearNumber + 7;
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    document.querySelector(".textStyle").innerHTML = clearNumber;
    counter = counter + 1;
  }

  function eight(){
    expression = expression + 8;
    clearNumber = clearNumber + 8;
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    document.querySelector(".textStyle").innerHTML = clearNumber;
    counter = counter + 1;
  }

  function nine(){
    expression = expression + 9;
    clearNumber = clearNumber + 9;
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    document.querySelector(".textStyle").innerHTML = clearNumber;
    counter = counter + 1;
  }

  function zero(){
    expression = expression + 0;
    clearNumber = clearNumber + 0;
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    document.querySelector(".textStyle").innerHTML = clearNumber;
    counter = counter + 1;
  }

  // document.querySelector(".textStyle").innerHTML = clearNumber;

  function allClear(){
    expression = "";
    clearNumber = "";
    userInputs = [];
    operators = [];
    counter = 0;
    // var count = 0;
    console.log(userInputs);
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    document.querySelector(".textStyle").innerHTML = expression;
  }

  function plus(){
    if(counter > 0){
      expression = expression + "+";
      userInputs.push(Number(clearNumber));
      console.log(userInputs);
      clearNumber = "";
      oper = "+";
      operators.push("+");
      console.log(operators);
    
      if (operators.length>1){
        if (operators[0] === "+"){
            let x = userInputs[0] + userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        } else if(operators[0] === "-"){
            let x = userInputs[0] - userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        } else if(operators[0] === "*"){
            let x = userInputs[0] * userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        }
        else {
            let x = userInputs[0] / userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        }
        operators = [];
        operators.push("+");
      }

      document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
      document.querySelector(".textStyle").innerHTML = userInputs[0];
      } else {
        document.querySelector(".textStyle").innerHTML = "NaN";
      }
  }

  function minus(){
    if(counter > 0){
      expression = expression + "-";
      userInputs.push(Number(clearNumber));
      console.log(userInputs);
      clearNumber = "";
      oper = "-";
      operators.push("-");
      console.log(operators);

      if (operators.length>1){
        if (operators[0] === "+"){
            let x = userInputs[0] + userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        } else if(operators[0] === "-"){
            let x = userInputs[0] - userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        } else if(operators[0] === "*"){
            let x = userInputs[0] * userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        }
        else {
            let x = userInputs[0] / userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        }
        operators = [];
        operators.push("-");
      }

      document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
      document.querySelector(".textStyle").innerHTML = userInputs[0];
    } else {
      document.querySelector(".textStyle").innerHTML = "NaN";
    }
  }

  function multi(){
    if(counter > 0){
      expression = expression + "*";
      userInputs.push(Number(clearNumber));
      console.log(userInputs);
      clearNumber = "";
      oper = "*";
      operators.push("*");
      console.log(operators);

      if (operators.length>1){
        if (operators[0] === "+"){
            let x = userInputs[0] + userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        } else if(operators[0] === "-"){
            let x = userInputs[0] - userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        } else if(operators[0] === "*"){
            let x = userInputs[0] * userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        }
        else {
            let x = userInputs[0] / userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        }
        operators = [];
        operators.push("*");
      }

      document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    } else {
      document.querySelector(".textStyle").innerHTML = "NaN";
    }
  }

  function divi(){
    if(counter > 0){
      expression = expression + "/";
      userInputs.push(Number(clearNumber));
      console.log(userInputs);
      clearNumber = "";
      oper = "/";
      operators.push("/");
      console.log(operators);

      if (operators.length>1){
        if (operators[0] === "+"){
            let x = userInputs[0] + userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        } else if(operators[0] === "-"){
            let x = userInputs[0] - userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        } else if(operators[0] === "*"){
            let x = userInputs[0] * userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        }
        else {
            let x = userInputs[0] / userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
        }
        operators = [];
        operators.push("/");
      }

      document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    } else {
      document.querySelector(".textStyle").innerHTML = "NaN";
    }
  }

  function result(){
    if (counter == 0 & userInputs.length<1){
      console.log("counter = 0");
      document.querySelector(".textStyle").innerHTML = "too philosophical";
    } else if(counter > 0){
      userInputs.push(Number(clearNumber));
      console.log(userInputs);
      document.querySelector(".textStyle").innerHTML = clearNumber;
      clearNumber = "";
      if (userInputs.length>1){
        if (operators[0] === "+"){
            let x = userInputs[0] + userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
          } else if(operators[0] === "-"){
            let x = userInputs[0] - userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
          } else if(operators[0] === "*"){
            let x = userInputs[0]*userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
          } else {
            let x = userInputs[0]/userInputs[1];
            userInputs = [];
            userInputs.push(x);
            console.log(userInputs);
          }
          equalCounter = 1;
          clearNumber = userInputs[0];
          userInputs = [];
          console.log(clearNumber);
          document.querySelector(".descrStyle").innerHTML = expression  + "&nbsp&nbsp&nbsp=";
          document.querySelector(".textStyle").innerHTML = clearNumber;
      }
      // counter = 0;
      
    }
      
      

    // } else {
      // userInputs = userInputs.push(Number(clearNumber));
      // console.log("counter");
      // document.querySelector(".textStyle").innerHTML = userInputs;
    // }
  }



 function del(){
  var count = 0;
  console.log(count);
  userInputs.push(Number(clearNumber));
  delNumber = Number(clearNumber);
  console.log(delNumber);
  let lastNumberToString = delNumber.toString();
  let textNumber = lastNumberToString.split("");
  textNumber.pop();
  noCommas = textNumber.join("");
  delNumber = Number(noCommas);
  userInputs.push(Number(delNumber));
  console.log(delNumber);
  document.querySelector(".textStyle").innerHTML = delNumber;
  btn.onclick = function () {
    count = count + 1;
    console.log("count",count);
    // document.querySelector(".textStyle").innerHTML = count;
    // delNumber = Number(clearNumber);
    // var lastNumberToString = delNumber.toString();
    // var textNumber = lastNumberToString.split("");
    textNumber.pop();
    let noCommas = textNumber.join("");
    delNumber = Number(noCommas);
    userInputs.push(Number(delNumber));
    console.log(delNumber);
    document.querySelector(".textStyle").innerHTML = delNumber;
    // count=0;
  }
  // count=0;
  // console.log(count);



  // userInputs.push(Number(clearNumber));
  // console.log("userInputs", userInputs); 
  // let lastNumber = userInputs.slice(-1);
  // console.log("lastNumber", lastNumber); 
  // userInputs.pop();
  
  // userInputs.pop();
  // console.log(userInputs); 
  // let textNumber = lastNumber.toString()
  // let textNumberArray = textNumber.split("");
  // textNumberArray.pop();
  // let noCommas = textNumberArray.join("");
  // console.log(noCommas);
  // expression = noCommas.toString();
  // lastNumber.push(Number(noCommas));
  // console.log(lastNumber);
  // document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
}





























// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  function dot(){
    expression = expression + ".";
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
    
  }

  function modulus(){
    expression = expression + "%" + "&nbsp&nbsp;";
    userInputs.push(Number(clearNumber));
    clearNumber = "";
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
  }
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 



  function sqroot(){
    expression = expression + "&#8730 ";
    document.querySelector(".descrStyle").innerHTML = expression + "&nbsp&nbsp&nbsp=";
  }



  

  
  
  
