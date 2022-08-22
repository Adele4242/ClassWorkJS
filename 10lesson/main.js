


//REDUCE


//const calcSum = (arr) => {
//    let sum = 0
//    arr.map((item) => {
//    sum += item
//    })
//    return sum
//}
//console.log(calcSum([1,2,3,4,5,6])) //21

//
//const setObj = (arr) => {
//let obj = {}
//arr.map((item,idx) => {
//obj = {...obj, [idx] : item}
//})
//return obj
//}
//console.log(setObj(['Adele','Car', true]))






//acc = аккумулятор, rec = ресивер idx arr
//acc = 0, rec = 1
//return 0 + 1 = 1
//acc = 1 rec =2
//return 1+2 =3
//
//const calcSum = (arr) => {
// return arr.reduce((acc, rec) => {
//    return acc + rec
// }, 0)
//}
//console.log(calcSum([1,2,3,4,5,6])) //21



//const calArr = (arr) => {
//return arr.reduce((acc, rec) => {
//    return [...acc, rec * 2]
//}, [])
//}
//console.log(calArr([1,2,3,4,5,6])) //[ 2, 4, 6, 8, 10, 12 ]



//const filterArr = (arr) => {
//return arr.filter((item) => {
//    return typeof item === 'string'
//})
//}
//console.log(filterArr([1, 'Adele', true, 'Jimin'])) //[ 2, 4, 6, 8, 10, 12 ]
//


//
//const filterArr = (arr) => {
//return arr.reduce((acc, rec) => {
//  if (typeof rec === 'string') {
//  return [...acc, rec]
//  }
//  return acc
//}, [])
//}
//console.log(filterArr([1, 'Adele', true, 'Jimin'])) //[ 2, 4, 6, 8, 10, 12 ]





//РЕШЕНИЕ ЗАДАЧ

//first

//const task1 = (arr) => {
//return arr.reduce((acc, rec) => {
//    return [...acc, rec * 2]
//}, [])
//}
//console.log(task1([2,2,2,2,2,2]))


//second

//const task2 = (arr) => {
//return arr.reduce((acc, rec, idx) => {
//  if (idx % 2 === 0) {
//  return [...acc,rec]
//  }
//  return acc
//}, [])
//}
//console.log(task2(['Привет', 'Пока', 'Снова привет']))


//third

//const task3 = (arr) => {
//return arr.reduce((acc,rec) => {
//if (rec === 0) {
//    return [...acc, rec]
//}
//return [...acc, -rec]
//}, [])
//}
//console.log(task3([1,2,3,4,5,6]))



//fourth

//const task4 = (arr,num) => {
//return arr.reduce((acc,rec,idx) => {
//   if (idx < num) {
//   return [...acc, rec]
//   }
//   return acc
//}, [])
//}
//console.log(task4([0,1,2,3,4,5], 3))


//fifth


//const task5 = (arr) => {
//return arr.reduce((acc,rec,idx) => {
//if (rec % idx === 0) {
//return [...acc, rec]
//}
//return acc
//}, [])
//}
//console.log(task5([22,-6,32,82,9,25]))


//sixth

//
//const task6 = (arr) => {
//return arr.reduce((acc,rec) => {
//if (typeof rec === 'string') {
//return [...acc, null]
//}
//return [...acc, rec]
//}, [])
//}
//console.log(task6([4,6,'Ivan',5, 'Denis']))

//seventh

//
//const task7 = (arr) => {
//return arr.reduce((acc, rec) => {
//if (rec.length <= 6) {
//return [...acc, rec]
//}
//return acc
//},[])
//}
//console.log(task7(['Евдоким', 'Ivan', 'Игнат', 'Denis']))


//eighth

//const task8 = (arr) => {
//return arr.reduce((acc,rec) => {
//if (rec ** 3 % 3 === 0 && rec ** 3 % 5 === 0) {
//return [...acc, 0]
//}
//return [...acc, rec ** 3]
//},[])
//}
//console.log(task8([7,8,15,30,2]))


//ninth
//
//const task9 = (arr) => {
//return arr.reduce((acc,rec) => {
//return [...acc, rec.length]
//},[])
//}
//console.log(task9(['Термос','Ураган', 'Земля', 'Комбо', 'Корень']))



//tenth

//Напишите функцию, которая принимает массив чисел
//и возвращает массив строк по шаблону <div>{number}</div>
//
//input: [1, 2, 3, 4, 5 ]
//output: [ <div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>, <div>5</div> ]


//const task10 = (arr) => {
//return arr.reduce((acc,rec) => {
//    return [...acc, `<div> ${rec} </div>`]
//},[])
//}
//console.log(task10([1,2,3,4,5]))


//eleventh

//Напишите функцию, которая принимает массив строк
//и возвращает массив строк с четным количеством букв
//
//Input: ['ab', 'abc', 'abcd']
//Output: ['ab', 'abcd']

const task11 = (arr) => {
return arr.reduce((acc, rec) => {
if (rec.length % 2 === 0){
return [...acc,rec]
}
return acc
},[])
}
console.log(task11(['ab','abc','abcd']))














