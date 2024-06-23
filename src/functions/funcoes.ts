
function login(username: string) : boolean | string {
    let message = 'Bem vindo ' + username

    console.log(message);

    return username
}

const usernameLogin = login('Taylan')

console.log(usernameLogin);

console.log(' ');


let firstNumber: number = 15
let secondNumber: number = 45

function soma(n1: number, n2: number) : number {
    let soma = n1 + n2
    return soma
}

console.log(soma(firstNumber, secondNumber));
