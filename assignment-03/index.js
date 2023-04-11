// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph elemen
function addNewParagraph() {
    const newParagraph = document.createElement('p'); // create a new paragraph element
    newParagraph.textContent = 'This is a new paragraph.'; // set the text content of the new paragraph
    document.body.appendChild(newParagraph); // add the new paragraph to the end of the document body
  }