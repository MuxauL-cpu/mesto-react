class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
  }

  createCard(data) {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      headers: this._headers,
      method: "DELETE",
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
  }

  deleteLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: "DELETE",
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
  }

  createLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      headers: this._headers,
      method: "PUT",
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
  }

  setUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
  }

  patchUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
  }

  patchProfilePicture(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
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