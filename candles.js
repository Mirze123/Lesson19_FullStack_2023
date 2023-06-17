function birthdayCakeCandles(candles) {
    // Write your code here

    let tallestCandle = Math.max(...candles);
    return candles.filter(x=> x== tallestCandle).length;

}

console.log(birthdayCakeCandles([1,4,3,4]));