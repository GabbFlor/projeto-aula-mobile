const listaProdutos = {
    itens: {
        titulo: "Produtos",
        lista: [
            {
                id: 1,
                nome: "RTX 5090",
                tipo: "placa de video",
                descricao: "Melhor placa de vídeo atualmente para jogos",
                valor: 26999.99,
                imagem: require('../../assets/img1.jpg')
            },
            {
                id: 2,
                nome: "Ryzen 5 5600X",
                tipo: "processador",
                descricao: "Processador intermediário voltado para jogos.",
                valor: 999.99,
                imagem: require('../../assets/img2.jpg')
            },
        ]
    }
}

export default listaProdutos;