var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password")
var lowerCase = "abcdefghijklmnopqurstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var numeric = "0123456789";
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var pickedChar = "";

// Write password to the #password input, created function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
// Prompt to confirm how many characters the user would like to have in the password
var lengthNo = prompt("How many characters would you like? Choose between 8 and 128");
if(isNaN(lengthNo)){
  alert("You must input a number!");
  return generatePassword()
}
if (lengthNo < 8 || lengthNo > 128){
prompt ("Please choose minimum 8 characters or maximum 128 characters!");
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
}





};




