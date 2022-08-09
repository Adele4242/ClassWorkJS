//ЦИКЛЫ


//let i = 1
//while (i < 10) {
//console.log(i)
//}  // чтобы остановить цикл, нажать Ctrl + C




//let i = 1
//while (i <= 10) {
//console.log(i)
//i ++
//} // from 1 to 10




//let i = 1
//do {
//console.log(i)
//i++
//} while (i <= 10) //same


//for (let i = 1; i <= 10; i++) {
//console.log(i)
//}


//for (let i = 1; i <= 10; i++) {
//if (i == 5){
//break
//}
//console.log(i)
//} //stop on 4

//
//for (let i = 1; i <= 10; i++) {
//if (i == 5){
//continue
//}
//console.log(i) // 1234 678910
//}



//for (let i = 1; i <= 10; i++) {
//    if (i % 2 == 0){
//    console.log(i, 'четный')
//    } else {
//    console.log(i, 'нечетный')
//    }
//}
//
//    1 нечетный
//    2 четный
//    3 нечетный
//    4 четный
//    5 нечетный
//    6 четный
//    7 нечетный
//    8 четный
//    9 нечетный
//    10 четный





//let word = 'AbraCadabra'
//for (let i = 0; i < word.length; i++) {
//    console.log(word[i]) //получаем по буквам отдельно
//}
//
//
//
//for (let i = 0; i < word.length; i++) {
//    if (i == Math.floor(word.length / 2)){
//        break
//    }
//    console.log(word[i])
//} //получаем до 5 букв

//for (let i = 0; i < Math.floor(word.length / 2); i++) {
//    console.log(word[i])
//}


//let word = 'AbraCadabra'
//let wordReverse = ''
//for (let i = 0; i < word.length; i++) {
//  wordReverse = word[i] + wordReverse
//}
//console.log(wordReverse)



//
//let word = 'AbraCadabra'
//for (let i = 0; i < word.length; i++) {
// if (i % 2){
//  console.log(word[i])
// }
//} //получаем только четные буквы


//let word = ['A', 'b', 'C', 'D', 'e', 'f', 'G']

//for (let i = 0; i < word.length; i++){
//console.log(word[i])
//}
//
//
//for (let i = 0; i < word.length; i++) {
//    if (i % 2){
//    word[i] = word[i].toUppercase()
//    } else {
//    word[i] = word[i].toLowerCase()
//    }
//}
//console.log(word)




//let cars = ['bmw', 'lexus', 'mers', 'honda', 'subaru']
//
//for (let i = 0; i < cars.length; i++) {
//    if (cars[i].length > 4){
//    console.log(cars[i])
//    }
//}



//let arr = [[1,2], [3,4], [5,6]]
//for (let i = 0; i < arr.length; i++) {
//console.log(arr[i][0] + arr[i][1])
//}



let words = ['abra', 'Adele', 'Mers', 'Apple']
for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++){
        console.log(words[i][j])
    }
}




//let numbers = [7, 1, 2, 4, 9, 20, 56, 40]
//let result = 0
//
//for (let i = 0; i < numbers.length; i++){
//result = numbers[i]+ result

//}
//console.log(result)




let years = ['January', 'February', 'March', 'April','May','June','July','August','September','October','November','December']

for (let i = 0; i < years.length; i++) {
switch(years[i]){
    case 'January' :
    case 'February':
    case 'December': console.log('winter')
    break
    case 'April':
    case 'May':
    case 'March': console.log('spring')
    break
    case 'June':
    case 'July':
    case 'August': console.log('summer')
    break
    case 'September':
    case 'October':
    case 'November': console.log('autumn')
    break
    }
}









