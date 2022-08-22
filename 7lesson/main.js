

//Циклы for in && for all
//
//let person = {
//name: 'Ivan',
//age: 28,
//gender: 'male'
//}  //для объектов

//for (let key in person){
//console.log(key)
//}
//name
//age
//gender
//
//for (let key in person){
//console.log(person[key])
//}
//Ivan
//28
//male


//let cars = ['bmw', 'honda', 'mers', 'lexus']
//
//for (let item of cars){
//console.log(item)
//}  //для массивов

//bmw
//honda
//mers
//lexus




//МЕТОДЫ МАССИВОВ

//let cars = ['bmw', 'honda', 'mers', 'lexus']

//cars.push('opel')  //добавляет в конец
//cars.pop()  //удаляет с конца
//cars.unshift('lada')  //добавляет в начало
//cars.shift()    //удаляет с начала
//console.log(cars)

//Добавление элемента
//cars = [...cars, 'opel'] //[ 'bmw', 'honda', 'mers', 'lexus', 'opel' ]
//cars = ['opel', ...cars]
//console.log(cars)


//Добавить, удалить элементы splice
//let cars = ['bmw', 'honda', 'mers', 'lexus']
//cars.splice(2, 2, 'opel', 'lada') //начало, сколько удалить, поставить что
//console.log(cars) //[ 'bmw', 'honda', 'opel', 'lada' ]



//let cars = ['bmw', 'honda', 'mers', 'lexus']
//cars = cars.slice (0, 2) //вырезает с 0 элемента по 2
//console.log(cars)  //вырезает без добавления, [ 'bmw', 'honda' ]


//Поиск внутри массива
//let cars = ['bmw', 'honda', 'mers', 'lexus']
//console.log(cars.includes('bmw')) //true есть ли в наличии
//console.log(cars.indexOf('bmw')) //0
//console.log(cars.lastIndexOf('bmw')) //0
//
//let cars = ['honda', 'mers', 'lexus']
//console.log(cars.indexOf('bmw', 2)) // -1


//Сортировка
//let arr = [2,1,3,4,5,6]
//console.log(arr.sort())  //[ 1, 2, 3, 4, 5, 6 ] //сортирует по первым цифрам
//при сортировке чисел и строк, сперва идут строки

//Обратный порядок
//let arr = [2,1,3,4,5,6]
//console.log(arr.reverse())  //[ 6, 5, 4, 3, 1, 2 ]

//Разделитель
//let star = 'abracadabra'
//console.log(star.split('a')) //[ '', 'br', 'c', 'd', 'br', '' ]
//содержит сепаратор, условие, от чего разделяется строка
//разделяет строку на массив


//let name = 'Ivan'
//name = name.split('')   //[ 'I', 'v', 'a', 'n' ]

//name[name.length - 1] = 'm' //[ 'I', 'v', 'a', 'm' ]
//name = name.join('')  //Ivam из массива в строку
//console.log(name)



//Слияние массивов
//let arr = [1,2,3]
//let arr2 = [4,5,6]

//первый способ
//let arr3 = [...arr, ...arr2] //[ 1, 2, 3, 4, 5, 6 ] слияние массивов
//console.log(arr3)

//второй способ
//arr = arr.concat(arr2)  //слияние массивов
//console.log(arr)


//Одноранговый массив из многорангового
//let arr = [[1,2], [3,4], [5,6]]
//arr = arr.flat()
//console.log(arr) //[ 1, 2, 3, 4, 5, 6 ]

//Заменить элементы массива другим элементов
//let arr = [ 1, 2, 3, 4, 5, 6 ]
//arr = arr.fill('Adele', 0, 4) //с 0 по 4 элемент заменят на Adele
//console.log(arr) //[ 'Adele', 'Adele', 'Adele', 'Adele', 5, 6 ]

//Создание нового массива
//let arr = new Array(5)
//console.log(arr) //[ <5 empty items> ]
//
//
//let arr = new Array(5).fill('Aruuke', 0, 5)
//console.log(arr) //[ 'Adele', 'Adele', 'Adele', 'Adele', 'Adele' ]












