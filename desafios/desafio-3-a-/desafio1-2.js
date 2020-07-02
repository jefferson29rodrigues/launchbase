const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilhermina Gembala",
        numero: 260
    }
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

/*==============================

 ==============================*/

 const programador = {
     nome: "Akita",
     idade: 45,
     tecnologias: [
         {
            nome: 'C++',
            especialidade: 'Desktop'
         },
         {
            nome: 'Python',
            especialidade: 'Data Science'
         },
         {
            nome: 'Javascript',
            especialidade: 'Web/Mobile'
         }
     ]
 };

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
