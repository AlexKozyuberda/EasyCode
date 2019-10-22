// Занятие 7. Слайд 5-6

{
  // 1. Найти параграф и получить его текстовое содержимое (только текст!)

  let paragraph = document.querySelector("p");
  console.log(paragraph.textContent);

  //   2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

  const span = document.querySelector("span");

  function nodeInfo(node) {
    const nodeInfo = {
      typeNode: node.nodeType,
      nameNode: node.tagName,
      numberOfChildNode: node.childNodes.length
    };

    return nodeInfo;
  }

  console.log(nodeInfo(span));

  // 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

  const list = document.querySelectorAll("ul a");

  function getTextFromUl(list) {
    const textArray = [];

    for (const value of list) {
      textArray.push(value.textContent);
    }
    return textArray;
  }

  console.log(getTextFromUl(list));

  // 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:  -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text

  let childTextNodes = paragraph.childNodes;

  for (let i = 0; i < childTextNodes.length; i++) {
    if (childTextNodes[i].data !== undefined) {
      childTextNodes[i].textContent = "-text-";
    }
  }
}

// Занятие 7. Слайд 11

{
  // 1. Найти в коде список ul и добавить класс “list”

  let list = document.querySelector("ul");

  list.classList.add("list");

  // 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

  let mainElements = document.body.children;

  for (let i = 0; i < mainElements.length; i++) {
    if (mainElements[i].tagName === "UL") {
      const arrayNextElements = [];
      let elements = list;

      for (let j = 0; j <= i; j++) {
        arrayNextElements.push((elements = elements.nextElementSibling));
        if (arrayNextElements[j].tagName === "A") {
          arrayNextElements[j].id = "link";
          break;
        }
      }
    }
  }

  // 3. На li через один (начиная с самого первого) установить класс “item”

  let childrenList = list.children;

  for (let i = 0; i < childrenList.length; i++) {
    if (i % 2 === 0) {
      childrenList[i].classList.add("item");
    }
  }

  // 4. На все ссылки в примере установить класс “custom-link

  let allLink = document.querySelectorAll("a");
  for (const value of allLink) {
    value.classList.add("custom-link");
  }
}

// Занятие 7. Слайд 17-19

{
  //   1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
  // <ul>
  //    <li><a href="#">Link1</a></li>
  //    ...
  //    <li class=”new-item”>item 5</li>
  //    <li class=”new-item”>item 6</li>
  // </ul>
  // Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

  const list = document.querySelector(".list");

  function addListItem(amountOfElements) {
    const listChildren = list.children;

    let number = ++listChildren.length;

    for (let i = 0; i < amountOfElements; i++) {
      const li = `<li class='new-item'><a href="#" class="custom-link">Item${number++}</a></li>`;
      list.insertAdjacentHTML("beforeend", li);
    }
  }

  addListItem(2);

  // 2. В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).

  let listLinks = list.querySelectorAll(".custom-link");

  for (const value of listLinks) {
    value.insertAdjacentHTML("beforeend", `<strong></strong>`);
  }

  // 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

  let pageBody = document.body;

  const imgObj = {
    src: "javascript-illustration.png",
    alt: "JavaScript"
  };

  let pageImg = document.createElement("img");

  for (const key in imgObj) {
    pageImg.setAttribute(key, imgObj[key]);
  }

  pageBody.prepend(pageImg);

  // 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

  let selectedText = document.querySelector("mark");
  selectedText.append(" green");
  selectedText.classList.add("green");

  // 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

  const itemList = document.querySelectorAll(".list a");

  function getSortList(list) {
    const listArray = [];

    for (const value of list) {
      listArray.push(value.textContent);
    }
    listArray.sort();

    for (let i = 0; i < list.length; i++) {
      let linkText = listArray[i];
      list[i].textContent = linkText;
    }
  }

  const btnSort = document.querySelector(".btn-sort");

  btnSort.addEventListener("click", function() {
    getSortList(itemList);
  });

  // 6. Дан массив пользователей, его можно скопировать отсюда из первой задачи, создать таблицу вида:
  // Условия:
  // - В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю.
  // - Количество пользователей может быть любым.
  // - Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой то.
  // - В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.

  const users = [
    {
      _id: "5d220b10e8265cc978e2586b",
      isActive: true,
      balance: 2853.33,
      age: 20,
      name: "Buckner Osborne",
      gender: "male",
      company: "EMPIRICA",
      email: "bucknerosborne@empirica.com",
      phone: "+1 (850) 411-2997",
      registered: "2018-08-13T04:28:45 -03:00",
      nestedField: { total: 300 }
    },
    {
      _id: "5d220b10144ef972f6c2b332",
      isActive: true,
      balance: 1464.63,
      age: 38,
      name: "Rosalie Smith",
      gender: "female",
      company: "KATAKANA",
      email: "rosaliesmith@katakana.com",
      phone: "+1 (943) 463-2496",
      registered: "2016-12-09T05:15:34 -02:00",
      nestedField: { total: 400 }
    },
    {
      _id: "5d220b1083a0494655cdecf6",
      isActive: false,
      balance: 5023.39,
      age: 40,
      name: "Jon Snow",
      gender: "male",
      company: "EBIDCO",
      email: "estradadavenport@ebidco.com",
      phone: "+1 (890) 461-2088",
      registered: "2016-03-04T03:36:38 -02:00",
      nestedField: { total: 200 }
    },
    {
      _id: "5d220b1083a0494655cdecf6",
      isActive: false,
      balance: 2823.39,
      age: 20,
      name: "Eva Davenport",
      gender: "female",
      company: "EBIDCO",
      email: "estradadavenport@ebidco.com",
      phone: "+1 (890) 461-2088",
      registered: "2016-03-04T03:36:38 -02:00",
      nestedField: { total: 200 }
    }
  ];

  const tableTitle = {
    id: "#",
    name: "Name",
    email: "Email",
    balance: "Balance"
  };

  function totalBalance(userObj) {
    let result = 0;
    userObj.forEach(element => {
      result += element.balance;
    });
    return result;
  }

  function getTable(tableFields, userObj) {
    const tableHead = document.querySelector(".table-head tr");
    const tableBody = document.querySelector(".table-body tr");
    const tableFooter = document.querySelector(".table-footer tr");

    for (const key in tableFields) {
      const th = `<th>${tableFields[key]}</th>`;
      tableHead.insertAdjacentHTML("beforeend", th);
    }

    userObj.forEach((element, index) => {
      const trBody = `
        <td>${++index}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.balance}</td>
      `;

      tableBody.insertAdjacentHTML("beforebegin", trBody);
    });

    let trFooter = `<tr>
      <td></td>
      <td></td>
      <td></td>
      <td>Total balance: <span>${totalBalance(userObj)}</span></td>
    </tr>`;

    tableFooter.insertAdjacentHTML("beforebegin", trFooter);
  }

  getTable(tableTitle, users);
}
