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

let arr = [5, 6, 7, 8, 9];

let arr2=[]

arr.forEach(element => {
arr2.push(element ** 2)
});
console.log(arr2);