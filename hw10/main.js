// Отображать список книг
// Добавление книги
// Сортирока (по цене, по алф)
// Фильтрация (по стране, по автору)
// валидация
// редактирование книги
// сохранение в локал стор

//Название книги, цена, автор, страна,
// картинка(по умолчанию), рейтинг(select), жанр (строка)
// - массив

const ARRAY_FIELDS = [
  {
    name: "book_name",
    label: "Название",
    required: "required",
    minSymbol: 3,
    maxSymbol: 40,
    message: "Название книги (от 3 до 40 символов)"
  },
  {
    name: "author",
    label: "Автор",
    required: "required",
    minSymbol: 3,
    message: "Автор книги (от 3 символов)"
  },
  { name: "genre", label: "Жанр" },
  { name: "country", label: "Страна" },
  {
    name: "url",
    label: "Обложка",
    required: "required",
    regexpNum: /^https:/,
    message: "Путь к изображению должен начинаться https://"
  },
  {
    name: "rate",
    label: "Рейтинг",
    choices: [1, 2, 3, 4, 5],
    type: "select"
  },
  {
    name: "price",
    label: "Цена",
    required: "required",
    regexpNum: /^\d+$/,
    message: "Введите стоимость книги"
  }
];

class Form {
  constructor(selector) {
    this.selector = selector;
    this.init();
  }

  init() {
    const bookForm = document.createElement("form");
    bookForm.classList.add("books-form");
    const booksWrapper = document.querySelector(this.selector);

    ARRAY_FIELDS.forEach(field => {
      const formField =
        field.type === "select"
          ? new SelectField(field)
          : new InputField(field);

      const addField = formField.render();
      bookForm.insertAdjacentHTML("beforeend", addField);
    });

    const btnForm = document.createElement("button");
    btnForm.classList.add("books-form-btn");
    btnForm.textContent = "Add Book";
    btnForm.addEventListener("click", this.addBook);
    bookForm.append(btnForm);
    booksWrapper.prepend(bookForm);
  }

  addBook(evt) {
    evt.preventDefault();
    const label = document.querySelectorAll(".books-form-label");

    const fieldValidate = [];

    ARRAY_FIELDS.forEach((field, index) => {
      const inputField = document.querySelector(`[name="${field.name}"]`);
      const inputFieldValue = inputField.value;

      if (field.required) {
        inputFieldValue.length ? label[index].classList.remove("error") : "";

        for (const key in field) {
          if (key === "minSymbol" && inputFieldValue.length < field[key]) {
            label[index].classList.add("error");
            fieldValidate.push(false);
            break;
          }
          if (key === "maxSymbol" && inputFieldValue.length > field[key]) {
            label[index].classList.add("error");
            fieldValidate.push(false);
          }
          if (key === "regexpNum" && !inputFieldValue.match(field[key])) {
            label[index].classList.add("error");
            fieldValidate.push(false);
          }
        }
      }
    });

    const isValidate = fieldValidate.every(validate => {
      return validate;
    });

    if (isValidate) {
      const form = document.querySelector(".books-form");
      bookList.updateListBooks();
      form.reset();
    }
  }
}

class Field {
  constructor({ name, label }) {
    this.name = name;
    this.label = label;
  }
}

class InputField extends Field {
  constructor(field) {
    super(field);
    const { message } = field;
    this.message = message;
  }
  render() {
    const message = `<span class='error-message'>${this.message}</span>`;
    const fieldInput = `<label class="books-form-label">
      <span class="books-form-caption">${this.label}</span>
      ${this.message ? message : ""}
      <input type="text" class="books-form-input" name="${this.name}" value=""/>
    </label>`;
    return fieldInput;
  }
}

class SelectField extends Field {
  constructor(field) {
    super(field);
    const { choices } = field;
    this.choices = choices;
  }

  render() {
    const fieldSelect = `<label class="books-form-label">
    <span class="books-form-caption">${this.label}</span>
    <select name="${this.name}" class="books-form-select">
    ${this.choices
      .map(option => {
        return `<option value="${option}">${option}</option>`;
      })
      .join("")}
    </select>
  </label>`;
    return fieldSelect;
  }
}
class ArrayBooks {
  getArrayBooks() {
    const arrayBooks = [];
    const book = ARRAY_FIELDS.reduce((acc, { name }) => {
      const inputName = document.querySelector(`[name="${name}"]`);
      const val = inputName.value;
      return { ...acc, [name]: val };
    }, {});

    arrayBooks.push(book);
    return arrayBooks;
  }
}

class Book {
  constructor(book) {
    this.book = book;
  }

  render() {
    const { book_name, author, genre, rate, country, url, price } = this.book;
    const bookItem = `<div class="book"><div class="book-img">
      <img src="${url ||
        "https://ic2.maryjane.ru/J/uploaded/2013/08/07/46154f5a2ae302278cada37dc084cf5c.jpeg"}" alt="${name}" />
    </div>
    <div class="book-info">
      <strong class="book-name">${book_name}</strong>
      <span class="book-rate">${rate}</span>
      <span class="book-author">Автор: <span>${author}</span></span>
      <span class="book-genre">Жанр: <span>${genre || "-"}</span></span>
      <span class="book-country">Страна: <span>${country || "-"}</span></span>
      <span class="book-price">Цена: <span>${price} грн.</span></span>
    </div></div>`;
    return bookItem;
  }
}

class ListBooks {
  constructor() {
    this.booksContainer = document.querySelector(".books-container");
  }

  updateListBooks() {
    const arrayBooks = new ArrayBooks();
    const booksContent = arrayBooks.getArrayBooks();
    booksContent.forEach(book => {
      const oneBook = new Book(book);
      const bookContent = oneBook.render();
      this.booksContainer.insertAdjacentHTML("beforeend", bookContent);
    });
  }
}

const bookForm = new Form(".books");
const bookList = new ListBooks();

//Добавить верстку на форму
//Добавить верстку на список книг
//Добавить возможность отображать картинку по url
//Пофиксить ошибку с добавлением книг на страницу
//Написать метод для добавления одной книги (сейчас добаляются все)

//Реализовать минимум одну из задач: (внизу есть пара подсказок для задач со *)
//1.* Добавить метод validate в класс Form. Метод должен пройтись по объекту book(метод addBook) и проверить
//все ли поля заполнены правильно.

//2.* Добавить сортировку по цене. СортировкИ "от дешевых к дорогим" / "от дорогих к дешевым"

//3.* Добавить фильтрацию по жанрам.

//4. Добавить сортировку по названию книги

//5. Добавить фильтр по рейтингу
