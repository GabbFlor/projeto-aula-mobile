const listaProdutos = {
    itens: {
        titulo: "Produtos",
        lista: [
            {
                id: 1,
                nome: "Placa de vídeo RTX 5090",
                tipo: "placa de video",
                descricao: "Potência máxima para games em 4K e criação de conteúdo avançada. Ray Tracing e DLSS 3 para gráficos realistas e alto desempenho.",
                valor: 26999.99,
                imagem: require('../../assets/img1.jpg')
            },
            {
                id: 2,
                nome: "Processador Intel Core i9 14900K",
                tipo: "processador",
                descricao: "Desempenho extremo com 24 núcleos e frequência turbo de até 6.0GHz. Ideal para jogos e tarefas pesadas com máxima eficiência.",
                valor: 4299.99,
                imagem: require('../../assets/img2.jpg')
            },
            {
                id: 3,
                nome: "Teclado Mecânico Redragon Kumara RGB",
                tipo: "periferico",
                descricao: "Compacto e resistente, com switches Outemu e iluminação RGB personalizável. Ideal para precisão em jogos e durabilidade no uso diário.",
                valor: 280.64,
                imagem: require('../../assets/img3.jpg')
            },
            {
                id: 4,
                nome: "Controle Gamer 8BitDo Ultimate 2.4G Wireless",
                tipo: "periferico",
                descricao: "Controle sem fio com analógicos Hall Effect, botões traseiros programáveis e base de carregamento. Compatível com PC, Switch e dispositivos móveis.​",
                valor: 489.00,
                imagem: require('../../assets/img4.jpeg')
            },
            {
                id: 5,
                nome: "Headset Gamer HyperX Cloud Stinger",
                tipo: "periferico",
                descricao: "Leve e confortável, com drivers de 50mm e microfone com cancelamento de ruído. Ideal para longas sessões de jogo com áudio imersivo.",
                valor: 169.90,
                imagem: require('../../assets/img5.jpeg')
            },
            {
                id: 6,
                nome: "Mouse Gamer Redragon M686 Vampire Elite",
                tipo: "periferico",
                descricao: "Mouse sem fio com sensor de 16.000 DPI, iluminação RGB e 8 botões programáveis. Ideal para precisão e personalização em jogos competitivos.​",
                valor: 259.90,
                imagem: require('../../assets/img6.jpeg')
            },
        ]
    }
}

export default listaProdutos;