/**2. Implemente uma função que executa uma busca binária sobre um array de um tipo complexo também criado por você (por exemplo: classe Livro, classe Produto). A busca deve receber um determinado valor de atributo e utilizar esse valor para realizar a busca. Por exemplo: busca linear sobre um array de Livro e usando o título do livro para realizar a comparação. */


class Livro {

    constructor(livros = []) {
        this.livros = livros;
    }

    add({ id, nomeDoLivro, autorDoLivro}) {
        this.livros.push({ id, nomeDoLivro, autorDoLivro})
    }

    pop() {
        this.livros.pop();
    }

   
    // listaLivros() {
    //     return this.livros;
    // }

    binarySearch(listaLivros, start, end, id) {
        const mid = start + Math.floor((end - start) / 2);
        if (start <= end) {
            if (listaLivros[mid] == id) {
                return mid;
            }
            if (item < listaLivros[mid]) {
                return binarySearch(listaLivros, start, mid - 1, id);
            }
            if (item > listaLivros[mid]) {
                return binarySearch(listaLivros, mid + 1, end, id);
            }
        }
        return null;
    };

}

const listaLivros = new Livro();


listaLivros.add({id: 01, nomeDoLivro: 'Sandalia', autorDoLivro: 'Preta'});
listaLivros.add({id: 02, nomeDoLivro: 'Chinelo', autorDoLivro: 'Azul'});

console.log(listaLivros);

console.log(listaLivros.binarySearch(listaLivros, 0, listaLivros.length - 1, 1));

//console.log(binarySearch(listaLivros, 0, listaLivros.length, 12));
// console.log(binarySearch(sortedList, 0, sortedList.length, 10));
// console.log(binarySearch(sortedList, 0, sortedList.length, 9));
// console.log(binarySearch(sortedList, 0, sortedList.length, 67));

// console.log(listaLivros);
// livros.pop();





