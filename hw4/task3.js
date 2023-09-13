// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const myArr = Array.from({ length: 5 }, (el, _) => Math.trunc(Math.random() * 10));
console.log(myArr);

const sum = myArr.reduce((acc, el) => acc + el, 0);
console.log(sum);

const min = Math.min(...myArr);
console.log(min);

let hasThree = false;
myArr.forEach(function (el) {
    if (el === 3) {
        hasThree = true;
    }
})

if (hasThree) {
    console.log('Да, в этом массиве есть число 3');
} else {
    console.log('Нет, в этом массиве отсутствует число 3');
}