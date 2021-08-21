## WEB STORAGE API

The web storage API provides mechanisms to store data by which browsers can store data as key/value pair in a single object.

## Web storage concepts

There are two mechanisms within the web storage as fallows:

1. sessionStorage
2. localStorage

**sessionStorage** : The data stored in the session storage persists until user close the application window or tab. The browser provides about 5 mb of memory space for the session storage, data stored in the session storage is not passed to the server like data stored in cookies.

**localStorage** : Local storage also works same like session storage however the data is persisted until user clears the browser cache/memory or javascript clears it externally.

- Web storage api fallows the same origin policy which means that both session storage and local storage maintained separately for each application and data cannot be shared between the applications.

- session storage and local storage accepts key value pair only in string format, so we have to be bit cautious while storing data other than the strings. We must need to convert any form of data to string format before storing data and also do the parse operation while getting data.

## APIS

Session storage and local storage have the same fallowing api to perform operations.

**setItem** : This method is used to store data.

**getItem**: This method is used to get data.

**removeItem** This method is used for removing data. It will accepts the key value and removes the data of provided key value.

**clear**: This method is used to clear the complete data.

## Example

```
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
localStorageAPI.setItem('name', 'harish')

```
