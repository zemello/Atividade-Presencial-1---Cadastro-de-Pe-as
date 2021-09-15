
// Cadastramento de peças : atividade Presencial 2 - 15/09/2021

// -------------------------------------------------------------- Quantidade de Peças v
const listadepecas = ['peça de teste', 'AB', 'peca B']

console.log('quantidade de peças')
  //---- Estrutura de Repetição ( Quantidades de peças )-------------------------------
if (listadepecas.length <= 10) {
    console.log('as peças podem ser cadastradas');
};

//-------------------------------------------------------------- Quantidade de Caracteres v
console.log('quantidade de caracteres')
  //---- Estrutura de Repetição ( Quantidade de Caracteres)--------------------------------
for(let index = 0; index < listadepecas.length; index++) {
    const pecaatual = listadepecas[index];
    if (pecaatual.length < 3) {
        console.log(pecaatual + ': a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.')
    } else {
        console.log(pecaatual + ': a peça pode ser cadastrada.')
    }

};

//-------------------------------------------------------------- Peso da peça em Gramas v 
console.log('peso da peça')

const peodapecaemgramas = 50;
//---- Estrutura de Repetição ( Peso da Peça )-----------------------------------------
if (peodapecaemgramas >= 100) {
    console.log('peso suficiente.')
} else {
    console.log('valor insulficiente')
};
