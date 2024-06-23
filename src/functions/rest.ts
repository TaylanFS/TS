

function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number) : number {
    const total = venda1 + venda2 + venda3 + venda4
    
    console.log(total);

    return total   
}

totalVendas(10, 30 ,50, 10)

console.log(' ');


//Usando rest operator

const todasAsVendas = (...vendas: number[]) : void => {
    const quantidadeVendas = vendas.length

    console.log(`Você fez ${quantidadeVendas} vendas hoje!`);
    
}

todasAsVendas(10, 30, 25, 65, 70, 84, 96, 17)

console.log(' ');


//Outros exemplos

function mostrarNomes(...nomes: string[]) : void {
    console.log(nomes.length);

    nomes.map( nome => {
        console.log(nome);
        
    })
    
}

mostrarNomes('Taylan', 'Patricia', 'Lorena', 'Roselia', 'Joao', 'Mauro')