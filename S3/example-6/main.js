const div$$ = document.querySelector('.fn-check-me')

console.log(div$$.attributes);

console.log(div$$.className);

console.log(div$$.classList);
div$$.classList.add('clase-nueva'); // añade una clase
div$$.classList.remove('pepe-class'); // elimina una clase
div$$.classList.toggle('clase-nueva'); // si la clase esta añadida, la quita, y si no esta añadida, la pone
console.log(div$$.classList);

console.log(div$$.id);

console.log(div$$.innerHTML);
div$$.innerHTML = '<p>adsadsad</p>'

console.log(div$$.nodeName);

console.log(div$$.nodeValue);

console.log(div$$.style);
div$$.style.color = 'red';
div$$.style.fontSize = '24px';
div$$.style.fontFamily = 'Arial';

console.log(div$$.tagName);

console.log(div$$.title);

console.log(div$$.childNodes);


// EXAMPLE
const p$$ = document.querySelector('.fn-access-here p');
const h4$$ = document.querySelector('.fn-access-here h4');

const div$$ = document.querySelector('.fn-access-here')
const p$$ = div$$.querySelector('p');
const h4$$ = div$$.querySelector('h4');