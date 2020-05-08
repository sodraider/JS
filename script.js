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
    savings: true,
    chooseExpenses: function(){
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
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ваш ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100){
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000){
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt("Введите сумму накоплений", ''),
                percent = +prompt("Под какой процент?");
            appData.moneyIncome = save*percent/100/12;
            alert("Ваш ежемесячный доход: " + appData.moneyIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i <= 3; i++){
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов",'');
        }
    },
    chooseIncome: function(){
        let item = prompt("Перечислите через запятую источники заработка","");
        while (typeof(item) != 'string' || item == '' || item == null){
            alert("Введены некорректные данные!");
            item = prompt("Перечислите через запятую источники заработка","");
        }
        appData.income = item.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        // console.log("Способы получения доп. заработка: ");
        let list = '';
      appData.income.forEach(function(item,index){
            //console.log(index+1, item);
            list += "\n" + (index + 1) + " " + item;
        });
        alert("Способы получения доп. заработка: " + list);
    }
};
console.log("Наша программа включает в себя данные: ");
for (let key in appData){
    console.log(key);
}
