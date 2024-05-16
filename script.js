const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultDiv = document.getElementById('result');

function isPalindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

function checkPalindrome() {
  const inputText = textInput.value.trim();

  if (!inputText) {
    alert('Please input a value'); 
    return;
  }

  const isPalindromicText = isPalindrome(inputText);
  const resultText = `${inputText} is ${isPalindromicText ? 'a' : 'not a'} palindrome`;
  resultDiv.textContent = resultText;
}

checkBtn.addEventListener('click', checkPalindrome);