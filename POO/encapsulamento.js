/**
 * Encapsulamento - Exemplo
 * Exercicio 1 - Quero que vocês pesquisem sobre modos de encapsular atributos (#) e tente fazer isso na Pessoa
 */

//Ao encapsular um atributi utilizando a #,  estou transformando um atributo em privado e ela não pode ser acessado diretamente. Para conseguir acessar devo utilizar getters e setters.

class Pessoa {
  #nome 
  #idade


  constructor(nome, idade) {
    this.#nome = nome;
    this.#idade = idade;
  }

  get nome(){
    return this.#nome
  }

  get idade(){
    return this.#idade
  }

  set nome(nome) {
    this.#nome = nome
  }

  set idade(idade){
    this.#idade = idade
  }

  apresentar() {
    return `O meu nome é ${this.#nome} e tenho ${this.#idade} anos`
  
  }

  verificaIdade() {
    if (this.#idade > 18) {
      console.log('Essa pessoa é Maior de Idade');
    } else {
      console.log('Essa pessoa é Menor de Idade')
    }
  }
}

let pessoa = new Pessoa("Bruna", 31);
//console.log(pessoa.#nome) // console undefined, pois agora é privado.
console.log(pessoa.nome);
pessoa.nome = "Ana" //só consigo mudar pq tenho o set
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.verificaIdade());
console.log(pessoa.apresentar());

