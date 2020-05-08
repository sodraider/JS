'use strict';
let money,
    time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", '');
    time =  prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце",''),
            b = prompt("Во сколько обойдется?",'');
        
        if (typeof(a)==='string' && typeof(a) != null && typeof(b) != null  && a != '' && b != '' && a.length < 50 ){
            console.log("done");
            appData.expenses[a] =  b;
            console.log(i);
            
        } else {
            console.log("Bad input");
            i--;
        }
    }
}

chooseExpenses();

// let i = 0;
// while (i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце",''),
//         b = prompt("Во сколько обойдется?",'');
    
//     if (typeof(a)==='string' && typeof(a) != null && typeof(b) != null  && a != '' && b != '' && a.length < 50 ){
//         console.log("done");
//         appData.expenses[a] =  b;
//     } else {

//     }
//     i++;
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце",''),
//         b = prompt("Во сколько обойдется?",'');
    
//     if (typeof(a)==='string' && typeof(a) != null && typeof(b) != null  && a != '' && b != '' && a.length < 50 ){
//         console.log("done");
//         appData.expenses[a] =  b;
//         i++;
//     } else {
//         console.log("Bad input");
//     }
    
// } while (i < 2);

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Ваш ежедневный бюджет:" + appData.moneyPerDay);
}

function detectLevel(){
    if (appData.moneyPerDay < 100){
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
}

function checkSavings (){
    if (appData.savings == true){
        let save = +prompt("Введите сумму накоплений", ''),
            percent = +prompt("Под какой процент?");
        appData.moneyIncome = save*percent/100/12;
        alert("Ваш ежемесячный доход: " + appData.moneyIncome);
    }
}
checkSavings();

function chooseOptExpenses (){
    for (let i = 1; i <= 3; i++){
    appData.optionalExpenses[i] = prompt("Статья необязательных расходов",'');
    }
}