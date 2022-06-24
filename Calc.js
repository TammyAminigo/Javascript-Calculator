const num1 = parseFloat (prompt("Enter number1:"));
const num2 = parseFloat (prompt("Enter number2:"));
//read operator
const operator = prompt("Enter operator (+, -, /, *)");
if(isNaN(num1) || isNaN(num2)){
  alert("wrong input! Provide correct data");
}else{

  if(operator == '+'){
    result = num1 + num2;
  }else if (operator == '-'){
    result = num1 - num2;
  }else if (operator == '*'){
    result = num1 * num2;
  }else if (operator == '/'){
    result = num1 / num2
 }
document.write(num1 + operator + num2 +'=' + result);
}