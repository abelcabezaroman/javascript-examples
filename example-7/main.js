// Primitivos
let a; // undefined

a = 'Pepe';
a = 15;
a = true; // false
a = null;

// No primitivos
a = {name: 'Abel', surname: 'Cabeza Román', years: 99 };
console.log(a);
console.log(a.name, a.surname, a.years);

a = ['Abel Cabeza Román', 'Jesica Victoria', 'Angel Garcia Lopez']
console.log(a);
console.log(a[0])
console.log(a[1])
console.log(a[2])

a = [99, 34, 23]
console.log(a);
console.log(a[0])
console.log(a[1])
console.log(a[2])

a = [{name: 'Abel', surname: 'Cabeza Román', years: 99 }, {name: 'Jesica', surname: 'Victoria', years: 34 }, {name: 'Angel', surname: 'Garcia Lopez', years: 23 }]
console.log(a);
console.log(a[0])
console.log(a[0].name)
console.log(a[0].surname)
console.log(a[0].years)
console.log(a[1])
console.log(a[2])



// Referencias

let b = 10
let c = b;
c = 20;
// b = 10 y c = 20

let d = {name: 'Abel', surname: 'Cabeza Román'};
let e = d;
e.name = 'Pedro'
// e.name = 'Pedro' y d.name = 'Pedro'