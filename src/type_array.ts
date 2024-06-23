
let numeros: number[];

numeros = [1, 2, 3, 4, 5, 6];

console.log(numeros);

numeros.push(7);

console.log(numeros);

console.log('========');


let filmes: Array<string>;

filmes = ['Filme1', ' Filme2'];

filmes.push('Filme3');

console.log('Meus filmes de hoje: ' + filmes);

console.log('==========');

//Uma forma de usar tipos de array de string ou numeros: Array<string | number> ou (string | number)[]
