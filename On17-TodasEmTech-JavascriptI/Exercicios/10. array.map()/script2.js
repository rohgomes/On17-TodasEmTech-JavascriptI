/* const winners = [
    {
        nome: 'Equipe Maravilinda',
        pais: 'Canadá',
    },
    {
        nome: 'Liga da Justiça',
        pais: 'EUA',
    },
    {
        nome: 'Mega Grupo',
        pais: 'Brasil',
    },
];

const vencedores = winners.map((equipe) => {
    return equipe.nome;
});

const paises = winners.map(function(local) {
    return local.pais
})

console.log(paises); */


const nomes = ['Ellie', 'Bárbara', 'Mariana', 'Lara', 'Gisele']

nomes.map((nome)=>{
    if(nome === 'Bárbara') {
        return console.log(`Olá ${nome}`);
    }
})
