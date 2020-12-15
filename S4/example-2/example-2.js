function callbackexample(list, message) {
    console.log(`Soy un dinosaurio me estinguí: ${list.join(', ')} -`, message);
}

function callbackexample2(list, message) {
    console.log(`Soy una mariposa mira como vuelo: ${list.join(', ')} -`, message);
}

function addItemAndTrigger(item, list, functionCallbackExample) {
    list.push(item);
    functionCallbackExample(list, '[OK]');
}

addItemAndTrigger('Mario', ['Alberto', 'Jose'], callbackexample);
addItemAndTrigger('Mario', ['Alberto', 'Jose'], callbackexample2);






// SIMPLE




function callbackexample() {
    console.log(`Soy un dinosaurio me estinguí`);
}

function callbackexample2() {
    console.log(`Soy una mariposa mira como vuelo`);
}

function addItemAndTrigger(functionCallbackExample) {
    console.log('Soy el padre');
    const p$$ = document.createElement('p')
    p$$.classList.add('fn-loquesea')
    functionCallbackExample();
}

addItemAndTrigger(callbackexample);
// Soy el padre
// Soy un dinosaurio me estinguí
addItemAndTrigger(callbackexample2);
// Soy el padre
// Soy una mariposa mira como vuel
addItemAndTrigger(function () {
    console.log(`Soy un puercospin`);
});


