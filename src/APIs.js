export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUser(){
    return fetch(`${this._baseUrl}/users/me`, {
      method:"GET",
      headers: this._headers
    });
  }

  updateUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method:"PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    });
  }

  perfil(){
    return fetch(`${this._baseUrl}/users/me`, {
      method:"GET",
      headers: this._headers
    });
  }

  photoPerf(avatar){
    return fetch(`${this._baseUrl}/users/me/avatar`,{
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatar)
    })
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards/`, {
      headers: this._headers
    });
  }

  creatCard(card) {
   return fetch(`${this._baseUrl}/cards/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(card)
    });
  }

  deleteCard(cardId){
    return fetch(`${this._baseUrl}/cards/${cardId}`,{
      method: "DELETE",
      headers: this._headers
    })
  }

  toLike(cardId, isLiked){
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers
    });
  }
}
