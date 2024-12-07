// formatDate.js

// Function to format a date
const formatDate = (date, format = 'YYYY-MM-DD') => {
  if (!(date instanceof Date)) {
    throw new Error('Invalid date object');
  }

  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if day is less than 10
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if month is less than 10
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Handle different formats
  switch (format) {
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    case 'MM/DD/YYYY':
      return `${month}/${day}/${year}`;
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    case 'YYYY-MM-DD HH:mm:ss':
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    default:
      throw new Error('Unsupported format');
  }
};

// Example usage:
const date = new Date();
console.log(formatDate(date, 'YYYY-MM-DD'));      // 2024-12-06
console.log(formatDate(date, 'MM/DD/YYYY'));      // 12/06/2024
console.log(formatDate(date, 'DD/MM/YYYY'));      // 06/12/2024
console.log(formatDate(date, 'YYYY-MM-DD HH:mm:ss'));  // 2024-12-06 14:35:22

module.exports = formatDate;
