// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


function addNewListItem() {
    const list = document.getElementById('example-list'); // get the unordered list element
    const newListItem = document.createElement('li'); // create a new list item element
    newListItem.textContent = 'New Item'; // set the text content of the new list item
    list.appendChild(newListItem); // add the new list item to the end of the list
  }

  // add delet option


function addNewListItem() {
    const list = document.getElementById('example-list'); // get the unordered list element
    const newListItem = document.createElement('li'); // create a new list item element
    const itemText = document.createElement('span'); // create a new span element for the item text
    const deleteButton = document.createElement('button'); // create a new button element for deleting the item
    deleteButton.textContent = 'Delete'; // set the text content of the delete button
    deleteButton.onclick = function() {
      list.removeChild(newListItem); // remove the list item when the delete button is clicked
    };
    itemText.textContent = 'New Item'; // set the text content of the new list item
    newListItem.appendChild(itemText); // add the item text to the new list item
    newListItem.appendChild(deleteButton); // add the delete button to the new list item
    list.appendChild(newListItem); // add the new list item to the end of the list
  }
  
  function deleteListItem() {
    const list = document.getElementById('example-list'); // get the unordered list element
    const lastItem = list.lastElementChild; // get the last list item in the list
    list.removeChild(lastItem); // remove the last list item from the list
  }  