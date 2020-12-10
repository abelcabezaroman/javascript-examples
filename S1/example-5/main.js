const number1 = 10;
const number2 = 20;
const number3 = 30;

if(number3 > number2){
    console.log('number3 es mayor que number2')
}

if(number3 > number2 && number3 > number1){
    console.log('number3 es mayor que number2 y que number1')
}

if(number3 > number2 || number3 < number1){
    console.log('number3 es mayor que number2 o number3 es menor que number1')
}
