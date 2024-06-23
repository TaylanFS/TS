"use strict";
function cadastro(email, senha, nome = 'Seu nome', idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro('teste@teste.com', '123123', 'Taylan', 19);
