function isPalindrome(word) {
    // Remove spaces and convert to lowercase for a case-insensitive check
    word = word.toLowerCase().replace(/\s/g, '');
  
    // Base case: an empty word or a word with a single character is a palindrome
    if (word.length <= 1) {
      return true;
    }
  
    // Compare characters at the ends of the word
    if (word[0] === word[word.length - 1]) {
      // Recursively check the substring without the first and last characters
      return isPalindrome(word.slice(1, word.length - 1));
    } else {
      return false; // Not a palindrome
    }
  }
  
  // Example usage:
  console.log(isPalindrome("gag"));     // Output: true
  console.log(isPalindrome("kayak"));   // Output: true
  console.log(isPalindrome("php"));     // Output: true
  console.log(isPalindrome("radar"));   // Output: true
  console.log(isPalindrome("hello"));   // Output: false
  