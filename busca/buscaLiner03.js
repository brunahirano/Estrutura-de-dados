/**3. Implemente uma função que executa uma busca linear sobre um array de um tipo complexo também criado por você (por exemplo: classe Livro, classe Produto) e que retorna um array na resposta com todos os itens que foram encontrados. Por exemplo: busca sobre um arrau de Livro e usando o autor como o campo de comparação deve retornar todos os livros de um mesmo autor. */

class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    toString() {
        return `${this.titulo} - ${this.autor}`
    }
}

const buscaLinear = (livros, autor) => {
    let results = []
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].autor === autor) {
            results.push(livros[i]);
        }
    }
    return results;
}

const livros = [
    new Livro('Livro 1','Autor 1'),
    new Livro('Livro 2','Autor 1'),
    new Livro('Livro 3','Autor 1'),
    new Livro('Livro 4','Autor 2'),
    new Livro('Livro 5','Autor 2'),
    new Livro('Livro 6','Autor 2'),
]


console.log(livros);


console.log(buscaLinear(livros, 'Autor 2').toString());