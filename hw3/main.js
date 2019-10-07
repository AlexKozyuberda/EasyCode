// Занятие 4. Слайд 20

{
  // 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
  // Если нет ни одного аргумента, вернуть ноль: multiply() // 0

  function multiply() {
    const argumentsLength = arguments.length;

    if (argumentsLength) {
      let numbermultiply = 1;
      for (let i = 0; i < argumentsLength; i++) {
        let number = arguments[i];
        numbermultiply *= number;
      }
      return numbermultiply;
    }

    return 0;
  }

  console.log(multiply(5, 2, 3));

  // 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”

  function reverseString(string) {
    let i = string.length;
    let stringFlip = "";

    while (i--) {
      stringFlip += string[i];
    }

    return stringFlip;
  }

  console.log(reverseString("test"));

  // 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: getCodeStringFromText(‘hello’) // “104 101 108 108 111”

  function getCodeStringFromText(string) {
    let stringCode = "";

    for (let i = 0; i < string.length; i++) {
      const space = " ";

      if (i === 0) {
        stringCode += string.charCodeAt(i);
      } else {
        stringCode += space + string.charCodeAt(i);
      }
    }

    return stringCode;
  }

  console.log(getCodeStringFromText("hello"));

  // 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

  function guessNumber(num) {
    let minNumber = 1;
    let maxNumber = 10;

    let numberRandom =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    if (typeof num !== "number" || num < 1 || num > 10) {
      return "Введите число от 1-10";
    }

    if (numberRandom <= 10 && numberRandom === num) {
      return `Вы выиграли! Число ${num}`;
    } else {
      return `Вы не угадали ваше число ${num}, а выпало число ${numberRandom}`;
    }
  }

  console.log(guessNumber(5));

  // 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

  function getArray(num) {
    const numberArray = [];

    for (let i = 1; i <= num; i++) {
      numberArray.push(i);
    }
    return numberArray;
  }

  console.log(getArray(10));

  // 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива: doubleArray([1,2,3]) // [1,2,3,1,2,3]

  function doubleArray(array) {
    return array.concat(array);
  }

  console.log(doubleArray([1, 2, 3]));

  // 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д

  function changeCollection() {
    const argumentsArray = arguments;
    const argumentsLength = argumentsArray.length;

    for (let i = 0; i < argumentsLength; i++) {
      let numberArray = argumentsArray[i];

      numberArray = numberArray.shift();
    }

    return argumentsArray;
  }

  console.log(changeCollection([1, 2, 3], ["a", "b", "c"]));

  // 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
  // funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

  const users = [
    { name: "Denis", age: 29, gender: "male" },
    { name: "Alyona", age: 28, gender: "female" },
    { name: "Ivan", age: 25, gender: "male" },
    { name: "Kate", age: 20, gender: "female" }
  ];

  // const getUserGender = users.filter(item => item.gender === "male");
  // console.log(getUserGender);

  function funcGetUsers(usersArray, gender, male) {
    const users = [];
    for (let i = 0; i < usersArray.length; i++) {
      if (usersArray[i][gender] && usersArray[i][gender] === male) {
        users.push(usersArray[i]);
      }
    }
    return users;
  }

  console.log(funcGetUsers(users, "gender", "male"));
}

// Дополнительные задания

{
  // 9. Исходный массив [-2, 3, 4, -5, -6, 2, 4, -56]. Найдите количество отрицательных и положительных элементов

  function amountPositiveNegativeNum(arrayNumbers) {
    let negativeNumbers = 0;
    let positiveNumbers = 0;

    for (let i = 0; i < arrayNumbers.length; i++) {
      negativeNumbers = negativeNumbers;
      positiveNumbers = positiveNumbers;

      if (arrayNumbers[i] < 0 && arrayNumbers[i] !== 0) {
        negativeNumbers += 1;
      } else if (arrayNumbers[i] > 0 && arrayNumbers[i] !== 0) {
        positiveNumbers += 1;
      }
    }

    return `Отрицательных - ${negativeNumbers}, положительных - ${positiveNumbers}`;
  }

  console.log(
    amountPositiveNegativeNum([-2, 3, 4, -5, -6, 2, 0, 4, -56, 2, 4, 0])
  );

  // 10. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности: [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

  function getParityOfNumber(numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] % 2) {
        numberArray[i] = {
          digit: numberArray[i],
          odd: false
        };
      } else {
        numberArray[i] = {
          digit: numberArray[i],
          odd: true
        };
      }
    }

    return numberArray;
  }

  console.log(getParityOfNumber([1, 2, 3, 5, 8, 9, 10]));
}
