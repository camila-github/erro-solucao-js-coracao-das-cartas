## Treinamento Digital Innovation One - Exercicio - Barras de Ouro

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Resolvendo Algoritmos Com JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

Marcos decidiu abandonar o bar da faculdade onde jogava truco para dedicar-se ao mundo da programação. Para que isso fosse mais fácil, decidiu criar um novo jogo de cartas. 

O coração das cartas, como Marcos apelidou o jogo, é individual e jogado com três pilhas, inicialmente com o mesmo número de cartas. Cada carta tem um valor numérico inteiro de 0 até 9. O jogador pode, a qualquer momento ver o valor de qualquer carta, mas só pode jogar com as cartas que estão no topo das pilhas. Em cada rodada, o jogador pode remover qualquer combinação de cartas que estejam no topo da pilha (pode escolher 1, 2 ou até 3 cartas) cuja soma dos valores seja múltiplo de 3. O jogo é ganho quando todas as cartas forem removidas das pilhas. Se alguma carta não puder ser removida, perde-se o jogo.


#### Entrada:

A entrada é composta por várias instâncias Cada instância é iniciada por um inteiro N (0 ≤ N ≤ 100), que identifica o número de cartas em cada pilha. A entrada termina quando N = 0. Cada uma das N linhas seguintes contém três inteiros A, B e C, que descrevem os valores numéricos das cartas em um nível da pilha (0 ≤ A, B, C ≤  9). As pilhas são descritas do topo até o fundo.

#### Saída:

Para cada instância, imprima uma linha contendo o número 1 se o jogador pode ganhar a instância do jogo ou o número 0 se o jogo for impossível.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
2 | 1
1 1 1 | 0
2 0 4 |
3 |
1 0 0 |
0 1 0 |
0 0 0 |
0 |





#### Link Referência:
https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/06-Resolvendo%20Algoritmos%20com%20JavaScript/Desafio-01.js

Função Recursiva(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es).

Array Matrix (https://www.devmedia.com.br/javascript-arrays/4079)...(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

Map set(),Map get()(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/set)...(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map)




```javascript
//SOLUCAO 1
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
```
