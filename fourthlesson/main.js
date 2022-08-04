//Условное ветвление

//let name = 'Adele'
//if (name == 'Adele') {
//console.log('Guess it!')
//}


//let name = 'Adele'
//if (name == 'Adele') {
//console.log('Right!')
//} else {
//console.log('Guess it!')
//}

//let name = 'Adele'

//console.log(Boolean(name)) //true
//console.log(Boolean(2))   //true
//console.log(Boolean(0))
//console.log(Boolean({}))
//console.log(Boolean([]))
//console.log(Boolean(undefined))
//console.log(Boolean(null))
//console.log(Boolean(NaN))

//let a = 5
//if (a) {
//console.log('Right')
//} else {
//console.log('Wrong')
//}

//let a = 'sddbvdb'
//if (a.length) {
//console.log(a)
//} else {
//console.log('Wrong')
//}



let car = {
model: 'BMW',
turbo: false
}

if (car.turbo === true){
console.log('yes')
} else {
console.log('no')
}



//let a = 5
//if (a !== 5) {
//console.log('not')
//} else {
//console.log('yes')
//}

//let a = 5
//console.log(!5) //false
//console.log(!!5)  //true
//console.log(!false) //true
//console.log(!!{}) //true

//
//let person = {
//    name: 'Adele',
//    age: 24
//}
//
//if (person.name.length) {    // уже > 1,следовательно не надо указывать >1
//console.log('Succesful')
//} else {
//console.log('Fail')
//}
//
//if (person.age >= 21) {
//console.log('Succesful')
//} else {
//console.log('Fail')
//}
//


//&& = и
//console.log(false && false)  //false
//console.log(false && true)   //false
//console.log(true && false)   //false
//console.log(true && true)   //true
//
//console.log(undefined && 0) //undefined, выдает первый false результат
//console.log(1 && 5) //5, проверяет оба варианта, останавливается на последнем true


//ищет первый true
//console.log(false || false)  //false
//console.log(false || true)   //true
//console.log(true || false)   //true
//console.log(true || true)   //true


//let person = {
//    name: 'Adele',
//    age: 20
//}
//
//if (person.age > 20 && person.age < 30) {
//console.log('Go')
//} else {
//console.log('Stay')
//}
//
//if (person.age == 25 || person.age == 20) {
//console.log('Go')
//} else {
//console.log('Stay')
//}



//let person = {
//color: 'purple'
//}
//
//if (person.color == 'red') {
//    console.log('red')
//} else if (person.color == 'blue'){
//      console.log('blue')
//}  else if (person.color == 'green'){
//        console.log('green')
//  } else {
//    console.log('black')
//  }


//let a = 5
//if (a > 6) {
//    console.log('more 6')
//} else if (a > 3) {
//    console.log('more 3')
//} else if (a > 4) {
//      console.log('more 4')
//  } else {
//          console.log('none')
//      }
//

//
//let person = {
//    age: 35,
//    name: 'Oleg'
//}
//
//if (person.name = 'Ivan') {
//    console.log('Come in')
//} else if (person.name = 'Oleg') {
//    console.log('Get out')
//} else {
//          console.log('Who are you?')
//}


//
//console.log(false && true || true) //true
//console.log(false && true || false)  //false
//console.log(true && false || false)  //false


//let person = {
//    age: 35,
//    name: 'Oleg'
//}
//
//person.age > 30 ? console.log('you are up to 30') : console.log('you are under 30')
////тернарный или условный оператор
//person.name == 'Ivan' ? console.log('Come in') : console.log('Who are you?')
//person.name.length > 5 ? console.log('Come in') : console.log('Get out')




//
//let link = 'http://google.com'
//
//link.startsWith('https') ? console.log('Safe')
//: link.startsWith('http') ? console.log('Danger')
//: console.log('Wrong')



//
//let car = 'bmw'
//
//switch (car){
//    case "ferrari":
//    case "fiat":
//    case "pagani": console.log("From Italy")
//    break
//     case "porsche":
//     case "peugeot":
//     case "bugatti": console.log("From France")
//     break
//     case "bmw":
//     case "audi":
//     case "volkswagen": console.log("From Germany")
//     break
//}

















