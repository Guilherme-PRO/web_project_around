export default class UserInfo {
  constructor({ name, about, avatar}) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._photo = document.querySelector(avatar)
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
    };
  }

  setUserInfo(name, about) {
    this._name.textContent = name;
    this._about.textContent = about;
  }

  setAvatar(newAvatarUrl) {
    this._photo.src = newAvatarUrl;
  }
}
