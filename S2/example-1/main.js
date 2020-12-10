function sum(num1, num2) {
	return num1 + num2;
}
// Ya tenemos declarada nuestra función para sumar dos números

const result = sum(2, 2); // Aqui estamos invocando a la función (ejecutándola)
const result2 = sum(4, 6); // Aqui estamos invocando a la función (ejecutándola)
console.log(result); 
console.log(result2); 

function printMessage(textToPrint){
    console.log(textToPrint);
}

printMessage('Hey!');
printMessage('Ola!');
printMessage('Gruasias!');


function overAge(age){
    if(age >= 18){
        return 'You are so big!';
    } else{
        return 'You are a child yet';
    }
}

printMessage(overAge(18));





