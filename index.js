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

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

console.log(media);
console.log(alunos);
