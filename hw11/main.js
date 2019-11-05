// Сделать запрос к альбомам, получить их список, вывести на экран (в левой колонке на странице)
// При клике на альбом делать запрос к фотографиям (которые в относятся к текущему альбому), получать их список, вывести на экран (в правой колонке)
// Апи для запросов - https://jsonplaceholder.typicode.com/

class HttpRequest {
  get(url, getResponseText) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.addEventListener("load", () => getResponseText(xhr.responseText));
  }
}

const request = new HttpRequest();

request.get("https://jsonplaceholder.typicode.com/albums", response => {
  const parsedAlbums = JSON.parse(response);
  const albumsForRendering = new Albums();
  parsedAlbums.forEach(albumItem => {
    albumsForRendering.render(albumItem);
  });
});

class Albums {
  constructor() {
    this.albumsList = document.querySelector(".albums-list");
  }

  handlerAlbumClick(evt) {
    evt.preventDefault();
    const albumId = evt.target.dataset.id;

    const photoItems = document.querySelectorAll(".albums-photo-item");
    photoItems.forEach(photo => {
      photo.remove();
    });

    request.get(
      "https://jsonplaceholder.typicode.com/photos?albumId=" + albumId,
      response => {
        const parsePhotos = JSON.parse(response);
        const photosForRendering = new Photo();
        parsePhotos.forEach(photoItem => {
          photosForRendering.render(photoItem);
        });
      }
    );
  }

  render(albums) {
    const albumsLink = document.querySelectorAll(".albums-link");
    const albumsItem = `<div class="albums-item">
      <a href="#" class="albums-link" data-id="${albums.id}">
      <span class="albums-number">Альбом: ${albums.id}</span>
      ${albums.title}
      </a>
    </div>`;

    albumsLink.forEach(link => {
      link.addEventListener("click", this.handlerAlbumClick);
    });
    this.albumsList.insertAdjacentHTML("beforeend", albumsItem);
  }
}

class Photo {
  constructor() {
    this.photoWrapper = document.querySelector(".albums-photo");
  }

  render(photos) {
    const photoItem = `<div class="albums-photo-item">
      <img src="${photos.url}" alt="${photos.title}"/>
      <div class="albums-photo-description">

        <span class="albums-photo-name">${photos.title}</span>
      </div>
    </div>`;
    this.photoWrapper.insertAdjacentHTML("beforeend", photoItem);
  }
}
