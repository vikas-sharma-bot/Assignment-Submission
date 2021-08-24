//In JavaScript, we can get user input like this:
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');

// accept the number from the user through prompt box  
const a = parseFloat(prompt('Enter the first number: '));
const b = parseFloat(prompt('Enter the second number: '));

//For assigning values we do like this:
sum = a+b
diff = a-b
mul = a*b
div = a/b

let result; // declaration of the variable.  

// use if, elseif and else keyword to define the calculator condition in JavaScript.  
if (operator == '+') { // use + (addition) operator to add two numbers  
    result = a + b;
}
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
    result = a - b;
}
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
    result = a * b;
}
else {
    result = a / b; // use / (division) operator to divide two numbers
}

// display the result of the Calculator  
window.alert(" Result is" + result);
