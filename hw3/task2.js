// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const userMoney = +prompt("Введите сумму: ");
countSalary(userMoney);

function countSalary(money) {
    if (isNaN(money)) {
        return console.log(`Значение задано неверно`);
    } else {
        const tax = money * 0.13;
        return console.log(
            `Размер заработной платы за вычетом налогов (${tax}) равен ${money - tax}`
        );
    }
}
