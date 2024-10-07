function calculatePasswordStrength(password) {
  // Initialize strength levels
  let strength = 0;
  let hasLowercase = false;
  let hasUppercase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  // Check password length
  if (password.length == 0 || password.includes(" ")) {
    strength = 0; // Enter Valid Password
  } else if (password.length < 8) {
    strength = 1; // Weak
  } else if (password.length >= 8 && password.length <= 12) {
    strength = 2; // Medium
  } else if (password.length > 12 && password.length <= 16) {
    strength = 3; // Strong
  } else if(password.length>=16){
    strength = 5;
  }

  // Check for character types
  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= "a" && char <= "z") {
      hasLowercase = true;
    } else if (char >= "A" && char <= "Z") {
      hasUppercase = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else {
      hasSpecialChar = true;
    }
  }

  // Update strength levels based on character types
  if (hasLowercase && hasUppercase && hasNumber && hasSpecialChar) {
    strength = 4; // Very Strong
  } else if (
    (hasLowercase && hasUppercase && hasNumber) ||
    (hasLowercase && hasUppercase && hasSpecialChar)
  ) {
    strength = 3; // Strong
  } else if (hasLowercase && hasUppercase) {
    strength = 2; // Medium
  }

  // Return the strength level
  return strength;
} 

let pass = document.getElementById("password");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  let password = pass.value;
  let strength = calculatePasswordStrength(password);
  let strengthText = "";

  switch (strength) {
    case 5:
      strengthText = "Too Long Password";
      break;
    case 4:
      strengthText = "Very Strong";
      break;
    case 3:
      strengthText = "Strong";
      break;
    case 2:
      strengthText = "Medium";
      break;
    case 1:
      strengthText = "Weak";
      break;
    case 0:
      strengthText = "Enter Valid Password";
      break;
    default:
      strengthText = "";
  }

  document.getElementById("password-strength").innerHTML = strengthText;
  if (strength == 4) {
    document.getElementById("password-strength").style.color = "green";
  } else if (strength == 3) {
    document.getElementById("password-strength").style.color = "blue";
  } else if (strength == 2) {
    document.getElementById("password-strength").style.color = "orange";
  } else if (strength == 1) {
    document.getElementById("password-strength").style.color = "red";
  } else if (strength == 0 || strength == 5) {
    document.getElementById("password-strength").style.color = "#47457a";
  }
});
