// Get references to the elements
const newItemInput = document.getElementById('new-item');
const addButton = document.getElementById('add-button');
const shoppingList = document.getElementById('shopping-list');

// Event listener for adding a new item
addButton.addEventListener('click', () => {
  const newItemText = newItemInput.value.trim();
  if (newItemText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = newItemText;
    shoppingList.appendChild(listItem);
    newItemInput.value = '';
  }
});
