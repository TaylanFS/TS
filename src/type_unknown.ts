//Tipo desconhecid = Quando você não sabe que tipo vai receber

let idPedido: unknown = 123
let totalPedido: unknown = 15

//Valor do tipo unknown só pode ser atribuido ao tipo unknown ou any
let entregador: any = totalPedido

console.log(entregador);
 