'use strict';

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// --------------------------------------------------------------------------------------
// CHARACTER CAR LIST -------------------------------------------------------------------
// --------------------------------------------------------------------------------------

var numbersList = '0123456789';
var lowersList = 'abcdefghijklmnopqrstuvwxyz';
var uppersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbolsList = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';

// --------------------------------------------------------------------------------------
// PROMPT BOX + CONFIRM BOX + FUNCTION --------------------------------------------------
// --------------------------------------------------------------------------------------

function generatePassword() {
  var masterCharList = '';

  // After each confirmed character, 1 character from that list is reserved in the final password
  var passwordConfirmList = '';

  // TRACKER | AT LEAST 1 TYPE --------------------------------------
  var trackerConfirm = [];

  // LENGTH PROMPT + CHECK FOR CHARACTER LENGTH ---------------------
  var lengthPrompt = prompt('Enter a number from 8 to 128 for password length.');

  if (lengthPrompt < 8) {
    alert('💔  Try Again! Too short. 💔 \r\n Password length needs to be between 8 & 128.');
    return '';
  } else if (lengthPrompt > 128) {
    alert('💔  Try Again! Too long. 💔 \r\n Password length needs to be between 8 & 128.');
    return '';
  }

  // CONFIRM CHARACTER BOX + PUSH FOR ANY CANCELS TO TRACKER --------
  var numbersPrompt = confirm('Do you want to include numbers?');
  if (numbersPrompt) {
    masterCharList += numbersList;
    passwordConfirmList += numbersList.charAt(Math.random() * numbersList.length);
  } else {
    trackerConfirm.push(numbersPrompt);
  }

  var lowercasePrompt = confirm('Do you want to include lowercase letters?');
  if (lowercasePrompt) {
    masterCharList += lowersList;
    passwordConfirmList += lowersList.charAt(Math.random() * lowersList.length);
  } else {
    trackerConfirm.push(lowercasePrompt);
  }

  var uppercasePrompt = confirm('Do you want to include uppercase letters?');
  if (uppercasePrompt) {
    masterCharList += uppersList;
    passwordConfirmList += uppersList.charAt(Math.random() * uppersList.length);
  } else {
    trackerConfirm.push(uppercasePrompt);
  }

  var symbolsPrompt = confirm('Do you want to include symbols?');
  if (symbolsPrompt) {
    masterCharList += symbolsList;
    passwordConfirmList += symbolsList.charAt(Math.random() * symbolsList.length);
  } else {
    trackerConfirm.push(symbolsPrompt);
  }

  // CHECK | AT LEAST 1 TYPE ----------------------------------------
  if (trackerConfirm.length === 4) {
    alert('💔  Try Again! 💔 \r\n At least 1 type needs to be selected.');
    return '';
  }

  var password = '';
  for (let i = 0; i < lengthPrompt - passwordConfirmList.length; i++) {
    password += masterCharList[Math.floor(Math.random() * masterCharList.length)];
  }
  return password + passwordConfirmList;
}
