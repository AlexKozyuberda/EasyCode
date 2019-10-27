// 1. Есть класс Planet
// function Planet(name) {
//    this.name = name;
//    this.getName = function () {
//      return 'Planet name is ' + this.name;
//    }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет принимать, кроме name, название спутника (satelliteName). Переопределите метод getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку + дополнительный текст 'The satellite is' + satelliteName.
// Например:
//    var earth = new PlanetWithSatellite('earth', 'moon');
//    earth.getName(); // 'Planet name is earth. The satellite is moon’

class Planet {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return `Planet name is ${this.name}`;
  }
}

class PlanetWithSatellite extends Planet {
  constructor(name, satelliteName) {
    super(name);
    this.satelliteName = satelliteName;
  }
  getName() {
    return `${super.getName()}. The satellite is ${this.satelliteName}`;
  }
}

const earth = new PlanetWithSatellite("Earth", "Moon");
console.log(earth.getName());

// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
//    классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование
//    У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
//    У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
//    От каждого класса создать экземпляр (дом, торговый центр)

class Building {
  constructor(name, countOfFloors) {
    this.name = name;
    this.countOfFloors = countOfFloors;
  }

  setCountOfFloors(value) {
    this.countOfFloors = value;
  }

  getCountOfFloors() {
    return this.countOfFloors;
  }
}

class House extends Building {
  constructor(name, countOfFloors, countFlatsOnFloor) {
    super(name, countOfFloors);
    this.countFlatsOnFloor = countFlatsOnFloor;
  }

  getCountOfFloors() {
    return {
      countOfFloors: this.countOfFloors,
      totalOfFloors: this.countOfFloors * this.countFlatsOnFloor
    };
  }
}

class ShoppingСenter extends Building {
  constructor(name, countOfFloors, countFlatsOnShops) {
    super(name, countOfFloors);
    this.countFlatsOnShops = countFlatsOnShops;
  }

  getCountOfFloors() {
    return {
      countOfFloors: this.countOfFloors,
      totalOfShops: this.countOfFloors * this.countFlatsOnShops
    };
  }
}

const gilstroy = new House("Жилстрой-1", 3, 5);
console.log("Жилой дом", gilstroy.getCountOfFloors());
const shops = new ShoppingСenter("Ave Plaza", 4, 10);
console.log("Торговый центр", shops.getCountOfFloors());

// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса

function Furniture(name, price) {
  this.name = name;
  this.price = price;
}

Furniture.prototype.getFurnitureInformation = function() {
  return {
    name: this.name,
    price: this.price
  };
};

function OfficeFurniture(name, price, computeDesk) {
  Furniture.call(this, name, price);
  this.computeDesk = computeDesk;
}

OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;

OfficeFurniture.prototype.getFurnitureInformation = function() {
  const officeFurniture = Furniture.prototype.getFurnitureInformation.call(
    this
  );
  officeFurniture.computeDesk = this.computeDesk;
  return officeFurniture;
};

function HomeFurniture(name, price, bed) {
  Furniture.call(this, name, price);
  this.bed = bed;
}

HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;

HomeFurniture.prototype.getFurnitureInformation = function() {
  const homeFurniture = Furniture.prototype.getFurnitureInformation.call(this);
  homeFurniture.bed = this.bed;
  return homeFurniture;
};

const ofice = new OfficeFurniture("комплект Софт", "1000$", true);
const home = new HomeFurniture("спальня Комфорт", "650$", true);
console.log(ofice.getFurnitureInformation());
console.log(home.getFurnitureInformation());

// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть true/false, должно быть скрытым). Свойства определяются в момент вызова конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

class User {
  constructor(name, dateOfRegistration) {
    this.name = name;
    this.dateOfRegistration = dateOfRegistration;
  }

  getUserInfo() {
    return {
      name: this.name,
      dateRegistration: this.dateOfRegistration
    };
  }
}

class Admin extends User {
  constructor(name, dateOfRegistration, superAdmin) {
    super(name, dateOfRegistration);
    this._superAdmin = superAdmin;
  }

  getUserInfo() {
    const adminInfo = super.getUserInfo();
    adminInfo.superAdmin = this._superAdmin;
    return adminInfo;
  }
}

class Guest extends User {
  constructor(name, dateOfRegistration, validDate) {
    super(name, dateOfRegistration);
    this._validDate = validDate;
  }

  getUserInfo() {
    const guestInfo = super.getUserInfo();
    guestInfo.validDate = this._validDate;
    return guestInfo;
  }
}

const admin = new Admin("Вася", "27.10.2019", true);
const guest = new Guest("Вася", "27.10.2019", "1 неделя");
console.log(admin.getUserInfo());
console.log(guest.getUserInfo());
