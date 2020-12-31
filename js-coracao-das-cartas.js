//SOLUÇÃO 1
/* while() - Recebe a quantLinhas de cada instancia. Verifica se o valor é igual a 0*/
while ((quantLinhas = parseInt(gets())) !== 0) {
    /*Cria um array Map(), a cada nova instancia de entrada. O array é criando novamente*/
    arrAdicionarCartas = new Map();
    /*Array Multidimensional - (Colunas 3 fixo - Linha N quantLinhas)*/
    cartas = Array.from(new Array(3)).map(x => new Array(quantLinhas));
    /*Preenche o array Multidimensional com cada instancia de entrada*/
    for (let i = 0; i < quantLinhas; i++)[cartas[0][i], cartas[1][i], cartas[2][i]] = gets().split(" ");
    /*Chama a função para verificar cada grupo de instancia*/
    console.log(verificarInstancia(0, 0, 0) ? 1 : 0);
}

function verificarInstancia(a, b, c) {
    let arrAux = '';
    arrAux = arrAux.concat(a).concat(b).concat(c);

    /*get() - Retorna o elemento associado com a chave informada (x)*/
    if ((x = arrAdicionarCartas.get(arrAux)) > 0) return x === 1 ? true : false;

    /*Verifica se os numeros são iguais*/
    if (a === b && b === c && c === quantLinhas) return true;

    /*Faz comparações entre os numeros de cada instancia. 
    Nos if() é chamado a função calc() e a função recursiva verificarInstancia()*/
    if (calc(cartas[0][a]) && verificarInstancia(a + 1, b, c)) return true;

    if (calc(cartas[1][b]) && verificarInstancia(a, b + 1, c)) return true;

    if (calc(cartas[2][c]) && verificarInstancia(a, b, c + 1)) return true;

    if (calc(cartas[0][a] + cartas[1][b]) && verificarInstancia(a + 1, b + 1, c)) return true;

    if (calc(cartas[0][a] + cartas[2][c]) && verificarInstancia(a + 1, b, c + 1)) return true;

    if (calc(cartas[1][b] + cartas[2][c]) && verificarInstancia(a, b + 1, c + 1)) return true;

    if (calc(cartas[0][a] + cartas[1][b] + cartas[2][c]) && verificarInstancia(a + 1, b + 1, c + 1)) return true;

    arrAdicionarCartas.set(arrAux, 2);
    return false;
}

/*Verifica se o numero ou a soma dos numero são multiplo de 3*/
function calc(n) { return n % 3 === 0 ? true : false; }