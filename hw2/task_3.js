'use strict';
// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let day = getRandomNumber(1, 31);
(day >= 1 && day <= 10) ? console.log(`${day} - это 1 декада месяца`) : (day >= 11 && day <= 20) ? console.log(`${day} - это 2 декада месяца`) : console.log(`${day} - это 3 декада месяца`);