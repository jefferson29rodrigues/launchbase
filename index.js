const aluno01 = {
    nome: "Jefferson",
    nota: 10
}

const aluno02 = {
    nome: "Juliana",
    nota: 9.4
}

const aluno03 = {
    nome: "Davi",
    nota: 9
}

const alunos = [
    {
        nome: "Maik",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 3
    },
    {
        nome: "Fulano",
        nota: 8
    }
]

const res = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

console.log(res);
console.log(alunos);
console.log("***************************************************************");

/*===================================
    Aula - Funções e Métodos
    Aula - Estrutura de Repetição
    Aula - Escopo
====================================*/

const alunosTurmaA = [
    {
        nome: "Calebe",
        nota: 6
    },
    {
        nome: "Avila",
        nota: 6
    },
    {
        nome: "Siclano",
        nota: 6
    },
    {
        nome: "C",
        nota: 10
    },
    {
        nome: "A",
        nota: 10
    },
    {
        nome: "S",
        nota: 3
    }
];
const alunosTurmaB = [
    {
        nome: "Everton",
        nota: 8
    },
    {
        nome: "Carla",
        nota: 8
    },
    {
        nome: "Alana",
        nota: 8
    },
    {
        nome: "Novo Aluno",
        nota: 8
    }
];

function calculaMedia(alunos) {
    //return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3; Aula - Funções e Métodos
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota;
    }

    const media = soma / alunos.length;
    return media;
};



const media1 = calculaMedia(alunosTurmaA);
const media2 = calculaMedia(alunosTurmaB);

function enviaMensagem(media, turma) {
    //Se a média for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns`);
    } else {
        console.log(`A media da turma ${turma} é menor que 5`);
    }
};

enviaMensagem(media1, 'turmaA');
enviaMensagem(media2, 'turmaB');
