function integerToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];

  let roman = '';

  for (const numeral of romanNumerals) {
    while (num >= numeral.value) {
      roman += numeral.symbol;
      num -= numeral.value;
    }
  }

  return roman;
}

const number = 1994;
const romanNumber = integerToRoman(number);
console.log(romanNumber);



//()()()()()

function generateParenthesis(n) {
    const result = [];

function backtrack(l, r, s) { 
    if (s.length === 2 * n) {
        result.push(s);
        return;
    }

    if (l < n) {
        backtrack(l + 1, r, s + '(');
    }

    if (r < l) {
        backtrack(l, r + 1, s + ')');;
    }
}

backtrack(0, 0, '');
return result;
}


console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
