//Exemplo com arrow function

// function retornoAPI(url: string): string {
//     return url
// }

const retornoAPI = (url: string) : void => {
    console.log('url da api: ', url);

}

retornoAPI('https://sujeitoprogramador.com')