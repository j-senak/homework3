// Assignment Code
var generateBtn = document.querySelector("#generate");

var finalPassword = []
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

var passLength = prompt("Choose a length of at least 8 characters and no more than 128 characters!");
var conSpecialChars = confirm("Do you want to use special characters?");
var conLowerCase = confirm("Do you want to use lower case letters?");
var conUpperCase = confirm("Do you want to use upper case letters?");
var conNumbers = confirm("Do you want to use numbers?");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
