

//Uma tabela hash é uma estrutura que permite associar uma chave a um valor e, posteriormente, ter acesso ao valor a partir de sua chave associada. A chave é transformada por uma função em uma posição na tabela; usando sempre essa transformação, a localização de chaves na tabela é realizada rapidamente.


const fruits = ["apple", "banana", 'orange'];


// console.log(fruits)

//função para transformar string em Hash
//Usando o método charcodeAt, o valor respeitando p tamanho do array fruit
function hashToString(fruit) {
    let hash = 0;

    for (let i = 0; i < fruit.length; i++) {
        hash += fruit.charCodeAt(i);
    }

    // colisao
    while (fruit[hash] !== undefined) {
        hash++;
    }

    return hash;
}



console.log(fruits)

console.log(hashToString("maca"))

console.log(hashToString("pera"))



