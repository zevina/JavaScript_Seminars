// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const num1 = +prompt("Введите первое число: ");
const num2 = +prompt("Введите второе число: ");
const num3 = +prompt("Введите третье число: ");

function findMaxOfThreeNums(number1, number2, number3) {
    return Math.max(number1, number2, number3);
}

console.log(
    `Максимальное из введенных чисел: ${findMaxOfThreeNums(num1, num2, num3)}`
);
