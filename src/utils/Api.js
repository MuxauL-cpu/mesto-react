class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then(this._getResponse)
  }

  createCard(data) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(this._getResponse)
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      headers: this._headers,
      method: "DELETE",
    })
    .then(this._getResponse)
  }

  deleteLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: "DELETE",
    })
    .then(this._getResponse)
  }

  createLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: "PUT",
    })
    .then(this._getResponse)
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
    .then(this._getResponse)
  }

  setUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
    .then(this._getResponse)
  }

  patchUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data)
    })
    .then(this._getResponse)
  }

  patchProfilePicture(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data)
    })
    .then(this._getResponse)
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-58",
  headers: {
    authorization: "0d41bd60-8a72-4d38-a21a-fc9b14017fab",
    "Content-type": "application/json",
  }
})

export default api;