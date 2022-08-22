

//ФУНКЦИИ

// function microwave (a) {
//    return a
// }

//console.log(microwave()) //undefined, a not known
//console.log(microwave(5)) //a equals 5
//console.log(microwave(10))  //a equals 10
//console.log(microwave(true)) //a = true
//console.log(microwave('Adele')) //a = Adele
//console.log(microwave({name: 'Adele'}))  //{ name: 'Adele' }




//function microwave (a) {
//    return typeof a
// }
//
//console.log(microwave({name: 'Adele'}))  //type object





//function calc (a , b) {
//return a + b
//}
//console.log(calc(5, 10)) //15
//console.log(calc(5))  //5 + undefined = NaN



//function calc(a, b) {
//console.log(a + b)
//return(a + b)  // после return не работает консоль
//}
//
////calc(5, 8) //will get 13
//
//let width = calc(6, 8)
//console.log(width)


//function num(a) {
//    if(a % 2) {
//    return 'нечетный'
//    }
//    return 'четный' //else не нужен, если if выполнится, второй return не выпонится
//}
//
//console.log(num(10))
//console.log(num(20))
//console.log(num(15))




//function-declaration

//console.log(calcPlus(5,6)) //можно вызвать раньше функции, function выполняется самым первым
//function calcPlus(a, b) {
//return a + b
//}
//
//


//console.log(a)
////let a = 5 //error!
//var a = 5 // undefined, HOISTING!!



//
//function calcPlus(a, b) {
//return a + b
//}
//var a = 5
//
//console.log(calcPlus(5,6)) // = 11
//console.log(calcPlus(6)) // = NaN




//function -expression
//при var не будет срабатывать функция, только при const let
//
//const calcMinus = function (a, b) {
//return a - b
//} //функция анонимная, вызывается при помощи переменной
//
//console.log(calcMinus(9,6))  //нельзя указывать до функции






//Стрелочные функции
//
//const calcMultiply = (a,b) => {
//return a * b
//}
//console.log(calcMultiply(6,8)) //48




//const calcMinus = function (a, b) {
//return arguments
//}
//console.log(calcMinus(9,6)) // [Arguments] { '0': 9, '1': 6 }




//const calcMultiply = (a,b) => {
//return arguments
//}
//console.log(calcMultiply(6,8)) //48

//выведет следующие аргументы стрелочной функции, аргументы своей области видимости,
 //в данном случае это документ main.js





//
//function calcPlus (a,b) {
//    const calcMultiply = (a,b) => {
//    return arguments
//    }
//    console.log(calcMultiply(6,8))
//    return arguments
//}
//    console.log(calcPlus(5,6))
//
 //Аргументы одинаковые, так как calcMultiply находится внутри calcPlus
//[Arguments] { '0': 5, '1': 6 }
//[Arguments] { '0': 5, '1': 6 }


//let c = 5
//const calcMultiply = (a,b) => {
//    return a + b + c
//    }
//    console.log(calcMultiply(6,8)) // 19


//
//let c = 5
//const calcMultiply = (a,b) => {
//    c = 10
//    return a + b + c
//    }
//    console.log(calcMultiply(6,8)) // = 24, ищет "с" сначала внутри себя, а потом снаружи
//    console.log(c) //= 10, не 5




//
//const calcMultiply = (a,b) => {
//    let c = 5
//    return a + b + c
//    }
//    console.log(c) //ОШИБКА, так как "с" находится внутри функции, а консоль вне
//    console.log(calcMultiply(6,8)) // = 24




//const messageHalf = (message) => {
//return message.slice(0, Math.round(message.length / 2))
//}
//console.log(messageHalf('Hi, i start learning functions'))

//
//const messageHalf = (message) => {
//if (message.includes('Hi')) {
//return 'присутствует'
//}
//return 'отсутствует'
//}
//console.log(messageHalf('Hi, i start learning functions'))
//console.log(messageHalf('Hi'))
//console.log(messageHalf('i start learning functions'))


const searchItemInArray = (arr,item) => {
if(item == 'mers') {
return 'found'
}
return 'lost'
}
console.log(searchItemInArray(['bmw', 'honda', 5, 'lexus'], 'ferrari'))













