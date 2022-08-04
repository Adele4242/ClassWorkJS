//first
let a = 'Test'

//if (a === 'test'){
//console.log(true)
//}else {
//console.log(false)
//}

a === 'test' ? console.log('Верно') : console.log('Неверно')

switch(a) {
case 'test' : console.log('Верно')
break
default : console.log('Неверно')
}


//second
let number
data = false
data === true ? number = 2 : number = 3
console.log(number)


//third
//
// let time = prompt('Когда вы придете?')
//
//switch (time){
//    case "23:00":
//    case "00:00":
//    case "01:00":
//    case "02:00":
//    case "03:00":
//    case "04:00":
//    case "05:00":
//    case "06:00":
//    case "07:00":
//    case "08:00": alert ("'В это время мы не работаем")
//    break
//    case "09:00":
//    case "10:00":
//    case "11:00" : alert("'Будем рады Вас видеть")
//    break
//    case "12:00" : alert ("Обед")
//    break
//    case "13:00":
//    case "14:00":
//    case "15:00":
//    case "16:00":
//    case "17:00":
//    case "18:00":
//    case "19:00":
//    case "20:00":
//    case "21:00":
//    case "22:00" : alert ("Будем рады Вас видеть")
//    break
//}


//fourth

let m = 42
//let n
//if (m > 50) {
//console.log(n = 'big')
//} else {
//console.log(n = 'small')
//}

m > 50 ? n = 'bigger' : n = 'small'
console.log(n)

//fifth

//let a1 = 5
//let a1 = 0
//let a1 = -3
//let a1 = 2

//if (a1 === 0 || a1 === 2 ) {
//console.log(a1 + 7)
//} else {
//console.log(a1 / 10)
//}

//a1 === 0 || a1 === 2 ? console.log(a1 + 7) : console.log(a1 / 10)



//sixth
//
//let person = confirm ('Are you 18?')
//if (person) {
//console.log('yes')
//} else {
//console.log('no')
//}

//person ? console.log('yes') : console.log('no')


//seventh
//
let a2 = 1
let b = 3

if (a2 <= 1 && b >= 3) {
console.log(a2 + b)
} else {
console.log(a2 - b)
}

//a2 <= 1 && b >= 3 ? console.log(a2 + b) : console.log(a2 - b)

//eighth
//
let Pasha = {
    age: 13
}

//if (Pasha.age <= 17) {
//console.log('Паша - ребенок')
//} else if (Pasha.age >= 18){
//console.log('Паша уже взрослый')
//}

Pasha.age <= 17 ? console.log('Паша - ребенок') : console.log('Паша уже взрослый')

//ninth
//
let seasons = 'август'

switch (seasons){
    case "декабрь":
    case "январь":
    case "февраль": console.log("зима")
    break
     case "апрель":
     case "март":
     case "май": console.log("весна")
     break
     case "июнь":
     case "июль":
     case "август": console.log("лето")
     break
     case "сентябрь":
     case "октябрь":
     case "ноябрь": console.log("осень")
     break
}

//tenth

//let time = 46

//switch (true){
//     case time >= 0 && time <= 15 : console.log("время относится к четверти часа")
//     break
//     case time > 15 && time <= 30 : console.log("время относится к половине часа")
//     break
//     case time > 30 && time <= 45 : console.log("время относится к 3/4 часа")
//     break
//     case time > 45 && time <= 60 : console.log("время относится к целому часу")
//     break
//     default : console.log("неизвестный диапазон")
//     break
//}

let time = 15

//if(time >= 0 && time <= 15){
//console.log("время относится к четверти часа")
//} else if (time > 15 && time <= 30) {
//console.log("время относится к половине часа")
//} else if ( time > 30 && time <= 45) {
// console.log("время относится к 3/4 часа")
// } else if(time > 45 && time <= 60) {
// console.log("время относится к целому часу")
// } else {
// console.log("неизвестный диапазон")
// }

 time >= 0 && time <= 15 ? console.log("время относится к четверти часа")
 : time > 15 && time <= 30 ? console.log("время относится к половине часа")
 : time > 30 && time <= 45 ?  console.log("время относится к 3/4 часа")
 : time > 45 && time <= 60 ?  console.log("время относится к целому часу") : console.log("неизвестный диапазон")

