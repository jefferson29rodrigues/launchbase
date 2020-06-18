/*==================================
    Usuários e tecnologias
===================================*/

/*
const usuarios = [
    {
        nome: "Pedro",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Tiago",
        tecnologias: ["Javascript", "CSS"]
    },
    {
        nome: "João",
        tecnologias: ["HTML", "Node.js"]
    }
];

for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`);
}
*/




/*=============================
    Busca por tecnologia
==============================*/

/*
const teste = [
    {
        nome: "P",
        tecnologias: ["Java", "CSS"]
    },
    {
        nome: "T",
        tecnologias: ["Typescript", "CSS"]
    },
    {
        nome: "J",
        tecnologias: ["PHP", "python"]
    }
];

function conferirTrabalhaCss(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {

        if(usuarios[i].tecnologias[0] == "CSS" || usuarios[i].tecnologias[1] == "CSS") {
            console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
        }
    }
};

console.log("")
console.log("=============================================================")
console.log("vamos ver se vai pegar...")
console.log("=============================================================")
console.log("")

conferirTrabalhaCss(teste);
*/





/*==================================
    Soma de despesas e receitas
==================================*/

/**
 * ATENÇÃO!!! Para entender comece lendo a explicação da linha 122
 */

const usuarios2 = [

    // Posição '0' no array 'usuarios2'
    { 
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5], 
        despesas: [85.3, 13.5, 19.9]
    },

    // Posição '1' no array 'usuarios2'
    { 
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },

    // Posição '2' no array 'usuarios2'
    { 
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas) // Guarda na constante 'somaReceitas' o resultado do processamento da função 'somaNumeros' no array '.receitas'
    const somaDespesas = somaNumeros(despesas) // Guarda na constante 'somaDespesas' o resultado do processamento da função 'somaNumeros' no array '.despesas'

    return somaReceitas - somaDespesas // Retorna o saldo entre 'receitas' - 'despesas'
    
    // ATENÇÃO para finalizar o entendimento vá para a linha 126
}

function somaNumeros(numeros) { // Recebe o array '.receitas' (receitas: [115.3, 48.7, 98.3, 14.5])
    let soma = 0

    for (let n of numeros) { // Do array '.receitas' pega cada item por vez e joga na variável 'n' (ou seja, a cada rodada do looping 'n' é um valor diferente do array. No caso do array receitas: [115.3, 48.7, 98.3, 14.5] 'n' vai ser '115.3' na primeira rodada '48.7' na segunda e assim por diante até percorrer todo o array)
        soma = soma + n // 'soma' (que recebeu 0 na linha 107), vai ser somada com o primeiro valor que 'n' foi transformado e isso é guardado em 'soma'
                        // Na proxima rodada do looping soma não é mais 0 pois recebeu o valor da rodada anterior. Ela então é somada novamente a 'n' que agora é outro valor pois em cada rodada do looping 'n' vai assumir o valor de uma posição do array '.receitas'
                        // Esse looping e essa soma vão ficar acontecendo até o 'n' ter passado em todas as posições do array '.receitas'
    }
    
    // Ao finalzar esse 'for of' irá retornar dentro da variável 'soma' o somatório de todas as rodadas do looping.
    
    return soma
    
      // Esse processo vai ser do mesmo jeito com o array '.despesas' ATENÇÃO!!! vá para a linha 97 ver a função 'calculaSaldo'.
}

for (let u of usuarios2) { // Do array 'usuarios2' o 'u' vai representar cada posição desse array. ATENÇÃO! Olhe o array 'usuarios2' e volte!. O array 'usuarios2' é um array que armazena objetos. Cada objeto é um usuário. O primeiro objeto é o de 'Savio' que tem 'receitas' e 'despesas'. O segundo objeto é o de 'Marcio' que tem 'receitas' e 'despesas' e assim por diante...
    
    const saldo = calculaSaldo(u.receitas, u.despesas) // Na primeira rodada desse looping que estamos 'u' representa o objeto '0' que é o de Salvio, então 'u.receitas' e 'u.despesas' pegaria o array receitas (receitas: [115.3, 48.7, 98.3, 14.5]) e o array despesas (despesas: [85.3, 13.5, 19.9]) de Salvio. Porém se acompanharmos o codigo de cima pra baixo o array '.receitas' e o array '.despesas' são transformados de arrays em valores únicos pelas funções 'calculaSaldo' e 'somaNumeros'. ATENÇÃO!!! Vá para a linha 106 para continuar e entender a função 'somaNumeros'

    //Aqui em cima ^ (linha 124) temos saldo recebendo o resultado do processamento da função 'calculaSaldo' continuando olhe abaixo o final da explicação a partir da linha 128

    if (saldo > 0) {
        console.log(`${u.nome} possui saldo positivo de ${saldo.toFixed(2)}`) // Tendo o valor saldo pra cada objeto(usuario) imprime em cada rodada do looping o nome de cada objeto e seu respectivo saldo
    } else {
        console.log(`${u.nome} possui saldo negativo de ${saldo.toFixed(2)}`) // toFixed é para escolher a quantidade de casas decimais       
    }
}
