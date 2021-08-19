
const isEnabled = checkLocalStorageEnabled();

// Based on https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Feature-detecting_localStorage
function checkLocalStorageEnabled() {
  try {
    const x = '__storage_test__';
    localStorage.setItem(x, x);
    localStorage.removeItem(x);
    return true;
  } catch (e) {
    /* istanbul ignore next */
    return false;
  }
}

/**
 * Adds or updates the specified key to storage
 * @param {string} key - name of the key to create/update
 * @param {any} value - value to write (undefined written as empty string)
 */
function set(key, value) {
  if (isEnabled) {
    localStorage.setItem(key, value !== undefined ? JSON.stringify(value) : '');
  }
}

/**
 * Returns the value of the specified key
 * @param {string} key - name of the key to read
 * @param {any} defaultValue - value to return if the key is not defined
 */
function get(key, defaultValue){
  if (isEnabled) {
    const item = localStorage.getItem(key);
    console.log('object',item)
    try{
      return item !== null ? JSON.parse(item) : defaultValue;
    }
    catch(error){
      return item;
    }
  } else {
    /* istanbul ignore next */
    return defaultValue;
  }
}

/**
 * Removes the specified key from storage
 * @param {string} key - name of the key to remove
 */
function remove(key) {
  if (isEnabled) {
    localStorage.removeItem(key);
  }
}

export const Storage = {
  isEnabled,
  set,
  get,
  remove,
};