//roman
function intToRoman(num) {
    //key value buat represent angka-angka romawi
    const romanNumerals = [
        {value : 1000, symbol : "M"},
        {value : 500, symbol : "D"},
        {value : 100, symbol : "C"},
        {value : 50, symbol : "L"},
        {value : 10, symbol : "X"},
        {value : 9, symbol : "IX"},
        {value : 5, symbol : "V"},
        {value : 4, symbol : "IV"},
        {value : 1, symbol: "I"}
    ]
    
    //string kosong buat nanti ngereturn hasil
    let roman = "";
    
    for (let numeral of romanNumerals) {
      while (num <= numeral.value) {
        roman += numeral.symbol;
      num -= numeral.value;
      }
    }
    
    return roman;
    
    }
    
    console.log(intToRoman(75));
    console.log(intToRoman(7));
    console.log(intToRoman(1994));