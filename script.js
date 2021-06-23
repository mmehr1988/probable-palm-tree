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

// ----------------------------------------------------------------
// PROMPT BOX + CONFIRM BOX + FUNCTION ----------------------------
// ----------------------------------------------------------------

function generatePassword() {
  var masterCharList = '';

  // TRACKER | AT LEAST 1 TYPE ---------------------------------
  var trackerConfirm = [];

  // LENGTH PROMPT + CHECK FOR CHARACTER LENGTH ----------------------------------------
  var length = prompt('Enter a number from 8 to 128 for password length.');

  if (length < 8) {
    alert('💔  Try Again! Too short. 💔 \r\n Password length needs to be between 8 & 128.');
    return '';
  } else if (length > 128) {
    alert('💔  Try Again! Too long. 💔 \r\n Password length needs to be between 8 & 128.');
    return '';
  }

  // CONFIRM CHARACTER BOX + PUSH FOR ANY CANCELS TO TRACKER ---------------------------------
  var numbers = confirm('Do you want to include numbers?');
  if (numbers) {
    masterCharList += getNumberChar;
  } else {
    trackerConfirm.push(numbers);
  }

  var lowercase = confirm('Do you want to include lowercase letters?');
  if (lowercase) {
    masterCharList += getLowerChar;
  } else {
    trackerConfirm.push(lowercase);
  }

  var uppercase = confirm('Do you want to include uppercase letters?');
  if (uppercase) {
    masterCharList += getUpperChar;
  } else {
    trackerConfirm.push(uppercase);
  }

  var symbols = confirm('Do you want to include symbols?');
  if (symbols) {
    masterCharList += getSymbolChar;
  } else {
    trackerConfirm.push(symbols);
  }

  // CHECK | AT LEAST 1 TYPE ---------------------------------------
  if (trackerConfirm.length === 4) {
    alert('💔  Try Again! 💔 \r\n At least 1 type needs to be selected.');
    return '';
  }

  var password = '';

  for (let i = 0; i < length; i++) {
    password += masterCharList[Math.floor(Math.random() * masterCharList.length)];
  }
  return password;
}

// ----------------------------------------------------------------
// RANDOM CHARACTER GENERATORS ------------------------------------
// ----------------------------------------------------------------

function getNumberChar() {
  var numbersList = '0123456789';
  return numbersList[Math.floor(Math.random() * numbersList.length)];
}

function getLowerChar() {
  var lowersList = 'abcdefghijklmnopqrstuvwxyz';
  return lowersList[Math.floor(Math.random() * lowersList.length)];
}

function getUpperChar() {
  var uppersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return uppersList[Math.floor(Math.random() * uppersList.length)];
}

function getSymbolChar() {
  var symbolsList = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
  return symbolsList[Math.floor(Math.random() * symbolsList.length)];
}
