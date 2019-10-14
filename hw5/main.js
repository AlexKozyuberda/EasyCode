// Занятие 9. Слайд 7-9

{
  // 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры: const rectangle = {width:..., height:..., getSquare:...};

  const rectangle = {
    width: 6,
    height: 4,
    getSquare: function() {
      return this.width * this.height;
    }
  };

  console.log("Площадь прямоугольника =", rectangle.getSquare());

  // 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
  // const price = {
  //  price: 10,
  //  discount: '15%',
  //  ... };
  //  price.getPrice(); // 10
  //  price.getPriceWithDiscount(); // 8.5

  const price = {
    price: 10,
    discount: "15%",
    getPrice: function() {
      return this.price;
    },
    getPriceWithDiscount: function() {
      let amountDiscount = (parseFloat(this.discount) / 100) * this.price;

      return this.price - amountDiscount;
    }
  };

  console.log("Цена товара:", price.getPrice());
  console.log("Цена товара с учетом скидки:", price.getPriceWithDiscount());

  //   3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:
  // object.height = 10;
  // object.inc(); // придумать свое название для метода
  // object.height; // 11;

  const object = {
    height: 10,
    getIncreaseHeight: function() {
      return ++this.height;
    }
  };

  console.log("Высота:", object.getIncreaseHeight());

  // 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов:
  // const numerator = {
  //  value: 1,
  //  double: function () {...},
  //  plusOne: function () {...},
  //  minusOne: function () {...},
  // }
  // numerator.double().plusOne().plusOne().minusOne();
  // numerator.value // 3

  const numerator = {
    value: 1,
    double: function() {
      this.value *= 2;
      return this;
    },
    plusOne: function() {
      ++this.value;
      return this;
    },
    minusOne: function() {
      --this.value;
      return this;
    }
  };

  console.log(
    "Вычислитель:",
    numerator
      .double()
      .plusOne()
      .plusOne()
      .minusOne()
  );

  console.log(numerator.value);
}

// Дополнительное задание

{
  // Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
  //  read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
  //  sum() возвращает сумму введённых свойств.
  //  mul() возвращает произведение введённых свойств.

  function Calculator() {
    this.read = function() {
      this.firstValue = parseFloat(prompt("Введите перове значение", ""));
      this.secondValue = parseFloat(prompt("Введите второе значение", ""));
    };

    this.sum = function() {
      return this.firstValue + this.secondValue;
    };

    this.mul = function() {
      return this.firstValue * this.secondValue;
    };
  }
  const calculator = new Calculator();

  calculator.read();

  console.log(calculator.sum());
  console.log(calculator.mul());
}
