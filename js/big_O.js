// Оцениваем сложность алгоритма

// O(1) - «одна операция для всех возможных входных данных».

// const nums = [1,2,3,4,5];

// Для того чтобы получить первый элемент мы используем index

// const firstNumber = nums[0];

// Не важно сколько элементов внутри массива находится, самое главное это
// сколько операций нужно выполнить для того чтобы получить определенный элемент
// в данном случае нам нужна всего 1 оперца, вне зависимости от того сколько элементов
// лежит внутри массива

// О(1) - является самым эффективным так как его время выполнения является констатнтым

// -----------------

// O(n) - Итерации и «время порядка n»

// Ищем сумму элементов
// const nums = [1, 2, 3, 4, 5];
// let sum = 0;
//
// for(let num of nums){
//     sum += num;
// }

// Думаем: сколько операций на ввод нам потребуется?

// Здесь нужно перебрать все элементы, т.е. операция на каждый элемент.
// Чем больше массив, тем больше операций.

// O(n) - называется 'линейным' или 'линейно масштабируемым'


// Выполним эту задачу другим образом и изменим сложность алгоритма

// мы можем использовать формулу  S = n(n+1)/2  если мы знаем что все элементы массива
// упорядочены и отсортированы

// const sumContiguousArray = function(ary){
//     //get the last item
//     const lastItem = ary[ary.length - 1];
//     //Gauss's trick
//     return lastItem * (lastItem + 1) / 2;
// }
// const nums = [1,2,3,4,5];
// const sumOfArray = sumContiguousArray(nums);

// Такой алгоритм гораздо эффективнее O(n),
// более того он выполняется за «постоянное/константное время», т.е. это O(1).

// -------------


// O(n^2) - Не самые лучшие решения
// напишем функцию которая проверяет массив на наличие дублей

// const hasDuplicates = function (num) {
//     //loop the list, our O(n) op
//     for (let i = 0; i < nums.length; i++) {
//         const thisNum = nums[i];
//         //loop the list again, the O(n^2) op
//         for (let j = 0; j < nums.length; j++) {
//             //make sure we're not checking same number
//             if (j !== i) {
//                 const otherNum = nums[j];
//                 //if there's an equal value, return
//                 if (otherNum === thisNum) return true;
//             }
//         }
//     }
//     //if we're here, no dups
//     return false;
// }
// const nums = [1, 2, 3, 4, 5, 5];
// hasDuplicates(nums);//true

// Мы уже знаем что итерирование массива это O(n).
// . У нас есть вложенный цикл, для каждого элемента мы еще раз итерируем —
// т.е. O(n^2) или «сложность порядка n квадрат».

// Алгоритмы с вложенными циклами по той же коллекции всегда O(n^2).

// ---------


//  O(log n) - «Сложность порядка log n»

// Зачастую мы можем уменишить сложность алгоритма
// например если нам нужно искать какое-то определенное число в массиве
// мы можем применить алогоритм "Бинарный поиск" см. картинку в папке images


// Упрощаем алгоритм с поиском дублей O(n^2) до O(n log n)

const nums = [1, 2, 3, 4, 5];
const searchFor = function (items, num) {
    //use binary search!
    //if found, return the number. Otherwise...
    //return null. We'll do this in a later chapter.
}
const hasDuplicates = function (nums) {
    for (let num of nums) {
        //let's go through the list again and have a look
        //at all the other numbers so we can compare
        if (searchFor(nums, num)) {
            return true;
        }
    }
    //only arrive here if there are no dups
    return false;
}

