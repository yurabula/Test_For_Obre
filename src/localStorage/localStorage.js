const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const addItemToLocalStorage = (key, newItem) => {
  const data = getFromLocalStorage(key);
  data.push(newItem);
  saveToLocalStorage(key, data);
};

const removeItemFromLocalStorage = (key, itemId) => {
  const data = getFromLocalStorage(key);
  const updatedData = data.filter((item) => item.id !== itemId);
  saveToLocalStorage(key, updatedData);
};

export {saveToLocalStorage, getFromLocalStorage, addItemToLocalStorage, removeItemFromLocalStorage}