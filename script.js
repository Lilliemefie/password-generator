// Assignment Code
//var generateBtn = document.querySelector("#generate");

// 1. create pop up for asking about:
//    - How many character do you want? (from 8 to 128)
//    - Do you want uppercase?
//    - Do you want lowercase?
//    - Do you want number?
//    - Do you want symbols?
// 2. 
//
/*var randomFunc = {
  lower = getRandomlowerCase,
  upper = getRandomUpperCase,
  symbols = getRandomSymbols,
  number = getRandomNumeric,

}*/

// Write password to the #password input, created function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomSymbols() {
  var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomlowerCase() {
  var lowerCase = "abcdefghijklmnopqurstuvwxyz";
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomUpperCase() {
  var upperCase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomNumeric() {
  var numeric = "0123456789";
  return numeric[Math.floor(Math.random() * numeric.length)];
}


function asklower(){
  var yes = confirm ("Do you want a lowercase?");
  if (yes === true);
  getRandomlowerCase;
} else {
}
});


function askupper(){
  var yes = confirm ("Do you want an uppercase?");
  if (yes === true);
  return getRandomUpperCase;
}

console.log(asklower, askupper);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


