'use strict';


// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// console.log(leftBorderWidth);
// console.log(second);
// var number = 5; infinity NaN
// var string = "Hello!";
// var sym = Sumbol();
// var boolean = true;
// null;
// undefined;
// var obj ={};

//  let persone = {
//      name: "Jhone",
//      age: 25,
//      isMarried: false
//  };

//  console.log(persone.name);
//  console.log(persone.name);
//  alert(persone["name"]);
//  var arr = ['plum.png','orange.png','apple.bmp'];

//  console.log(arr[0]);
//  console.log(arr[2]);

let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);