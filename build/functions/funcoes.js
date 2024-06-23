"use strict";
function login(username) {
    let message = 'Bem vindo ' + username;
    console.log(message);
    return username;
}
const usernameLogin = login('Taylan');
console.log(usernameLogin);
console.log(' ');
let firstNumber = 15;
let secondNumber = 45;
function soma(n1, n2) {
    let soma = n1 + n2;
    return soma;
}
console.log(soma(firstNumber, secondNumber));
