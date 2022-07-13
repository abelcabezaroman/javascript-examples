// OBJECT

const user = { name: 'Abel', role: {name:'Profesor', years: 2 }, age: 26};

const { name : nombre, role, role: {years}, age } = user; 
console.log(nombre); // Abel
console.log(years); // 2
console.log(age); // 26
// Es igual a declararlo así. En el destructurín las variables tienene que llamarse igual a las propiedades del objeto
// const name = user.name;
// const role = user.role;

console.log(username, role);


const returnObj = () => {
    return { city: 'Seul', country: 'Corea del sur' };
}

const {city, country} = returnObj(); // city = 'Seul', country = 'Corea del sur'
// IGUAL
// const {country, city} = returnObj(); // city = 'Seul', country = 'Corea del sur'

console.log(city, country);


// ARRAY

const returnArray = () => {
    return ['Seul', 'Tokio', 'Madrid', 'Londres'];
}

const [ciudadAsiatica, ciudadArchipielago, ladelcentro, ciudadinglesa] = returnArray();
// IGUAL
// const arrrayCities = returnArray();
// const ciudadAsiatica = arrrayCities[0];
// const ciudadArchipielago = arrrayCities[1];
// const ladelcentro = arrrayCities[2];
// const ciudadinglesa = arrrayCities[3];

console.log(ciudadAsiatica);
console.log(ciudadArchipielago);
console.log(ladelcentro);
console.log(ciudadinglesa);
console.log(returnArray())


