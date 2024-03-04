//Створіть об’єкт, що описує автомобіль (виробник, модель, рік
//випуску, середня швидкість), і наступні функції для роботи з цим
//об’єктом.
//1. Функція для виведення інформації про автомобіль на
//екран.
//2. Функція для підрахунку необхідного часу для подолання
//переданої відстані із середньою швидкістю. Враховуйте,
//що через кожні 4 години дороги, водієві необхідно робити
//перерву на 1 годину.
//--
//let car = 
//{
//    maker: "Nissan",
//    model: "Skyline",
//    year: 1999,
//    medium_speed: 116
//};
//function showInfo()
//{
//    console(`Maker: ${car.maker}`);
//    alert(`Model: ${car.model}`);
//    alert(`Year: ${car.year}`);
//    alert(`Medium speed: ${car.medium_speed}`);
//}
//function calcTime()
//{
//    let time = distance / car.medium_speed;
//    let breaks = Math.floor(time / 4);
//    time += breaks;
//    return time;
//}
//showInfo();
//let distance = 500;
//let time = calcTime;
//alert(`Distance travel time: ${distance} km: ${time} hours`);


//Створіть об’єкт, що зберігає окремий чисельник і знаменник
//дробу, і наступні функції для роботи з цим об’єктом.
//1. Функція додавання 2 об’єктів-дробів.
//2. Функція віднімання 2 об’єктів-дробів.
//3. Функція множення 2 об’єктів-дробів.
//4. Функція ділення 2 об’єктів-дробів.
//5. Функція скорочення об’єкта-дробу.
//--
//let fraction = 
//{
//    numerator: 1,
//    denominator: 1
//};
//function mostHighDiv(a, b) 
//{
//    if (b === 0) 
//    {
//        return a;
//    }
//    return mostHighDiv(b, a % b);
//}
//function addition(fraction1, fraction2) 
//{
//    let newNumerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
//    let newDenominator = fraction1.denominator * fraction2.denominator;
//    return reduce({numerator: newNumerator, denominator: newDenominator});
//}
//function subtraction(fraction1, fraction2) 
//{
//    let newNumerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
//    let newDenominator = fraction1.denominator * fraction2.denominator;
//    return reduce({numerator: newNumerator, denominator: newDenominator});
//}
//function multiple(fraction1, fraction2)  
//{
//    let newNumerator = fraction1.numerator * fraction2.numerator;
//    let newDenominator = fraction1.denominator * fraction2.denominator;
//    return reduce({numerator: newNumerator, denominator: newDenominator});
//}
//function division(fraction1, fraction2) 
//{
//    let newNumerator = fraction1.numerator * fraction2.denominator;
//    let newDenominator = fraction1.denominator * fraction2.numerator;
//    return reduce({numerator: newNumerator, denominator: newDenominator});
//}
//function reduce(fraction) 
//{
//    let divisor = mostHighDiv(fraction.numerator, fraction.denominator);
//    return 
//    {
//        numerator: fraction.numerator / divisor,
//        denominator: fraction.denominator / divisor
//    };
//}
//let fraction1 = { numerator: 1, denominator: 2 };
//let fraction2 = { numerator: 1, denominator: 3 };
//let sum = addition(fraction1, fraction2);
//alert(`Sum of fractions: ${sum.numerator}/${sum.denominator}`);
//let difference = deduction(fraction1, fraction2);
//alert(`Difference of fractions: ${difference.numerator}/${difference.denominator}`);
//let product = multiple(fraction1, fraction2);
//alert(`Product of fractions: ${product.numerator}/${product.denominator}`);
//let portion = division(fraction1, fraction2);
//alert(`Portion of fractions: ${portion.numerator}/${portion.denominator}`);


//Створіть об’єкт, що описує час (години, хвилини, секунди), і
//наступні функції для роботи з цим об’єктом.
//1. Функція виведення часу на екран.
//2. Функція зміни часу на передану кількість секунд.
//3. Функція зміни часу на передану кількість хвилин.
//4. Функція зміни часу на передану кількість годин.
//Враховуйте те, що в останніх 3 функціях при зміні однієї ча-
//стини часу, може змінитися й інша. Наприклад: якщо до часу
//«20:30:45» додати 30 секунд, то має вийти «20:31:15», а не «20:30:75».
//--
let time = 
{
    hours: 0,
    mins: 0,
    secs: 0
};
function showTime() 
{
    alert(`${time.hours}:${time.mins}:${time.secs}`);
}
function changeToSecs(secs) 
{
    time.secs += secs;
    while (time.secs >= 60) 
    {
        time.secs -= 60;
        time.mins++;
    }
    while (time.mins >= 60) 
    {
        time.mins -= 60;
        time.hours++;
    }
    while (time.hours >= 24) 
    {
        time.hours -= 24;
    }
}
function changeToMins(mins) 
{
    changeToSecs(mins * 60);
}
function changeToHours(hours) 
{
    changeToSecs(hours * 3600);
}
showTime();
changeToSecs(30);
showTime();
changeToMins(15);
showTime();
changeToHours(2);
showTime();
