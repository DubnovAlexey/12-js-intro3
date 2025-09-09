function sumOddDigits(arr) {
    const resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'boolean') {
            if (arr[i]) {
                resultArray.push(1);
            }
            continue;
        }
        if (!isNaN(+arr[i])) {
            let currentNumberSum = 0;
            let strNum = String(arr[i]);  // Преобразуем число в строку
            for (let j = 0; j < strNum.length; j++) {
                let digit = +strNum[j]; // Преобразуем символ цифры в число
                if (digit % 2 !== 0) { // Проверяем, является ли цифра нечетной
                    currentNumberSum += digit; // Если да, добавляем к сумме
                }
            }
            if (currentNumberSum > 0){
                resultArray.push(currentNumberSum);
            } // Добавляем итоговую сумму нечетных цифр
        }
    }
    return resultArray;
}

let arr = [123, 345, `assdf`, true, 678,];
let res = sumOddDigits(arr)
console.log(`result = ${res}`);