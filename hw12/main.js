// 1. Подключить поиск по введенному слову.
// Новости должны обновляться после каждой введенной буквы.
// 2. Добавить сортировку. Пример, как должно быть в запросе: sortBy=popularity

// API-key dd1ca54387d2484b92a9a1e4e98c6f44

class Service {
  constructor() {
    this.key = "dd1ca54387d2484b92a9a1e4e98c6f44";
    this.country = "";
    this.category = "";
    this.search = "";
    this.sort = "";
  }
  sendRequest({ country = "", category = "", search = "", sort = "" }) {
    if (country !== "") {
      this.country = country;
    }
    if (category !== "") {
      this.category = category;
    }
    if (search !== "") {
      this.search = search;
    }
    if (sort !== "") {
      this.sort = sort;
    }

    let endpoints = "";

    if (this.country || this.category) {
      endpoints = "top-headlines";
    } else {
      endpoints = "everything";
    }

    return fetch(
      `https://newsapi.org/v2/${endpoints}?country=${this.country}&category=${this.category}&q=${this.search}&sortBy=${this.sort}&apiKey=${this.key}`
    )
      .then(response => response.json())

      .catch(error => console.error("My Error -", error));
  }
}

class NewsUI {
  constructor() {
    this.service = new Service();
    this.layout = new LayoutNews();
  }

  init() {
    const country = document.getElementById("country");
    const categoty = document.getElementById("category");
    const search = document.getElementById("search");
    const sort = document.getElementById("sort");
    const dateFrom = document.getElementById("date-from");

    country.addEventListener("change", this.handleSelect.bind(this));
    categoty.addEventListener("change", this.handleSelect.bind(this));
    search.addEventListener("input", this.handleSelect.bind(this));
    sort.addEventListener("change", this.handleSelect.bind(this));
  }

  handleSelect(event) {
    const { id: selectName, value: selectValue } = event.target;
    this.service.sendRequest({ [selectName]: selectValue }).then(result => {
      this.layout.renderAll(result.articles);
    });
  }
}

class LayoutNews {
  constructor() {
    this.divRow = document.getElementById("row");
  }

  renderAll(newsList) {
    this.divRow.innerHTML = "";

    newsList.forEach(news => {
      const html = this.render(news);
      this.divRow.insertAdjacentHTML("beforeend", html);
    });
  }

  render(news) {
    return `<div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src="${news.urlToImage}">
                </div>
                <div class="card-content">
                  <span class="card-title">${news.title || ""}</span>
                  <span class="card-publishe">${news.publishedAt}</span>
                  <p>${news.description || ""}</p>
                  <span class="card-author">${news.author || "No name"}</span>
                </div>
                <div class="card-action">
                  <a href="${news.url}" target="_blank">Read more</a>
                </div>
              </div>
            </div>`;
  }
}

const news = new NewsUI();
news.init();
