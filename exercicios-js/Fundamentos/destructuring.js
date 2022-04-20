// novo recurso do ES2015 - operador de desestruturação

const pessoa = {
    nome: 'Giovanna',
    idade: 30,
    endereco: {
        logradouro: 'Rua Benedito Pantaleao',
        numero: 10
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

