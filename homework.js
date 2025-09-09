const printArray = arr => {
    console.log('==========');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==========');
}
// TODO Homework 1 reverse array arr. NB! reverse is not a print
// const reverseArray = arr => {
//         const newArr = [];
//         for (let i = arr.length - 1; i >= 0; i--) {
//             newArr.push(arr[i]);
//         }
//         return newArr;
//     }
const reverseArray = arr => {

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}


// TODO Homework 2 search value in array arr. NB! return index or -1 if not found
const search = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;

}
// TODO Homework 3 (Advanced) bubble sort arr with comparator
// comparator - function(a, b) and return positive number if a > b, negative if a < b, 0 if a = b

// const bubbleSort = (arr, comparator) => {
//     let n = arr.length;
//     let flag; // Флаг, чтобы узнать, были ли обмены на последнем проходе
//     do {
//         flag = false; // Сбрасываем флаг в начале каждого прохода
//         for (let i = 0; i < n - 1; i++) {
//             // Используем компаратор для сравнения соседних элементов
//             if (comparator(arr[i], arr[i + 1]) > 0) {
//                 // Если comparator(a, b) > 0, значит a > b (по логике компаратора)
//                 // И нам нужно поменять их местами
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 flag = true; // Обмен произошёл
//             }
//         }
//         n--;
//     } while (flag);
// }

const bubbleSort = (arr, comparator) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19];
printArray(primes); // 2, 3, 5, 7, 11, 13, 17, 19
reverseArray(primes);
printArray(primes); // 19, 17, 13, 11, 7, 5, 3, 2
let index = search(primes, 11);
console.log(index); //
index = search(primes, 10);
console.log(index); //
const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);
bubbleSort(arr, (a, b) => b - a);
printArray(arr); // 9, 9, 5, 4, 2, 2, 2, 1, 1, 0




