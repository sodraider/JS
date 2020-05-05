'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = "Введите дату в формате YYYY-MM-DD";
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце"),
    secondQuestion = prompt("Во сколько обойдется?");

appData.expenses.firstQuestion = secondQuestion;
alert(appData.budget/30);