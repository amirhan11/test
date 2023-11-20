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
    






function num(){
    const a = 11
    if(a > 10){
        console.log('константа не меньше 10')
    }else{console.log('константа меньше 10')}
}
num()




function shoowMessage(){
    alert('Привет, Мир')
}
shoowMessage()




function shoow(){
    console.log('JavaScript')
}
shoow()



const text = 'Hi lorem how are you'
function cheсkText(fn){
    if(fn.includes('lorem')){
        console.log('У вас ошибка в тексте')
    }else{
        console.log(`Содержимое переменной: ${fn}`)
    }
}
cheсkText(text)