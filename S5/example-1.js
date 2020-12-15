function a() {

}

const a = () => { }
function a() {

}

const a = () => {

}

const hello = 'Hello';
const name = 'Abel';

function getText(hello, name) {
    return hello + ' ' + name;
}

// IGUALES
const getText = (hello, name) => {
    return hello + ' ' + name;
}

const getText = (hello, name) => hello + ' ' + name;
// IGUALES


const getText = (hello, name) => {
    name += ' Jimenez';
    return hello + ' ' + name;
}

// MAL
// const getText = (hello, name) => 
//     name += ' Jimenez';
//     hello + ' ' + name;

function print(printText) {
    console.log(printText)
}

// IGUALES
const print = printText => {
    console.log(printText)
}

const print = (printText) => {
    console.log(printText)
}
// IGUALES


// MAL - solo podemos quitar los parentesis con un solo parametro. Si tenemos dos o mas hay que poner los parentesis
// const print = printText, printText2 => {
//     console.log(printText)
// }



// COMBO BREAKER xd

const getPrint = printText => printText;





