// Занятие 2. Слайд 8

{
  // 1. Создать объект с полем product, равным ‘iphone’

  const phone = {
    product: "iphone"
  };

  // 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

  phone.price = 1000;
  phone.currency = "dollar";

  // 3. Добавить поле details, которое будет содержать объект с полями model и color

  phone.details = {};
  phone.details.model = "";
  phone.details.color = "";

  console.log(phone);
}

// Занятие 3. Слайд 4

{
  // 1. Записать в виде switch case следующее условие:
  //  if (a === ‘block’) {
  //    console.log(‘block’)
  //  } else if (a === ‘none’) {
  //    console.log(‘none’)
  //  } else if (a === ‘inline’) {
  //    console.log(‘inline’)
  //  } else {
  //    console.log(‘other’)
  //  }
  // Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

  const display = "inline";

  switch (display) {
    case "block":
      console.log("block");
      break;
    case "none":
      console.log("none");
      break;
    case "inline":
      console.log("inline");
      break;
    default:
      console.log("other");
  }

  // 2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.
  //  1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

  let visibility = "visible";

  visibility = visibility === "hidden" ? "visible" : "hidden";

  console.log(visibility);

  //  2. Используя if, записать условие:
  //    a. если переменная равна нулю, присвоить ей 1;
  //    b. если меньше нуля - строку “less then zero”;
  //    c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

  let num = 0;

  num = num === 0 ? 1 : num < 0 ? "less then zero" : (num *= 10);

  console.log(num);

  //  3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

  let car = {
    name: "Lexus",
    age: 10,
    create: 2008,
    needRepair: false
  };

  car.age > 5
    ? (console.log("Need Repair"), (car.needRepair = true))
    : (car.needRepair = false);

  console.log(car);
}

// Занятие 3. Слайд 10

{
  // 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

  // const stringOne = "i am in the easycode";
  // const stringOneArray = stringOne.split(" ");
  // const stringOneUppercase = [];

  // for (let i = 0; i < stringOneArray.length; i++) {
  //   let stringArrayWord = stringOneArray[i];

  //   stringArrayWord =
  //     stringArrayWord[0].toUpperCase() + stringArrayWord.slice(1);

  //   stringOneUppercase.push(stringArrayWord);
  // }
  // console.log(stringOneUppercase.join(" "));

  const stringOne = "i am in the easycode";
  const stringOneArray = stringOne.split(" ");

  for (let i = 0; i < stringOneArray.length; i++) {
    let stringArrayWord = stringOneArray[i];

    stringArrayWord =
      stringArrayWord[0].toUpperCase() + stringArrayWord.slice(1);

    stringOneArray[i] = stringArrayWord;
  }

  console.log(stringOneArray.join(" "));

  //  2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

  const stringBackward = "tseb eht ma i";
  let i = stringBackward.length;
  let stringFlip = "";

  while (i--) {
    stringFlip += stringBackward[i];
  }

  console.log(stringFlip);

  // 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

  let factorialNumbers = 10;
  let factorialNumbersResult = 1;

  for (let i = factorialNumbersResult; i <= factorialNumbers; i++) {
    factorialNumbersResult *= i;
  }
  console.log(factorialNumbersResult);

  // 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

  // const stringTwo = "JavaScript is a pretty good language";
  // const stringTwoArray = stringTwo.split(" ");
  // const stringTwoUppercase = [];

  // for (let i = 0; i < stringTwoArray.length; i++) {
  //   let stringArrayWord = stringTwoArray[i];

  //   stringArrayWord =
  //     stringArrayWord[0].toUpperCase() + stringArrayWord.slice(1);

  //   stringTwoUppercase.push(stringArrayWord);
  // }
  // console.log(stringTwoUppercase.join(""));

  const stringTwo = "JavaScript is a pretty good language";
  const stringTwoArray = stringTwo.split(" ");

  for (let i = 0; i < stringTwoArray.length; i++) {
    let stringArrayWord = stringTwoArray[i];

    stringArrayWord =
      stringArrayWord[0].toUpperCase() + stringArrayWord.slice(1);

    stringTwoArray[i] = stringArrayWord;
  }

  console.log(stringTwoArray.join(""));

  // 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  for (let value of numberArray) {
    if (value % 2) {
      console.log(value);
    }
  }

  // 6. Дан объект:
  //  let list = {
  //    name: ‘denis’,
  //    work: ‘easycode’,
  //    age: 29
  //  }

  // Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

  let list = {
    name: "denis",
    work: "easycode",
    age: 29
  };

  for (let key in list) {
    if (typeof list[key] === "string") {
      list[key] = list[key].toUpperCase();
    } else {
      list[key];
    }
  }
  console.log(list);
}
