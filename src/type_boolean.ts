
let autenticado: boolean = true;

let codeStatus: number = 1;

autenticado = Boolean(codeStatus); //Retorna true pq tudo que é diferente de 0, string vazia, undefined, é true

console.log(autenticado);
