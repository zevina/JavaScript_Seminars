// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function countTwoNums(num1, num2, operation) {
    switch (operation) {
        case "+":
            return sum(num1, num2);
        case "-":
            return sub(num1, num2);
        case "*":
            return mul(num1, num2);
        case "/":
            return div(num1, num2);
        default:
            break;
    }

    function sum(num1, num2) {
        return num1 + num2;
    }
    function sub(num1, num2) {
        return Math.max(num1, num2) - Math.min(num1, num2);
    }
    function mul(num1, num2) {
        return num1 * num2;
    }
    function div(num1, num2) {
        return num1 / num2;
    }
}

const userNumber1 = +prompt("Введите первое число: ");
const userNumber2 = +prompt("Введите второе число: ");
const userOperation = prompt("Введите операцию: ");

switch (userOperation) {
    case "+":
        console.log(
            `Результат сложения чисел ${userNumber1} и ${userNumber2}: ${countTwoNums(
                userNumber1,
                userNumber2,
                "+"
            )}`
        );
        break;
    case "-":
        console.log(
            `Результат вычитания чисел ${userNumber1} и ${userNumber2}: ${countTwoNums(
                userNumber1,
                userNumber2,
                "-"
            )}`
        );
        break;
    case "*":
        console.log(
            `Результат умножения чисел ${userNumber1} и ${userNumber2}: ${countTwoNums(
                userNumber1,
                userNumber2,
                "*"
            )}`
        );
        break;
    case "/":
        console.log(
            `Результат деления чисел ${userNumber1} и ${userNumber2}: ${countTwoNums(
                userNumber1,
                userNumber2,
                "/"
            )}`
        );
        break;

    default:
        console.log("Что-то пошло не так!");
        break;
}
