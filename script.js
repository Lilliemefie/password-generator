var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password")
var lowerCase = "abcdefghijklmnopqurstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var numeric = "0123456789";
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// 1. create pop up for asking about:
//    - How many character do you want? (from 8 to 128)
//    - Do you want uppercase?
//    - Do you want lowercase?
//    - Do you want number?
//    - Do you want symbols?
// 2. 



// Write password to the #password input, created function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


