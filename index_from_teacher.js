// console.log('Текст из script.js');

//  let a = 5;
// a = 7;
// console.log(a);

// let b = 1 + 2 + 3;
// console.log(b);

// const c = 10;
// const d = 2;
// const sum = c + d;
// const sub = c - d;
// const mult = c * d;
// const div = c / d;
// const result = sum + sub + mult

// console.log(result);

// const a = 1.5;
// const b = 0.75;
// const c = a + b;
// console.log(c);

// const d = 5;
// const num = d * (-1);
// console.log(num);

// const surname = "Yakimkov";
// const a = "Java";
// const b = "Script";
// console.log(`${a}${b}`);

// const ab = 'Hello';
// const cd = 'World';
// console.log(ab + ' ' + cd + ' !');

// Number()
// String()
// Boolean()
// parseFloat()
// parseInt()

// console.log(typeof parseFloat('3.14'));
// console.log(typeof parseInt('3.14'));

// const youAge = +prompt('Какой Ваш возраст');
// const youName = prompt('Как Вас зовут');
// alert(`добро пожаловать на сайт ${youName} с возрастом ${youAge}`)

// console.log(Number([]));
// console.log(Number([3]));

// console.log(1/0 === 1/-0);
// console.log(0/0);

// console.log(5 === -5);

// const num_1 = prompt('Введите число')
// const num_2 = prompt('Введите число')
// console.log(+num_1 + +num_2);

// const num = 1;

// if (num > 15) {
//     console.log(`${num} больше 15`);
// } else if (num < 15) {
//     console.log(`${num} меньше 15`);
// } else {
//     console.log(`${num} равно 15`);
// }

// switch (true) {
//   case num > 15:
//     console.log(`${num} больше 15`);
//     break;
//   case num < 15:
//     console.log(`${num} меньше 15`);
//     break;
//   default:
//     console.log(`${num} равно 15`);
//     break;
// }

// const num = 1;
// console.log(
//     (num > 15) ? `${num} больше 15`
//     : (num < 15) ? `${num} меньше 15`
//     : `${num} равно 15`
// );

// console.log(1_000_000);

/* Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
Создайте функцию которая возводит переданное число в квадрат
Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
 */

// function greet (firstName, lastName, age) {
//    return `Привет ${firstName} ${lastName} с возрастом ${+age}`

// }
// greet('Vladimir', 'Yakimkov', 33);

// function x() {
//   const a = 5;
//   function y() {
//     return a + 10;
//   }
//   return y;
// }

// const res = x()
// console.log(res());

// function getCount() {
//   let count = 0;
//   return function () {
//     count++;

//     return function (x) {
//       count += x;
//       console.log(count);
//     };
//   };
// }

// const incr = getCount(); // return func count + 1
// const addValue = incr();
// console.log(incr);
// console.log(addValue);
// addValue(3);
// addValue(3);
// addValue(3);

// function sumThreeNumbers(num1, num2, num3, num4) {
//   if (num4 === undefined) {
//     return num1 + num2 + num3;
//   } else {
//     return sumThreeNumbers(num1 + num2,num3, num4);
//   }
// }

// console.log(sumThreeNumbers(2, 4, 6, 8));

// function squareRoot (num) {
//     return Math.sqrt(num)
// }

// const a = squareRoot(4)
// const b = squareRoot(9)
// const c = a + b;
// console.log(c);

// const findMin = (a,b) => Math.min(a,b);
// console.log(findMin(1,5));

// function findMin (a,b) { return Math.min(a,b);}
// console.log(findMin(1,5));

// function createGreetFunction() {
//   const now = new Date();
//   const hours = now.getHours();
//   return function (name) {
//     if (hours >= 6 && hours < 12) {
//       return `Доброе утро ${name}`;
//     } else if (hours >= 12 && hours < 18) {
//       return `Добрый день ${name}`;
//     } else if (hours >= 18 && hours < 22) {
//       return `Добрый вечер ${name}`;
//     } else {
//       return `Доброй ночи ${name}`;
//     }
//   };
// }

// const greet = createGreetFunction();
// console.log(greet("Владимир"));

