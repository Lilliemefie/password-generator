var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password")
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "%", "&", "+", "-", ".", "/", "<", "=", ">", "?", "@"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
// Prompt to ask the user; how many characters the user would like to have in the password
var lengthNo = prompt("How many characters would you like? Choose between 8 and 128");
if (lengthNo === null){
  return;
}
// if the user put the alphabet or symbols, it will return to function "generatPassword"
if(isNaN(lengthNo)){
  alert("You must input a number!");
  return generatePassword()
}
// if the user put the number less than 8 or more than 128, it will return to function "generatPassword"
if (lengthNo < 8 || lengthNo > 128){
   alert("Please choose minimum 8 characters or maximum 128 characters!");
   return generatePassword()
}

//confirm window which characters the user would like to use
var confirmLower = confirm("Would you like to include lowercase leters?");
var confirmUpper = confirm("Would you like to include uppercase letters?");
var confirmNumeric = confirm("Would you like to include number?");
var confirmSymbols = confirm("Would you like to include special characters?");
// Loop if answer is outside the parameters 
if(confirmUpper === false && confirmLower === false && confirmSymbols === false && confirmNumeric === false) {
    alert("You must choose at least one character");
    return generatePassword()
};

var selectedChar = [];

if(confirmLower === true){
  selectedChar = selectedChar.concat(lowerCase)
};

if(confirmUpper === true){
  selectedChar = selectedChar.concat(upperCase)
};

if(confirmNumeric === true){
  selectedChar = selectedChar.concat(numeric)
};

if(confirmSymbols === true){
  selectedChar = selectedChar.concat(symbols)
};
console.log(selectedChar);

var passwordnw = [];

for (var i = 0; i < lengthNo; i++) {
  passwordnw.push(selectedChar[(Math.floor(Math.random() * selectedChar.length))]);
}
 var x = passwordnw.join("");
 return x 


};
