const livro = {
    titulo: "Quando Acabou",
    autor: "Gustav",
    paginas: 200,
    resumo: function() {
        return `O livro "${this.titulo}" é escrito por ${this.autor} e possui ${this.paginas} páginas.`;
    }
};

console.log(livro.resumo());