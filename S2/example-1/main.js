function sum(num1, num2) {
    num1 + num2
}

// Ya tenemos declarada nuestra función para sumar dos números

sum(2, 4); // 6 Aqui estamos invocando a la función (ejecutándola)
sum(4, 6); // 10 Aqui estamos invocando a la función (ejecutándola)



// Con return

function substract(num1, num2) {
    return num1 - num2;
}

// Ya tenemos declarada nuestra función para sumar dos números
const result = sum(10, 4); // Aqui estamos invocando a la función (ejecutándola)
const result2 = substract(10, 6); // Aqui estamos invocando a la función (ejecutándola)
const result3 = substract(7, 1); // Aqui estamos invocando a la función (ejecutándola)
console.log(result); // undefined
console.log(result2); // 4
console.log(result3) // 6




function dynamic(num1, num2, type) {
    if(type === "+"){
        return num1 + num2;
    } else if(type === "-"){
        return num1 - num2;
    }

    console.log("No se multiplicar")
}


const dynamicResult = dynamic(10, 2, "+");
const dynamicResult2 = dynamic(8, 2, "-");
const dynamicResult3 = dynamic(8, 2, "*"); // No se multiplicar

console.log(dynamicResult); // 12
console.log(dynamicResult2); // 6
console.log(dynamicResult3); // undefined





function printMessage(textToPrint) {
    console.log("Bienvenido a Upgrade Hub " + textToPrint);
}

printMessage('Abel'); // Bienvenido a Upgrade Hub Abel
printMessage('Carlos'); // Bienvenido a Upgrade Hub Carlos
printMessage('Luisa'); // Bienvenido a Upgrade Hub Luisa


function checkName(name) {
    if (name === "Abel") {
        return  name + '. Peaso profesor.';
    } else {
        return name + '. Ese alumno buenooo...programame ninio que esto es la ostia ya verás.';
    }
}

const text = checkName("Abel");
printMessage(text);
// IGUAL
printMessage(checkName("Abel"));









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









// CONCEPTO SCOPE
let nana = "Abel";

function a(){
    let greet = "Hola ";
    console.log(greet + nana); // Hola Abel
}

console.log(greet + nana); // Abel

