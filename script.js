// 1 задание
console.log('1 задание (чётные числа от 0 до 100)\n',' ');
for (let i = 2;i <= 100; i++){
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log(' ');
// 2 задание
console.log('2 задание (целые числа делящиеся на 3 и на 5)\n',' ');

for (let i = 3; i <= 50; i++) {
    if(i % 3 == 0){
        console.log(i + ' делится на 3');
    }
    if(i % 5 == 0){
        console.log(i + ' делится на 5');
    }
}
console.log(' ');
// 4 задание

console.log('4 задание (таблица умножения на 56 ) \n',' ');
let a = 56;
for (let i = 1; i <= 10; i++) {
    let result = (a * i);
    console.log(result);
}

// 3 задание

do{
    var x = +prompt("введите число больше 100");
}while(x <= 100)