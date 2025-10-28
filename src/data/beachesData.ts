
export interface Beach {
  id: number; 
  name: string;
  description: string;
  imageUrl: string[]; 
}

export const beaches: Beach[] = [
    {
        id: 1,
        name: 'Praia Farol da Barra',
        description: 'Uma das praias mais famosas de Salvador, com o icônico Farol da Barra e águas calmas, ideal para banho.',
        imageUrl: [
            'https://media-cdn.tripadvisor.com/media/photo-s/07/33/52/07/farol-da-barra.jpg',
            'https://www.salvadordabahia.com/wp-content/uploads/2017/12/praia-farol-da-barra-07-12-20.jpg',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/35/22/bb/caption.jpg?w=800&h=400&s=1',
            'https://www.guiaviagensbrasil.com/imageUrlns/foto-praia-do-farol-da-barra-salvador-bahia-brasil-2210.jpg',
            'https://tudosobrepraias.com/wp-content/uploads/2025/02/Praia-do-Farol-da-Barra-Salvador.webp',
            'https://www.dicasdonossobrasil.com.br/wp-content/uploads/2018/05/Farol-da-Barra-em-Salvador-Praia-2.jpg'
        ]
    },
    {
        id: 2,
        name: 'Praia do Porto da Barra',
        description: 'Conhecida por seu pôr do sol espetacular e águas tranquilas e prazerosa.',
        imageUrl: [
            'https://www.costadosauipe.com.br/images/news/0478/porto_da_barra_4.jpg',
            'https://www.costadosauipe.com.br/images/news/0478/porto_da_barra_1_1.jpg',
            'https://www.costadosauipe.com.br/images/news/0478/porto_da_barra_4.jpg', 
            'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/159000/159679-Porto-Da-Barra-Beach.jpg'
        ]
    },
    {
        id: 3,
        name: 'Praia de Stella Maris',
        description: 'Com ondas fortes e extensa faixa de areia, é perfeita para a prática de surf e caminhadas.',
        imageUrl: [
            'https://imgmd.net/images/v1/guia/1713837/praia-de-stella-maris.jpg',
            'https://imgmd.net/images/v1/guia/1713847/praia-de-stella-maris.jpg',
            'https://static.wixstatic.com/media/954288_de594836db5b45e98ca88bd1e0d2c2fe~mv2.jpg/v1/fill/w_699,h_393,al_c,lg_1,q_80,enc_auto/954288_de594836db5b45e98ca88bd1e0d2c2fe~mv2.jpg',
            'https://imgmd.net/images/v1/guia/1713842/praia-de-stella-maris.jpg'
        ]
    },
    {
        id: 4,
        name: 'Praia de Itapoã',
        description: 'Cenário de canções e poemas, é uma praia com coqueiros e areia clara, ideal para relaxar e aproveitar a paisagem.',
        imageUrl: [
            'https://turismo.itapoa.sc.gov.br/uploads/sites/108/2022/10/2442827-scaled.jpg',
            'https://www.temporadalivre.com/uploads/editor/pictures/0ca253789a5f/content_content_itapoa.jpg',
            'https://www.temporadalivre.com/uploads/editor/pictures/fc489dba3d72/content_itapoa-01.jpg',
            'https://www.viajecomigo.com/wp-content/uploads/2022/03/praia-do-Farol-de-Itapua-Salvador-Brasil-%C2%A9-Viaje-Comigo.jpg'
        ]
    },
    {
        id: 5,
        name: 'Praia do Rio Vermelho',
        description: 'Localizada em um bairro boêmio, é conhecida por sua vida noturna, culinária e festas religiosas.',
        imageUrl: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a8/0c/53/caption.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a8/0c/53/caption.jpg?w=1200&h=-1&s=1', 
        ]
    },
    {
        id: 6,
        name: 'Praia do Buracão',
        description: 'Uma pequena enseada charmosa e reservada, com ondas fortes e um clima mais intimista.',
        imageUrl: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a8/0c/53/caption.jpg?w=1200&h=-1&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a8/0c/53/caption.jpg?w=1200&h=-1&s=1', 
        ]
    },
    {
        id: 7,
        name: 'Praia Amaralina',
        description: 'Com ondas fortes e recifes de corais, é bastante utilizada para a prática de surf e pesca.',
        imageUrl: [
            'https://www.guiaviagensbrasil.com/imageUrlns/foto-praia-da-amaralina-salvador-bahia-brasil-2212.jpg',
            'https://www.guiaviagensbrasil.com/imageUrlns/foto-praia-da-amaralina-salvador-bahia-brasil-2212.jpg', 
        ]
    },
    {
        id: 8,
        name: 'Praia de Ondina',
        description: 'Ponto inicial do circuito de carnaval, possui águas calmas e é cercada por hotéis e resorts.',
        imageUrl: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/60/93/4f/poucos-conhecem-mas-esta.jpg?w=700&h=400&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/60/93/4f/poucos-conhecem-mas-esta.jpg?w=700&h=400&s=1', 
        ]
    },
    {
        id: 9,
        name: 'Praia Jardim de Alá',
        description: 'Uma praia urbanizada, com ciclovia e calçadão, excelente para quem busca atividades ao ar livre.',
        imageUrl: [
            'https://www.guiaviagensbrasil.com/imagens/praia-jardim-de-ala-salvador-ba-9391.jpg',
            'https://www.guiaviagensbrasil.com/imagens/praia-jardim-de-ala-salvador-ba-9391.jpg', 
        ]
    },
    {
        id: 10,
        name: 'Praia de Piatã',
        description: 'Com extensa faixa de areia, é uma das praias mais frequentadas de Salvador, ponto importante.',
        imageUrl: [
            'https://static.wixstatic.com/media/954288_a14ec97c9bd04a03ac0f1b1a4d98e986~mv2.jpg/v1/fill/w_500,h_281,al_c,q_80,enc_auto/954288_a14ec97c9bd04a03ac0f1b1a4d98e986~mv2.jpg',
            'https://static.wixstatic.com/media/954288_a14ec97c9bd04a03ac0f1b1a4d98e986~mv2.jpg/v1/fill/w_500,h_281,al_c,q_80,enc_auto/954288_a14ec97c9bd04a03ac0f1b1a4d98e986~mv2.jpg', 
        ]
    },
    {
        id: 11,
        name: 'Praia de Armação',
        description: 'Conhecida por suas águas agitadas e ventos fortes, é ideal para a prática de esportes náuticos.',
        imageUrl: [
            'https://i0.wp.com/melhoresdestinosdobrasil.com.br/wp-content/uploads/2015/12/praia-armacao-salvador-bahia.jpg?resize=800%2C560&ssl=1',
            'https://i0.wp.com/melhoresdestinosdobrasil.com.br/wp-content/uploads/2015/12/praia-armacao-salvador-bahia.jpg?resize=800%2C560&ssl=1', 
        ]
    },
    {
        id: 12,
        name: 'Praia de Jaguaribe',
        description: 'Famosa por suas ondas, é um ponto de encontro para surfistas e praticantes de kitesurf.',
        imageUrl: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/32/f2/ce/praia-de-jaguaribe-salvador.jpg?w=900&h=500&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/32/f2/ce/praia-de-jaguaribe-salvador.jpg?w=900&h=500&s=1', 
        ]
    },
    {
        id: 13,
        name: 'São Tomé de Paripe',
        description: 'Uma praia mais afastada, com águas calmas e ideal para famílias com crianças.',
        imageUrl: [
            'https://s2-g1.glbimg.com/ciezn2_RS4XMqH6qAoBhfyvmlEc=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/L/0/EtDyqaTXyIRnxxBzFbbw/img-6130.jpg',
            'https://s2-g1.glbimg.com/ciezn2_RS4XMqH6qAoBhfyvmlEc=/0x0:1700x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/L/0/EtDyqaTXyIRnxxBzFbbw/img-6130.jpg', 
        ]
    },
    {
        id: 14,
        name: 'Praia da Pituba',
        description: 'Praia urbana, com ondas fortes e uma orla bem estruturada, utilizada para caminhadas e esportes.',
        imageUrl: [
            'https://media-cdn.tripadvisor.com/media/photo-s/07/84/2b/62/praia-pituba.jpg',
            'https://media-cdn.tripadvisor.com/media/photo-s/07/84/2b/62/praia-pituba.jpg', 
        ]
    },
    {
        id: 15,
        name: 'Praia de Patamares',
        description: 'Com ondas fortes e extensa faixa de areia, é bastante procurada por surfistas e praticantes de esportes aquáticos.',
        imageUrl: [
            'https://www.essemundoenosso.com.br/wp-content/uploads/2014/03/praia-de-patamares-1.jpg',
            'https://www.essemundoenosso.com.br/wp-content/uploads/2014/03/praia-de-patamares-1.jpg', 
        ]
    },
    {
        id: 16,
        name: 'Praia de Tubarão',
        description: 'Uma praia mais tranquila e de águas calmas, ideal para quem busca um refúgio da agitação da cidade.',
        imageUrl: [
            'https://lh5.googleusercontent.com/p/AF1QipMgxoDlLbFNP6DcNBoJ0WQp6USheSXt1s2q9RlI=s1600', 
            'https://lh5.googleusercontent.com/p/AF1QipMgxoDlLbFNP6DcNBoJ0WQp6USheSXt1s2q9RlI=s1600', 
        ]
    },
    {
        id: 17,
        name: 'Praia de Pituaçu',
        description: 'Localizada próxima ao Parque de Pituaçu, é uma praia mais urbanizada de Salvador e visitada.',
        imageUrl: [
            'https://static.wixstatic.com/media/954288_c0ea959ada884f9aaedc9b548d956d86~mv2.jpg/v1/fill/w_699,h_393,al_c,lg_1,q_80,enc_auto/954288_c0ea959ada884f9aaedc9b548d956d86~mv2.jpg',
            'https://static.wixstatic.com/media/954288_c0ea959ada884f9aaedc9b548d956d86~mv2.jpg/v1/fill/w_699,h_393,al_c,lg_1,q_80,enc_auto/954288_c0ea959ada884f9aaedc9b548d956d86~mv2.jpg', 
        ]
    },
    {
        id: 18,
        name: 'Praia da Boca do Rio',
        description: 'Com águas calmas e uma vista para o rio e o mar, é uma praia tranquila, ideal para quem busca paz e sossego.',
        imageUrl: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/35/22/bb/caption.jpg?w=800&h=400&s=1',
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/35/22/bb/caption.jpg?w=800&h=400&s=1', 
        ]
    },
    {
        id: 19,
        name: 'Praia da Paciência',
        description: 'Pequena e charmosa, é um local de refúgio e calmaria, ideal para quem busca um lugar mais tranquilo.',
        imageUrl: [
            'https://www.salvadordabahia.com/wp-content/uploads/2017/12/cultural-rio-vermelho-07-12-20.jpg',
            'https://www.salvadordabahia.com/wp-content/uploads/2017/12/cultural-rio-vermelho-07-12-20.jpg', 
        ]
    },
    {
        id: 20,
        name: 'Ilha dos Frades',
        description: 'Um paraíso de águas cristalinas e tranquilas. É ideal para mergulho e para quem busca contato com a natureza em um ambiente mais reservado.',
        imageUrl: [
            'https://s2.glbimg.com/wTvHVw5KP_o0tlZK2Zk6tyRParc=/smart/e.glbimg.com/og/ed/f/original/2022/01/14/ilha-dos-frades-2.jpg',
            'https://s2.glbimg.com/wTvHVw5KP_o0tlZK2Zk6tyRParc=/smart/e.glbimg.com/og/ed/f/original/2022/01/14/ilha-dos-frades-2.jpg', 
        ]
    }
];