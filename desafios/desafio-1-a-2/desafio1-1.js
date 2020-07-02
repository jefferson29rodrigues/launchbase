/*=======================
    Cálculo de IMC
========================*/

const nome = "Juliana";
const peso = 66;
const altura = 1.63;
const sexo = "M";

const imc = peso / (altura * altura);

console.log(imc);

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`)
} else {
    console.log(`${nome} você não esta acima do peso`)
}

/*===============================
    Cálculo de aposentadoria
================================*/

const nome2 = "Juliana";
const sexo2 = "F";
const idade = 21;
const contribuicao = 1;

const idadeContribuicao = idade + contribuicao;

if (sexo2 == "M") {
    if(idadeContribuicao >= 95) {
        console.log(`${nome2}, você pode se aposentar!`);
    } else{
        console.log(`${nome2}, você não pode se aposentar!`);
    }    
} else {
    if (idadeContribuicao >= 85) {
        console.log(`${nome2}, você pode se aposentar!`);
    } else {
        console.log(`${nome2}, você não pode se aposentar!`);
    }
}
