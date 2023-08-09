//01

function majorityElements(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : - 1;
    }
    return candidate;
}


console.log(majorityElements([3,2,3]));
console.log(majorityElements([2, 2, 1, 1, 1, 2, 2]));



//02
function romanToInt(roman) {
    const romanToInteger = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanToInteger[roman[i]];

        if (currentValue >= prevValue) {
            total += currentValue;
        } else {
            total -= currentValue;
        }

        prevValue = currentValue;
    }

    return total;
}

console.log(romanToInt( "MCMXCIV"));



//03
function pascal(numRows) {
    if (numRows <= 0) {
    return [];
    }
    if (numRows == 1) {
    return [[1]];
    }
   const prev = pascal(numRows - 1);
   const last = prev[prev.length - 1];
   const next = [1];
   for (let i = 0; i < last.length - 1; i++) {
    next.push(last[i] + last[i+1]);
    }
    next.push(1);
    prev.push(next);
    return prev;
}

console.log(pascal(5));



//04
function maxProfit(prices) {
let profit = 0;
for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
        const currentProfit = prices[j] - prices[i];

        if (currentProfit > profit) {
            profit = currentProfit;
        }
    }
}
return profit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));


//greedy method
function greedyMaxProfit(priceList) {
    let maxProfit = 0;
    let minBuyPrice = Infinity;

    for (let i = 0; i < priceList.length; i++) {
        const buyPrice = priceList[i];
        if (minBuyPrice > buyPrice) {
            minBuyPrice = buyPrice;
        }
        const profit = buyPrice - minBuyPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit
}

console.log(greedyMaxProfit([7,1,5,3,6,10]));