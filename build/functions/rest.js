"use strict";
function totalVendas(venda1, venda2, venda3, venda4) {
    const total = venda1 + venda2 + venda3 + venda4;
    console.log(total);
    return total;
}
totalVendas(10, 30, 50, 10);
console.log(' ');
const todasAsVendas = (...vendas) => {
    const quantidadeVendas = vendas.length;
    console.log(`Você fez ${quantidadeVendas} vendas hoje!`);
};
todasAsVendas(10, 30, 25, 65, 70, 84, 96, 17);
console.log(' ');
function mostrarNomes(...nomes) {
    console.log(nomes.length);
    nomes.map(nome => {
        console.log(nome);
    });
}
mostrarNomes('Taylan', 'Patricia', 'Lorena', 'Roselia', 'Joao', 'Mauro');
