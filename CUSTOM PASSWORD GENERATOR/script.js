const lengthInput = document.querySelector("#length");
const copyBtn = document.getElementById("copy");
const copyStatus = document.getElementById("copy-status");
const generateBtn = document.getElementById("generate");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$&*()_+/";
const customInput = document.getElementById("custom");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const length = parseInt(lengthInput.value);
  const hasUppercase = document.getElementById("uppercase").checked;
  const hasLowercase = document.getElementById("lowercase").checked;
  const hasNumbers = document.getElementById("numbers").checked;
  const hasSymbols = document.getElementById("symbols").checked;
  const custom = customInput.value.trim();

  if (!hasUppercase &&!hasLowercase &&!hasNumbers &&!hasSymbols) {
    alert("You must select at least one option.");
    return;
  }

  if (length < 8 || length > 20) {
    alert("Password length must be between 8 and 20 characters long.");
    return;
  }

  if (!custom) {
    alert("You must enter your name.");
    return;
  }

  if (custom.length < 3 || custom.length > 10) {
    alert("Name must be between 3 and 10 characters long.");
    return;
  }

  if (/\s/.test(custom)) {
    alert("Name cannot contain whitespace.");
    return;
  }

  let password = custom;
  let characters = "";

  if (hasUppercase) {
    characters += uppercaseLetters;
  }

  if (hasLowercase) {
    characters += lowercaseLetters;
  }

  if (hasNumbers) {
    characters += numbers;
  }

  if (hasSymbols) {
    characters += symbols;
  }

  for (let i = 0; i < length - custom.length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  document.getElementById("password").value = password;
  copyStatus.innerHTML = "Copy";
}

copyBtn.addEventListener("click", () => {
  const password = document.getElementById("password").value;
  if (!password) {
    alert("Please generate the password first.");
    return;
  }
  navigator.clipboard.writeText(password).then(() => {
    copyStatus.innerHTML = "Copied";
  });
});