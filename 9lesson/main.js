

//const func2 = () => {
//return 'callback123'
//}
//
//const func1 = (callback) => {
//return callback ()
//}
//console.log(func1(func2))  //callback123



//[1,2,3,4,5] map = [2,4,6,8,10]

//
//const mapFunk = (arr) => {
//let newArr = []
//for (let i = 0; i < arr.length; i++){
//newArr = [...newArr, arr[i] * 2]
//}
//return newArr
//}
//console.log(mapFunk([1,2,3,4,5]))


//callback функция принимает value, index,array,item
//const mapFunk = (arr) => {
//return arr.map((item) => {
//     return typeof item
//})
//}
//
//console.log(mapFunk([1,'Adele',true,4,[]])) //[ 'number', 'string', 'boolean', 'number', 'object' ]



//const mapFunk = (arr) => {
//    return arr.map((item) => {
//    if (typeof item == 'number' || typeof item == 'string'){
//        return null
//    }
//    return item
//    })
//}
//
//console.log(mapFunk([1,'Adele',true,4,[]]))



//const mapFunk = (arr) => {
//    return arr.map((item) => {
//    return item.length
//    })
//}
//
//console.log(mapFunk(['Adele','Hogwarts','Geralt']))




//const mapFunk = (arr,num) => {
//    return arr.map((item) => {
//        return `${item} кратность ${num} = ${item % num}`
//    })
//}
//
//console.log(mapFunk([15,12,18,20,45], 5))



//FILTER

//
//const filterFunk = (arr) => {
//return arr.filter((item) => {
//    return item != 5
//})
//}
//console.log(filterFunk([5,1,2,3,4,5])) //[1,2,3,4]


//
//const filterFunk = (arr) => {
//return arr.filter((item) => {
//    return item < 5
//})
//}
//console.log(filterFunk([10,1,2,13,4,5]))





//
//const filterFunk = (arr) => {
//return arr.filter((item) => {
//    return !item.includes('hello') //DOES NOT INCLUDE
//})
//}
//console.log(filterFunk(['hello','hello world','Adele','hello Hogwarts']))




//const filterFunk = (arr) => {
//return arr.filter((item) => {
//    if (typeof item === 'string') {
//    return item.length > 3
//    }
//    return item > 10
//})
//}
//console.log(filterFunk(['IVAN','Eddie','Adele',10,15,20]))



//FIND

//findIndex

//const findFunk = (arr) => {
//    return arr.find((item) => {
//    return item == 5
//    })
//}
//console.log(findFunk([1,2,4,5,1,1]))




//SOME


//const someFunk = (arr) => {
//    return arr.some((item) => {
//    return item > 5
//    })
//}
//console.log(someFunk([1,2,4,5,1,1])) //FALSE, BOOLEAN


//EVERY

//const everyFunk = (arr) => {
//    return arr.every((item) => {
//    return item > 5
//    })
//}
//console.log(everyFunk([1,2,4,5,1,1])) //FALSE, BOOLEAN


//SORT

//const sortFunk = (arr) => {
//    return arr.sort((a,b) => {
//    return b - a //сортирует от большего к меньшему
//    //return a - b //сортирует от меньшего к большему
//    })
//}
//console.log(sortFunk([1,2,4,5,1,1]))



//const func = (arr) => {
//    return arr.map((item) => {
//    return item * 2   //все умножится на 2
//    }).filter((item) => {
//    return isFinite(item) // все кроме NaN
//    }).map((item) => {
//    return item % 5 //что кратно 5
//    }).some((item) => {
//    return item > 0 //true
//    })
//}
//console.log(func(['Ivan',5,6,'10']))



//const func = (arr) => {
//return arr.filter((item) => {
//    let count = 0;
//    item = item.split('')
//    item.forEach((letter) => {
//    if (letter.toUpperCase() == letter){
//    count += 1
//    }
//    })
//    return count >= 3
//})
//}
//console.log(func(['BMW','mers','HONDA','Lexus']))


//
//const func = (arr) => {
//return arr.filter((item) => {
//   return item.split('').filter((el) => el == el.toUpperCase()).length >= 3
//})
//}
//console.log(func(['BMW','mers','HONDA','Lexus']))


//
//const func = (arr) =>  {
//return arr.filter((item) => {
//return item.name == 'Aruuke'
//})
//}
//console.log(func([{id: 1, name: 'Adele'}, {id: 2, name: 'Aruuke'} }]))
















