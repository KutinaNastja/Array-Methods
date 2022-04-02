/*

Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти
Нужно использовать reduceRight 

*/

// var arr = [1, 2, 3, 0, 4, 5, 6];

// let sumi = false;
// let index = 0;

// let b = arr.reduceRight((prev, item) => {
//   if (!sumi && prev > 10) {
//     sumi = index;
//   }
//   index++;
//   return (prev += item);
// }, 0);
// console.log(sumi);

/*

Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел. 

*/

// let arr = [5, 6, 7, 8, 9];

// let arr2 = [];

// arr.forEach((element) => {
//   arr2.push(element ** 2);
// });
// console.log(arr2);

/*

Дан массив с числами. Найдите сумму этих чисел.

*/

// sum = 0;
// var arr = [5, 6, 7, 8, 9];

// arr.forEach((el) => {
//   sum += el;
// });
// console.log(sum);

/*

Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

*/

// let arr = [5, 6, 7, 8, 9].map((el) => {
//   return el ** 2;
// });
// console.log(arr);

/*

Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

*/

// let arr = [5, 6, 7, 8, 9];

// let arr2 = arr.every((el) => {
//   if (el > 0) {
//     return true;
//   }
//   return false;
// });
// console.log(arr2);

// let arr3 = arr.some((el) => {
//   if (el < 0) {
//     return false;
//   }
//   return true;
// });
// console.log(arr3);

/*

Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.

*/

// let arr = [5, 6, -7, 8, 9];

// let arr2 = arr.some((el) => el < 0);
// console.log(arr2);

/*

Дан массив с числами. Оставьте в нем только отрицательные числа.

*/

// let arr = [1, -3, 5, 6, -7, 8, 9, -11].filter((el) => el < 0);
// console.log(arr);

/*

Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

*/

// let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'].filter((el) => el.length > 5);
// console.log(arr);

/*

Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
*/

// let newArr =[1, 'string', [3, 4], 5, [6, 7]].filter((el) => Array.isArray(el));
// console.log(JSON.stringify(newArr));

/*

Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

*/

// let arr = [5, -3, 6, -5, 0, -7, 8, 9].filter((el) => el < 0);
// console.log(arr.length);

/*

Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел. 

*/

let arr =  [1, -2, 3, 0, 4, -5, 6, -11].filter((el) => el > 0).map((el) => el ** (1/2))
console.log(arr);