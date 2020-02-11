const modifyString = (inputString) => {
  let myInputString = inputString;
  // Iterate through lower and uppercase vowels
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let i = 0; i < inputString.length; i++) {
    if (inputString.includes(vowels[i])) {
      // regular expression for a global replacement
      const toReplace = new RegExp(vowels[i], "g");
      myInputString = myInputString.replace(toReplace, "");
    }
  }
  // create an array to join into a string
  let modifiedStringArray = [];
  for (let i = myInputString.length - 1; i >= 0; i--) {
    modifiedStringArray.push(myInputString[i]);
  }

  return modifiedStringArray.join("");
};
console.log(modifyString("Hello World"));
