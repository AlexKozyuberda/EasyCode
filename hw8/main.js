// Занятие 10. Слайды 10-12

// 1. Создайте функцию которая бы умела делать:
//    minus(10)(6); // 4
//    minus(5)(6); // -1
//    minus(10)(); // 10
//    minus()(6); // -6
//    minus()(); // 0

console.log("----Задание 1----");

function subtraction(firstArgument) {
  firstArgument = firstArgument || 0;

  return function(secondArgument) {
    secondArgument = secondArgument || 0;
    return firstArgument - secondArgument;
  };
}

console.log(subtraction(10)(6));
console.log(subtraction(5)(6));
console.log(subtraction(10)());
console.log(subtraction()(6));
console.log(subtraction()());

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

console.log("----Задание 2----");

function multiplyMaker(firstArgument) {
  let value = firstArgument;

  return function(secondArgument) {
    return (value *= secondArgument);
  };
}

const multiply = multiplyMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

// 3. Реализовать модуль, который работает со строкой и имеет методы:
//   a. установить строку
//     i. если передано пустое значение, то установить пустую строку
//     ii. если передано число, число привести к строке
//   b. получить строку
//     c. получить длину строки
//     d. получить строку-перевертыш
// Пример:
//   модуль.установитьСтроку(‘abcde’);
//   модуль.получитьСтроку(); // ‘abcde’
//   модуль.получитьДлину(); // 5

console.log("----Задание 3----");

const stringAction = (function() {
  let string = "";

  function setString(value) {
    string = String(value);
  }

  function getString() {
    return string;
  }

  function getStringReverse() {
    return string
      .split("")
      .reverse()
      .join("");
  }

  return {
    setString: setString,
    getString: getString,
    getStringReverse: getStringReverse
  };
})();

stringAction.setString("JavaScript");
console.log(stringAction.getString());
console.log(stringAction.getStringReverse());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и  возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно  храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой:
//   модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

console.log("----Задание 4----");

const calculator = (function() {
  let value = 0;

  function setValue(number) {
    value = number;
    return this;
  }

  function getPlus(number) {
    value += number;
    return this;
  }

  function getMultiply(number) {
    value *= number;
    return this;
  }

  function getResult() {
    return Math.round(value);
  }

  return {
    setValue: setValue,
    getPlus: getPlus,
    getMultiply: getMultiply,
    getResult: getResult
  };
})();

console.log(
  calculator
    .setValue(10)
    .getPlus(0.269)
    .getMultiply(2)
    .getResult()
);
