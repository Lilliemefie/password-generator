// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqurstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ"
var numeric = 1234567890
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

console.log(lowerCase);
console.log(upperCase);
console.log(numeric);
console.log(specialCharacter);




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
