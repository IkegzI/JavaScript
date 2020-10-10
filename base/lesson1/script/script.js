// сомместимый со старыми браузерами
"use strict"; 


let number = 5; // измененяемое
const leftBorderWidth = 1; // не изменяемое

console.log(number);
console.log(leftBorderWidth);

let numberLine = 11;
console.log(`Интерполяция строки ${numberLine}`);

//Унарный плюс
let a = 4;
console.log(a + +'5');

let incr = 10,
    decr = 10;
// префиксная запись
++incr;
--decr;
    // постфиксная запись
incr++;
decr--;

console.log(`Инкримент(увеличение на 1) ${incr}`);
console.log(`Декримент(уменьшение на 1) ${decr}`);
console.log(`Инкримент(увеличение на 1) ${incr++}`);
console.log(`Декримент(уменьшение на 1) ${decr--}`);
console.log(`Инкримент(увеличение на 1) ${++incr}`);
console.log(`Декримент(уменьшение на 1) ${--decr}`);

// арифметика
console.log(`Остаток от деления ${5%2}`);

// сравнения
console.log(`Сравнение ${4*2 == '8'}`);
console.log(`Строгое сравнение ${4*2 === '8'} учитывает так же типы данных`);
console.log(`Оператор И (&&) ${false && true}`);
console.log(`Оператор ИЛИ (||) ${false || '8'}`);


