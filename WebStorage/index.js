class WebStorage {
  constructor(storage) {
    this.storage = storage;
  }
  setData(key, data) {
    this.storage.setItem(key, JSON.stringify(data));
  }
  getData(key) {
    return JSON.parse(this.storage.getItem(key));
  }
  removeData(key) {
    this.storage.removeItem(key);
  }
  clearStorage() {
    this.storage.clear();
  }
}

const localStorageAPI = new WebStorage(localStorage);
const sessionStorageAPI = new WebStorage(sessionStorage);

localStorageAPI.setData("name", "harish");
