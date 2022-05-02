/**1. Implemente uma função que executa uma busca linear sobre um array de um tipo complexo também criado por você (por exemplo: classe Livro, classe Produto). A busca deve receber um determinado valor de atributo e utilizar esse valor para realizar a busca. Por exemplo: busca linear sobre um array de Livro e usando o título do livro para realizar a comparação.*/

class Produto {
    constructor(produtos = []) {
        this.produtos = produtos;
    }

    add({ nomeDoProduto, corDorProduto }) {
        this.produtos.push({ nomeDoProduto, corDorProduto })
    }

    pop() {
        this.produtos.pop();
    }

    buscaLinear(nomeDoProduto) {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nomeDoProduto === nomeDoProduto) {
                return i;
            }
        }
        return null;
    }
}

const produtos = new Produto();
produtos.add({nomeDoProduto: 'Sandalia', corDorProduto: 'Preta'});
produtos.add({nomeDoProduto: 'Tenis', corDorProduto: 'Azul'});
produtos.add({nomeDoProduto: 'Chinelo', corDorProduto: 'Rosa'});
produtos.add({nomeDoProduto: 'Rasteira', corDorProduto: 'Bege'});
produtos.add({nomeDoProduto: 'Tamanco', corDorProduto: 'Amarelo'});

console.log(produtos);
produtos.pop();

console.log(produtos);
console.log(produtos.buscaLinear('Rasteira'));

