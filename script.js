const operatorMap = {
    add: "+",
    sub: "-",
    mult: "*",
    div: "/"
  };
  
  let operator = prompt('Введіть операцію (add, sub, mult, div)');
  let num1 = Number(prompt('Введіть перше число'));
  let num2 = Number(prompt('Введіть друге число'));
  
  let answer;
  if (operator === 'add') {
    answer = num1 + num2;
  } else if (operator === 'sub') {
    answer = num1 - num2;
  } else if (operator === 'mult') {
    answer = num1 * num2;
  } else if (operator === 'div') {
    answer = num1 / num2;
  }
  
  const result = `${num1} ${operatorMap[operator]} ${num2} = ${answer}`;
  console.log(result);
  
  
