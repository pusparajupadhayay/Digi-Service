// validateEmail.js

// Function to validate email address
const validateEmail = (email) => {
  // Regular expression to check email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Test the email against the regex pattern
  return emailRegex.test(email);
};

// Example usage
const email1 = "example@example.com";
const email2 = "invalid-email.com";

console.log(validateEmail(email1));  // true
console.log(validateEmail(email2));  // false

module.exports = validateEmail;
