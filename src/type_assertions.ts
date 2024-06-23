//Afirmando algum tipo

let statusAtual: unknown = 1

let mudarStatus: number = 0

//Estou afirmando que o statusAtual é de fato um numero!
mudarStatus = statusAtual as number

//Outra maneira de afirmar um tipo
mudarStatus = <number>statusAtual

console.log(mudarStatus);

console.log('======');


let query: unknown = 'pizza'

let searchTerm: string = query as string

console.log(searchTerm);
