// Занятие 5, Слайд 7

{
  // 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности: [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

  const arrayNumber = [1, 2, 3, 5, 8, 9, 10];

  function parityOfNumberFunction(array) {
    const parityOfNumber = array.map(element => {
      if (element % 2) {
        return { digit: element, odd: false };
      } else {
        return { digit: element, odd: true };
      }
    });
    return parityOfNumber;
  }

  console.log(parityOfNumberFunction(arrayNumber));

  // 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

  const arrayZero = [12, 4, 50, 1, 6, 18, 0];

  function arrayEqualsZeroFunction(array) {
    return array.every(element => {
      return element === 0 ? false : true;
    });
  }

  console.log(arrayEqualsZeroFunction(arrayZero));

  // 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

  const arrayString = ["yes", "hello", "no", "easycode", "what"];

  function getArrayString(array) {
    return array.some(element => {
      return element.length === 3;
    });
  }

  console.log(getArrayString(arrayString));

  // 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

  // [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
  // {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
  // {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
  // Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например: [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

  const arrayLetters = [
    { char: "a", index: 12 },
    { char: "w", index: 8 },
    { char: "Y", index: 10 },
    { char: "p", index: 3 },
    { char: "p", index: 2 },
    { char: "N", index: 6 },
    { char: " ", index: 5 },
    { char: "y", index: 4 },
    { char: "r", index: 13 },
    { char: "H", index: 0 },
    { char: "e", index: 11 },
    { char: "a", index: 1 },
    { char: " ", index: 9 },
    { char: "!", index: 14 },
    { char: "e", index: 7 }
  ];

  function sentence(array) {
    return array
      .sort((element1, element2) => {
        return element1.index - element2.index;
      })
      .reduce((acc, currentValue) => {
        return acc + currentValue.char;
      }, "");
  }

  console.log(sentence(arrayLetters));
}

// Занятие 5, Слайд 10, 11

{
  // 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd']]

  const arrayOfArrays = [[14, 45], [1], ["a", "c", "d"]];

  function sort(array) {
    return array.sort((element1, element2) => {
      return element1.length - element2.length;
    });
  }

  console.log(sort(arrayOfArrays));

  // 2. Есть массив объектов:
  // [
  //   {cpu: 'intel', info: {cores:2, сache: 3}},
  //   {cpu: 'intel', info: {cores:4, сache: 4}},
  //   {cpu: 'amd', info: {cores:1, сache: 1}},
  //   {cpu: 'intel', info: {cores:3, сache: 2}},
  //   {cpu: 'amd', info: {cores:4, сache: 2}}
  // ]
  // Отсортировать их по возрастающему количеству ядер (cores)

  const arrayCPU = [
    {
      cpu: "intel",
      info: {
        cores: 2,
        сache: 3
      }
    },
    {
      cpu: "intel",
      info: {
        cores: 4,
        сache: 4
      }
    },
    {
      cpu: "amd",
      info: {
        cores: 1,
        сache: 1
      }
    },
    {
      cpu: "intel",
      info: {
        cores: 3,
        сache: 2
      }
    },
    {
      cpu: "amd",
      info: {
        cores: 4,
        сache: 2
      }
    }
  ];

  function arrayCPUFunction(array) {
    return array.sort((core1, core2) => {
      return core1.info.cores - core2.info.cores;
    });
  }

  console.log(arrayCPUFunction(arrayCPU));

  //   3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
  // let products = [
  //   {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  //   {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  //   {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  //   {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
  // ];
  // filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

  let products = [
    { title: "prod1", price: 5.2 },
    { title: "prod2", price: 0.18 },
    { title: "prod3", price: 15 },
    { title: "prod4", price: 25 },
    { title: "prod5", price: 18.9 },
    { title: "prod6", price: 8 },
    { title: "prod7", price: 19 },
    { title: "prod8", price: 63 }
  ];

  function filterCollection(array, fromPrice, toPrice) {
    return array
      .filter(element => {
        return element.price >= fromPrice && element.price <= toPrice;
      })
      .sort((product1, product2) => {
        return product1.price - product2.price;
      });
  }

  console.log(filterCollection(products, 15, 30));
}

// Занятие 5, Слайд 4, 5

{
  // 1. Создать две функции и дать им осмысленные названия:
  //   - первая функция принимает массив и колбэк (одна для всех вызовов)
  //   - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
  // Первая функция возвращает строку “New value: ” и результат обработки:
  // firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
  // firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
  // firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) → “New value: Jhon is 45, Aaron is 20,”
  // firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

  function arrayToString(array) {
    return array.reduce((acc, currentValue) => {
      return acc + currentValue[0].toUpperCase() + currentValue.slice(1);
    }, "");
  }

  // 1. firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”

  // function arrayToString(array) {
  //   return array.reduce((acc, currentValue) => {
  //     return acc + currentValue[0].toUpperCase() + currentValue.slice(1);
  //   }, "");
  // }

  function arrayToString(array) {
    return array
      .map(element => {
        return element[0].toUpperCase() + element.slice(1);
      })
      .join("");
  }

  // 2. firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”

  // function increaseToTen(array) {
  //   const increaseArray = [];
  //   array.forEach(element => {
  //     increaseArray.push(element * 10);
  //   });
  //   return increaseArray.join(", ");
  // }

  function increaseToTen(array) {
    return array
      .map(element => {
        return element * 10;
      })
      .join(", ");
  }

  // 3. firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) → “New value: Jhon is 45, Aaron is 20,”

  // function userInfo(array) {
  //   const arrayUsers = [];
  //   array.forEach(element => {
  //     arrayUsers.push(`${element.name} is ${element.age}`);
  //   });
  //   return arrayUsers.join(', ')
  // }

  function userInfo(array) {
    return array
      .map(element => {
        return `${element.name} is ${element.age}`;
      })
      .join(", ");
  }

  function getFunction(array, customFunction) {
    return "New value: " + customFunction(array);
  }

  // 4. firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

  function arrayReverse(array) {
    return array
      .map(element => {
        return element
          .split("")
          .reverse()
          .join("");
      })
      .join(", ");
  }

  console.log(getFunction(["my", "name", "is", "Trinity"], arrayToString));
  console.log(getFunction([10, 20, 30], increaseToTen));
  console.log(
    getFunction(
      [{ age: 45, name: "Jhon" }, { age: 20, name: "Aaron" }],
      userInfo
    )
  );
  console.log(getFunction(["abc", "123"], arrayReverse));

  // 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция) функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.

  const arrayNum = [6, 7, 58, 5];

  function myEveryFunction(array, fn) {
    if (Array.isArray(array) && typeof fn === "function") {
      for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
          return false;
        }
      }
      return true;
    }
  }

  function checkingValueInArray(element) {
    return element < 6;
  }

  console.log(myEveryFunction(arrayNum, checkingValueInArray));
}
