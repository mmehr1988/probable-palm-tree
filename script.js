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
// CHARACTER VAR LIST
// --------------------------------------------------------------------------------------

var numbersList = '0123456789';
var lowersList = 'abcdefghijklmnopqrstuvwxyz';
var uppersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbolsList = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
var lengthMessage = 'Enter a number from 8 to 128 for password length.';

// --------------------------------------------------------------------------------------
// FUNCTION: RANDOMIZER
// --------------------------------------------------------------------------------------

function randomizer(i) {
  return `${i.charAt(Math.random() * i.length)}`;
}

// --------------------------------------------------------------------------------------
// MAIN FUNCTION: PROMPT BOX + CONFIRM BOX + FUNCTION
// --------------------------------------------------------------------------------------

function generatePassword() {
  var masterCharList = '';

  // RESERVED PASSWORD LIST FOR EACH CONFIRMED CHARACTER TYPE
  var passwordConfirmList = '';

  // TRACKER | AT LEAST 1 TYPE
  var trackerConfirm = [];

  // PROMPT BOX: LENGTH + CHECK FOR CHARACTER LENGTH
  var lengthPrompt = prompt(lengthMessage);

  // While loop as we do not know how many times user might get the it wrong.
  while (lengthPrompt == null || !lengthPrompt || lengthPrompt < 8 || lengthPrompt > 128 || !Number(lengthPrompt)) {
    if (lengthPrompt == null) {
      return '';
    } else if (!lengthPrompt) {
      alert('🚫 Did you forget to type a number?');
      lengthPrompt = prompt(lengthMessage);
    } else if (lengthPrompt > 128) {
      alert('💔  Try Again! Too long. 💔 \r\n Password length needs to be between 8 & 128.');
      lengthPrompt = prompt(lengthMessage);
    } else if (lengthPrompt < 8) {
      alert('💔  Try Again! Too short. 💔 \r\n Password length needs to be between 8 & 128.');
      lengthPrompt = prompt(lengthMessage);
    } else if (!Number(lengthPrompt)) {
      alert('🚫 You did not type a number. You typed >>>>>>>> ' + lengthPrompt);
      lengthPrompt = prompt(lengthMessage);
    }
  }

  // CONFIRM BOX: FOR SYMBOLS TO INCLUDE
  var numbersPrompt = confirm('Do you want to include numbers?');
  if (numbersPrompt) {
    masterCharList += numbersList;
    passwordConfirmList += randomizer(numbersList);
  } else {
    trackerConfirm.push(numbersPrompt);
  }

  var lowercasePrompt = confirm('Do you want to include lowercase letters?');
  if (lowercasePrompt) {
    masterCharList += lowersList;
    passwordConfirmList += randomizer(lowersList);
  } else {
    trackerConfirm.push(lowercasePrompt);
  }

  var uppercasePrompt = confirm('Do you want to include uppercase letters?');
  if (uppercasePrompt) {
    masterCharList += uppersList;
    passwordConfirmList += randomizer(uppersList);
  } else {
    trackerConfirm.push(uppercasePrompt);
  }

  var symbolsPrompt = confirm('Do you want to include symbols?');
  if (symbolsPrompt) {
    masterCharList += symbolsList;
    passwordConfirmList += randomizer(symbolsList);
  } else {
    trackerConfirm.push(symbolsPrompt);
  }

  // CONFIRM BOX: CHECK IF AT LEAST 1 SYMBOL TYPE CHOSEN
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