// function createGreetFunction(name) {
//     const now = new Date();

//     const hours = now.getHours();

//       if (hours >= 6 && hours < 12) {
//         return `Доброе утро ${name}`;
//       } else if (hours >= 12 && hours < 18) {
//         return `Добрый день ${name}`;
//       } else if (hours >= 18 && hours < 22) {
//         return `Добрый вечер ${name}`;
//       } else {
//         return `Доброй ночи ${name}`;
//       }
//     };

//   console.log(createGreetFunction("Владимир"));

// function createGreetFunction() {
//   const now = new Date();
//   const hours = now.getHours();

//   function greet(name, hours) {
//     if (hours >= 6 && hours < 12) {
//       return `Доброе утро ${name}`;
//     } else if (hours >= 12 && hours < 18) {
//       return `Добрый день ${name}`;
//     } else if (hours >= 18 && hours < 22) {
//       return `Добрый вечер ${name}`;
//     } else {
//       return `Доброй ночи ${name}`;
//     }
//   }

//   return function (name) {
//     return greet(name, hours);
//   };
// }

// const greet = createGreetFunction();
// console.log(greet("Владимир"));

// function createGreetFunction(name) {
//   const now = new Date();
//   const hours = now.getHours();

//   function greeting(hours) {
//     if (hours >= 6 && hours < 12) {
//       return `Доброе утро ${name}`;
//     } else if (hours >= 12 && hours < 18) {
//       return `Добрый день ${name}`;
//     } else if (hours >= 18 && hours < 22) {
//       return `Добрый вечер ${name}`;
//     } else {
//       return `Доброй ночи ${name}`;
//     }
//   }

//   return greeting(hours);
// }

// console.log(createGreetFunction("Владимир"));

// function createGreetFunction(name) {
//   const now = new Date();
//   const hours = now.getHours();
//   const greeting =
//     hours >= 6 && hours < 12
//       ? `Доброе утро ${name}`
//       : hours >= 12 && hours < 18
//       ? `Добрый день ${name}`
//       : hours >= 18 && hours < 22
//       ? `Добрый вечер ${name}`
//       : `Доброй ночи ${name}`;

//   return greeting;
// }

// console.log(createGreetFunction("Владимир"));

/* Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.
Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.
Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3. */

// const myArray = [1,2,3];
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// for (const i of myArray) {
//     console.log(i);
// }

// myArray.forEach(((_,i,arr) => {
//     console.log(i, arr);
// }))

// const people = 48;
// const a = 'Ivan'

// const obj = {
//     people
// }

// const arr = Array.from({length: obj.people}, (_,i) => `${a} ${i}`)
// arr[10] = {name: 'Vladimir'}
// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//   arr[i]++;
// }

// for (const el of arr) {
  
//   console.log(el);
// }
// console.log(el);
// arr.forEach((el) => {
//   el++;
//   console.log(el);
// });



// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// arr.pop()
// arr.push()
// console.log(arr);

// let num = 1;
// let count = 1;
// let a = ++count
// console.log(a);
// console.log(count++);

// while (num <= 1000) {
//     num *= 3;
//     ++count
// }

// console.log(`Результат произведений равен ${num}, а итераций в цикле ${count}`);




// const sum = Array.from({length: 50}, (_,i) => 2 + i * 2)
// .reduce((acc, el) => acc + el, 0)
// console.log(sum);

// arr.filter((el) => el > 3 && el < 10).forEach(el => console.log(el))



// const arr = Array(50).fill(0)
// const sum = arr.map((_,i) => 2 + i * 2).reduce((acc, el) => acc + el, 0)
// console.log(sum);



// const sum = Array.from({length: 9}, (_,i) => i + 1).join('-')
// console.log(`-${sum}-`);




// arr.forEach(function(el, ind) {
//     if (el === 0) {
//         arr.splice(ind)
//     }
    
// })
// console.log(arr);

// const arr = [1,2,3,4,5,6,7,8];
// const res1 = arr.filter((el) => el % 2 === 0).forEach((el) => console.log(el * el))

// const res2 = arr.filter((el) => el % 3 === 0).forEach((el) => console.log(el * el * el))

