function sum(num1, num2) {
    console.log(num1 + num2);
}

// Ya tenemos declarada nuestra función para sumar dos números

sum(2, 4); // Aqui estamos invocando a la función (ejecutándola)
sum(4, 6); // Aqui estamos invocando a la función (ejecutándola)



// Con return

function substract(num1, num2) {
    return num1 - num2;
}

// Ya tenemos declarada nuestra función para sumar dos números

const result = substract(10, 4); // Aqui estamos invocando a la función (ejecutándola)
const result2 = substract(10, 6); // Aqui estamos invocando a la función (ejecutándola)
console.log(result); // 6
alert(result2); // 4




function printMessage(textToPrint) {
    console.log(textToPrint);
}

printMessage('Hey!');
printMessage('Ola!');
printMessage('Gruasias!');


function overAge(age) {
    if (age >= 18) {
        return 'You are so big!';
    } else {
        return 'You are a child yet';
    }
}

const text = overAge(16);
printMessage(text);
// IGUAL
printMessage(overAge(16));


const anime = "Code Geass";
const birthday = "2020/11/20";

// function print() { }
// function alert(){}

function print(date){
    const author = "Pepe Comecomics";
    console.log(anime);
    console.log(author);
    console.log(date);
}

console.log(author); // undefined

print("2020/12/12");
print(birthday);




// CANCION DE LAS FUNCIONES

// DPRU
const param = "Abel";

function showMustGoOn(text){
    console.log(text);
}

showMustGoOn(param);

// showMustGoOn("Sara");







// const fullName = "Abel Cabeza";
// const name = fullName.substring(0,3);
// const surname = fullName.substring(4,fullName.length);

splitName("Abel Cabeza")
// const fullName = "Juan Fernandez";
// const name = fullName.substring(0,3);
// const surname = fullName.substring(4,fullName.length);

splitName("Juan Fernandez")

function splitName(fullName, nameLength = 3){
    const name = fullName.substring(0,nameLength);
    const surname = fullName.substring(nameLength + 1,fullName.length);
}

splitName("Manolo Gutierrez", 6)