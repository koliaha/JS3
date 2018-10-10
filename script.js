let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?",'');
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
        
        if ((typeof(a))==="string" && (typeof(a))!= null && (typeof(b))!= null
            && a != '' && b != '' && a.length < 50){
                console.log("okey");
                appData.expenses[a] = b;
            }
            else{
                i--;
            }
    }
}
chooseExpenses();
function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("бюджет на 1 день: "+ appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(){
if (appData.moneyPerDay < 100){
    console.log("Мин ур достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Сред ур достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий ур достатка");
} else console.log("Ошибка");
}
detectLevel();


function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses(){
let arr = [];
    for (let i = 0; i < 3; i++) {
      arr[i] = prompt("Статья необязательных расходов?");  
      appData.optionalExpenses[i] = arr[i];    
    }
}

chooseOptExpenses();