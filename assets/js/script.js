// Assignment Code
var generateBtn = document.querySelector("#generate");

// form input variables
var enterPasswordLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSpecialCharacters;
var userInput;

// form input variable values
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "[", "]", "{", "}", ";", ":", "|", "<", ">", "?"]; 


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
};


// Write password to the #password input
function generatePassword() {

  var enterPasswordLength = window.prompt("How long would you like your password to be? Choose between 8 and 128 characters.");  

  if (!enterPasswordLength) {
      alert("Please enter password length.");
  }
  else if(enterPasswordLength < 8 || enterPasswordLength > 128) {
      alert("Please keep password between 8-128 characters!");
  }
  else {
      var confirmLowercase = confirm("Include lowercase letters?");
      var confirmUppercase = confirm("Include uppercase letters?");
      var confirmNumbers = confirm("Include Numbers?");
      var confirmSpecialCharacters = confirm("Include special characters?");
  };
   // all four choices are picked/not picked
   if(!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecialCharacters) {
      userInput = alert("Please choose at least one character type.");
   }
   else if(confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecialCharacters) {
       userInput = lowercase.concat(uppercase, numbers, specialCharacters);
       console.log(userInput);
   } // 3 choices are picked
   else if(confirmLowercase && confirmUppercase && confirmNumbers) {
       userInput = lowercase.concat(uppercase, numbers);
   }
   else if(confirmLowercase && confirmUppercase && confirmSpecialCharacters) {
       userInput = lowercase.concat(uppercase, specialCharacters);
   }
   else if(confirmLowercase && confirmNumbers && confirmSpecialCharacters) {
       userInput = lowercase.concat(numbers, specialCharacters);
   }
   else if(confirmUppercase && confirmNumbers && confirmSpecialCharacters) {
       userInput = uppercase.concat(numbers, specialCharacters);
       console.log(userInput);
   } // 2 choices are picked
   
  
   
 }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

