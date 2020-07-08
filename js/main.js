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

let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};



for (let i = 0; i < 2; i++){
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');

	if ( (typeof(a) )==='string' && (typeof(a)) != null && (typeof(b)) != null
	&& a != '' && b != ''&& a.length <50) {

		console.log("done");
		appData.expenses[a] = b;
	}	
	else {
		console.log ("bad result");
        i--;
	}
};

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("ежедневный бюджет: " + appData.moneyPerDay);


if (appData.moneyPerDay < 100) {
	console.log("Максимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний Уровень достатка");
} else if (appData.moneyPerDay > 2000){
	console.log("Высокий Уровень достатка");
} else {
	console.log("Ошибка!")
}