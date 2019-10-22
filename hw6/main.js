// Занятие 6. Слайд 7

{
  // Зная структуру html, с помощью изученных методов получить (в консоль):
  //  1. head
  //  2. body
  //  3. все дочерние элементы body и вывести их в консоль.
  //  4. первый div и все его дочерние узлы
  //    а) вывести все дочерние узлы в консоль
  //    б) вывести в консоль все дочерние узлы, кроме первого и последнего
  // Для навигации по DOM использовать методы, которые возвращают только элементы

  let head = document.head;

  console.log("head", head);

  const body = document.body;

  console.log("body", body);

  let bodyElements = body.children;

  console.log("Дочерние элементы body", bodyElements);

  let firstDiv = body.firstElementChild;

  console.log("Первый div и все его дочерние узлы", firstDiv);

  let allNodeDiv = body.firstElementChild.children;

  console.log("Все дочерние узлы", allNodeDiv);

  for (let i = 0; i < allNodeDiv.length; i++) {
    if (i && i !== allNodeDiv.length - 1) {
      console.log("Дочерний узел", i, allNodeDiv[i]);
    }
  }
}

// Занятие 6. Слайд 14-15

{
  // 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
  //  isParent(parent, child);
  //  isParent(document.body.children[0], document.querySelector('mark'));
  //  true так как первый див является родительским элементом для mark
  // isParent(document.querySelector('ul'), document.querySelector('mark'));
  // false так ul НЕ является родительским элементом для mark
  // Функция принимает только DOM объекты.

  const parentElement = document.getElementsByTagName("p");
  const childElement = document.querySelector("mark");

  function isParent(parent, child) {
    return parent.contains(child);
  }

  console.log(
    "Является ли первый элемент родителем для второго:",
    isParent(parentElement[4], childElement)
  );

  // 2. Получить список всех ссылок, которые не находятся внутри списка ul

  const link = document.links;

  for (let i = 0; i < link.length; i++) {
    if (!link[i].closest("ul")) {
      console.log(link[i]);
    }
  }

  // 3. Найти элемент, который находится перед и после списка ul

  const list = document.querySelector("ul");

  console.log("Элемент перед <ul>", list.previousElementSibling);
  console.log("Элемент после <ul>", list.nextElementSibling);
}

// Дополнительное задание

{
  //   У вас на странице есть три инпута, чекбокс(галочка) и кнопка "отправить" (итого: пять элементов).
  // Ваша задача - написать валидацию. То есть, пользователь заполняет все поля, нажимает на кнопку "Отправить", а вы проверяете все ли поля заполнены корректно.

  // Результат вывести в консоль (все хорошо/всё плохо).
  // Список полей:
  //    Имя (больше 2-х символов и меньше - 40)
  //    Логин (должен быть заполнен/не пустой)
  //    Пароль (больше 8-ми символов, должна быть цифра, буква, большая буква)
  //    Галочка - "Прочитал условия" (должна быть включена)
  // Если хоть одно из условий не совпадает, то форма не валидна.

  const authorizationForm = document.querySelector(".authorization");
  const authorizationName = document.getElementById("names");
  const authorizationLogin = document.getElementById("login");
  const authorizationPass = document.getElementById("pass");
  const authorizationCheck = document.getElementById("conditions");

  const сheckNumberCharacters = function(field) {
    let fieldValue = field.value;

    if (fieldValue.length > 2 && fieldValue.length < 40) {
      return true;
    }
    return false;
  };

  const сheckFieldVoid = function(field) {
    let fieldValue = field.value;

    if (fieldValue) {
      return true;
    }
    return false;
  };

  const checkedPass = function(field) {
    const fieldValue = field.value;
    const regexpNum = new RegExp("[0-9]");
    const regexpLetter = new RegExp("[a-z]");
    const regexpLetterUppercase = new RegExp("[A-Z]");

    if (
      fieldValue.length > 8 &&
      regexpNum.test(fieldValue) &&
      regexpLetter.test(fieldValue) &&
      regexpLetterUppercase.test(fieldValue)
    ) {
      return true;
    }
    return false;
  };

  const checkedField = function(field) {
    if (field.checked) {
      return true;
    }
    return false;
  };

  authorizationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (
      сheckNumberCharacters(authorizationName) &&
      сheckFieldVoid(authorizationLogin) &&
      checkedPass(authorizationPass) &&
      checkedField(authorizationCheck)
    ) {
      console.log("Все хорошо");
    } else {
      console.log("Все плохо");
    }
  });
}
