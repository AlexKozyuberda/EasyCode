// Занятие 1. Слайд 10

{
  let string = "some test string";

  // 1. Получить первую и последнюю буквы строки

  console.log(string[0], string[string.length - 1]);

  // 2. Сделать первую и последнюю буквы в верхнем регистре

  console.log(
    string[0].toUpperCase() +
      string.slice(1, -1) +
      string[string.length - 1].toUpperCase()
  );

  // 3. Найти положение слова ‘string’ в строке

  console.log(string.indexOf("string"));

  // 4. Найти положение второго пробела (“вручную" ничего не считать)

  console.log(string.indexOf(" ", [string.indexOf(" ") + 1]));

  // 5. Получить строку с 5-го символа длиной 4 буквы

  console.log(string.substr(5, 4));

  // 6. Получить строку с 5-го по 9-й символы

  console.log(string.substring(5, 9));

  //   7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

  let newString = string.slice(0, -6);

  console.log(newString);

  // 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016"

  let a = 20;
  let b = 16;

  // string = a.toString() + b.toString();
  string = a + "" + b;

  console.log(string);
}

// Занятие 1. Слайд 13

{
  // 1. Получить число pi из Math и округлить его до 2-х знаков после точки

  let PI = Math.PI;

  // PI = Math.floor(PI * 100) / 100;
  PI = +PI.toFixed(2);

  console.log(PI);

  // 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

  numberMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
  numberMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

  console.log(numberMin, numberMax);

  // 3. Работа с Math.random:
  //  a. Получить случайное число и округлить его до двух цифр после запятой
  //  b. Получить случайное целое число от 0 до X. X - любое произвольное число.

  let numberRandom = Math.random().toFixed(2);
  let numberRandomInteger = Math.round(Math.random() * 10);

  console.log(numberRandom, numberRandomInteger);

  // 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

  let resultCalc;

  // resultCalc = (0.6 * 10 + 0.7 * 10) / 10;
  resultCalc = +(0.6 + 0.7).toFixed(1);

  console.log(resultCalc);

  // 5. Получить число из строки ‘100$’

  let price = "100$";

  price = parseInt(price);
  price = parseFloat(price);

  console.log(price);
}

// Занятие 2. Слайд 12

{
  // Чему равно а, почему?

  let a = 0 || "string"; // ‘string’; 0 - false, ‘string’ - true
  let b = 1 && "string"; // 'string'; 1 - true, 'string' - true
  let c = null || 25; // 25; null = 0 -> false, 25 - true
  let d = null && 25; // null; null = 0 -> false, 25 = true
  let e = null || 0 || 35; // 35; null = 0 -> false, 0 = false, 35 = true
  let f = null && 0 && 35; // null; null = 0 -> false, 0 = false, 35 = true - вернет превый false

  // Что отобразится в консоли. Почему?

  12 + 14 + "12"; // '2612'; (12+14) = 26 -> конкатенация cо строкой '12'
  3 + 2 - "1"; // 4;  при вычитании '1' преобразуется в число
  "3" + 2 - 1; // '31' конкатенация '3' + 2 = '32', при вычитании строка преобразуется в число '32' - 1 = 31
  true + 2 // 3; true = 1
  + "10" + 1; // 11; +'10' -> преобразуется в число
  undefined + 2; // NaN; undefined = NaN
  null + 5; // 5; null = 0
  true + undefined; // NaN;  true = 1, undefined = NaN
}

// Занятие 2. Слайд 16,17

{
  // 1. Если переменная равна “hidden", присвоить ей значение “visible", иначе - “hidden".

  let visibility = "hidden";

  if (visibility === "hidden") {
    visibility = "visible";
  } else {
    visibility = "hidden";
  }
  console.log(visibility);

  // 2. Используя if, записать условие:
  //  a. если переменная равна нулю, присвоить ей 1;
  //  b. если меньше нуля - строку “less then zero";
  //  c. если больше нуля - используя оператор “присвоение", переменную умножить на 10 (использовать краткую запись).

  let num = 1;

  if (num === 0) {
    num = 1;
  } else if (num < 0) {
    console.log("less then zero");
  } else {
    num *= 10;
  }
  console.log(num);

  // 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
  // Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

  let car = {
    name: "Lexus",
    age: 10,
    create: 2008,
    needRepair: false
  };

  if (car.age > 5) {
    console.log("Need Repair");
    car.needRepair = true;
  } else {
    car.needRepair = false;
  }

  console.log(car);

  // 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
  // Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

  let item = {
    name: "Intel core i7",
    price: "100$",
    discount: "15%"
  };

  let amountDiscount =
    (parseFloat(item.discount) / 100) * parseFloat(item.price);

  if (item.discount && item.discount !== null) {
    item.priceWithDiscount = parseFloat(item.price) - amountDiscount + "$";
    console.log(item.priceWithDiscount);
  } else {
    console.log(item.price);
  }

  // 5. Дан следующий код:
  //    let product = {
  //      name: “Яблоко",
  //      price: “10$"
  //     };
  // let min = 10; // минимальная цена
  // let max = 20; // максимальная цена
  // Написать условие если (цена товара больше или равна минимальной цене) и (меньше или равна максимальной цене) то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

  let product = {
    name: "Яблоко",
    price: "10$"
  };

  let min = 10;
  let max = 20;

  let productPrice = parseFloat(product.price);

  if (productPrice >= min && productPrice <= max) {
    console.log(product.name);
  } else {
    console.log("Товаров не найдено");
  }
}
