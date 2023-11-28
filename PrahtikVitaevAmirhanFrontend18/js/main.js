// просто задание
// let dali = '28.02.1999';

// Number

// let name = prompt('Как тебя зовут')
// let address = prompt('Адрес:')
// let phone = prompt('Номер телефона')

// let text = `Студент${name}. Адрес:${address}, Номер телефона:${phone}`

// console.log(text)


// let ruСoin = 0.0011;
// let coin = 1000;
// let usaCoin = ruСoin * coin;

// console.log(usaCoin)






// let b = 10;
// const a = 5;

// if(a < b ){
//     console.log('константа меньше 10')
// }else if(a > b){
//     console.log('константа не меньше 10')
// };





// let x = 10;
// let y = 7;

// let text = x > y ? "x больше, чем y" : "x не больше, чем y";
// console.log(text)





// let num = y

// if( num % 2 === 0) {
//     console.log(`Число ${ num} четное`)
// }else{
//     console.log(`Число ${num} нечетное`)
// }





// let num1 = prompt()
// let num2 = prompt()
// let num3 = prompt()

// if(num1 > num2 && num1 > num3){
//     console.log(num1)
// }else if(num2 > num1 && num2 > num3){
//     console.log(num2)
// }else if(num3 > num1 && num3 > num2){
//     console.log(num3)
// }
    

// GG


// function num(){
//     const a = 11
//     if(a > 10){
//         console.log('константа не меньше 10')
//     }else{console.log('константа меньше 10')}
// }
// num()




// function shoowMessage(){
//     alert('Привет, Мир')
// }
// shoowMessage()




// function shoow(){
//     console.log('JavaScript')
// }
// shoow()



// const text = 'Hi lorem how are you'
// function cheсkText(fn){
//     if(fn.includes('lorem')){
//         console.log('У вас ошибка в тексте')
//     }else{
//         console.log(`Содержимое переменной: ${fn}`)
//     }
// }
// cheсkText(text)




// let name = 'Amirhan'; //string

// const age = 18;

// let dali = age > 15 ? `Привет ${name}` : 'доступ запрещен'
// console.log(dali)

// // if(age >= 15){
// //     console.log(`Привет ${name}`)
// // }else{
// //     console.log('доступ запрещен')
// // };



// function viewMoney(){
//     console.log('Вот вам 10$')
// }
// viewMoney()


// function getMoney(cash){

//     console.log(`Вот вам ${cash}$`)
// }
// getMoney(2455)



// function getSquare(a,b){
//     console.log(Math.pow(a,b))
// }
// getSquare(2,6)


// function getnambers(a,b,c,d){
//     console.log(Math.max(a,b,c,d))
// }
// getnambers(4356,4588,456,234,)


// function getDiscriminant(a,b,c){
//     let d = b**2 - 4*a*c
//     console.log(d)
// }
// getDiscriminant(2,4,5)




// function getDali(a,b){
   
//     if(a % 2 === 0 && b % 2 === 0){
//         console.log(a * b) 
//     }else if(a % 2 === 1 && b % 2 === 1){
//         console.log(a + b) 
//     }else if(a % 2 === 0 && b % 2 !== 0){
//         console.log(b)
//     }
// }
// getDali(2,9)


// let a = ['lorem', 123, true, 'ipsum'];
// console.log(a.length)

// a.shift()
// a.pop()



// let em = ['amirahan', true, 132, 'dali', 18 ];
// em.unshift( 'lorem', 'text', false)

// em.shift()
// em.pop()
// em.pop()
// console.log(em)



// let number = [1, 3, 5, 7, 9]

// number[0]++   
// number[1]++       
// number[2]++
// number[3]++
// number[4]++

// console.log(number)





// let dali = ["я","изучаю","java",]
// dali.splice(1,1 ,"знаю")

// console.log(dali)



let arr = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]

arr.forEach(function(index){
    if(index % 2 !== 0){
        console.log(index)
    }
})


let text = [ 'lorem ipsum', 'javascript', 'php', 'css', 'react', 'git', 'html', 'mysql']

let text1 = text.filter(function(index){
    return index.length < 4
})
console.log(text1)



let number = [1, -3, 5, 6, -7, 8, 9, -11]

let number1 = number.filter(function(index){
    if(index <= 0){
        return index
    }
})
console.log(number1)




let dali1 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]

let dali2 = dali1.filter(function(index){
    if(index % 2 === 0){
        return index
    }
})
console.log(dali2)





let texte =  ['lorem ipsum', 'javatcript', 'php', 'css', 'react', 'git', 'html', 'mysql']

let texte1 = texte.filter(function(index){
    if(index.length !== 3){
        return index
    }
})
console.log(texte1)




let fas = [5, 6, 7, 8, 9]

let fas1 = fas.map(function(index){
    return index * index
})
console.log(fas1)




let fol = [{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b:55}]

let fol1 = fol.map(function(item,){
    return  item.a + item.b
})
console.log(fol1)





let fil = [-13, 0, 12, 1662, -0.32, -102, -2]
let fil1 = fil.filter(function(item){
    return item < 0
});

    fil1 = fil1.reduce(function(sum, item){
        return sum + item
    },0)
    console.log(fil1)





let i = [ {x: 10, y: 'lorem'}, {x: 21, y: 'lorem'}, {x: -17, y: 'lorem'}, {x: 156, y: 'lorem'}]
    i = i.reduce(function(sum,item){
        return item.x + sum
    },0)
console.log(i)