//Como deixar um valor por default ou deixar ele opcional

function cadastro(email: string, senha: string, nome = 'Seu nome', idade?: number) : void {
    let data = { email, senha, nome, idade }

    console.log(data);
    
}

cadastro('teste@teste.com', '123123', 'Taylan', 19)