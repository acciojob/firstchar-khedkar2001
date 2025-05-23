function firstChar(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      return text[i];
    }
  }
  return '';
}

// Declare `text` from prompt
const text = prompt("Enter text:");
alert(firstChar(text));
