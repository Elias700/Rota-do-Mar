import { useState } from 'react';
import Propaganda from '../../assets/propaganda.png';
import ModalWelcome from '../../components/ModalWelcome/ModalWelcome';
import Logo from '../../assets/logo2.png'

const Welcome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            {/* ... Conteúdo da Página Welcome (sua introdução e imagem) ... */}
            <div className='flex items-center bg-[var(--color-primary-100)]'>
                <div className='flex flex-col '>
                    <h1 className='text-center text-5xl font-bold text-[var(--color-primary-600)]'>Bem-vindo ao Rota do Mar</h1>
                    
                    <p className='m-10 text-2xl'>Neste site, você vai embarcar em uma jornada pelas mais deslumbrantes praias de Salvador, descobrindo o que cada uma tem de especial. Nossa missão é oferecer todas as informações que você precisa para planejar seu dia perfeito, seja para relaxar, se aventurar ou simplesmente admirar a paisagem.
                    Navegue por um conteúdo rico e detalhado sobre as praias mais famosas e também sobre as joias escondidas da cidade.
                    </p>
                    
                    <div className='text-center'>
                        <button onClick={() => setIsModalOpen(true)}
                        className="
                            cursor-pointer transition-all 
                            bg-[var(--color-primary-600)] text-white text-2xl px-6 py-2 rounded-lg
                            border-[var(--color-primary-300)]
                            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-blue-200  active:shadow-none"
                        >
                            Saiba mais
                        </button>
                    </div>
                </div>
                <img src={Propaganda} alt="Divulgação Rota do mar" className='h-150 w-350'/>
            </div>
            
            <ModalWelcome 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            >

                <div className="grid md:grid-cols-2 gap-8 text-gray-700"> 
                    <div className='flex flex-col items-center justify-start gap-10'>
                        <img src={Logo} alt="Logo" className=''/>
                       <div className='flex flex-col'>
                             <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary-600)]">Sobre o Rota do Mar</h2>
                        <p className="mb-4 text-lg">
                            Bem-vindo ao Rota do Mar, o seu guia completo para as praias de Salvador. Nossa missão é transformar sua experiência à beira-mar, oferecendo todas as informações que você precisa para planejar seu dia perfeito, desde a localização das praias até as condições do tempo.
                        </p>
                       </div>
                    </div>

                    <div>
                        {/* <h1 className="text-5xl font-bold mb-4 text-[var(--color-primary-600)]">Saiba mais</h1> */}
                        <div className="space-y-4 text-lg"> 
                            <div className='pt-10'>
                                <h2 className="text-4xl text-[var(--color-primary-600)] font-bold">Sobre o site</h2> Este site foi criado para que você conheça melhor as praias de Salvador — suas belezas naturais, histórias, curiosidades e dicas atualizadas sobre clima e maré. Aqui, você pode explorar cada praia, descobrir o que há de melhor em cada uma e planejar sua visita com facilidade.
                            </div>
                            <div className='pt-10'>
                                <h2 className="text-3xl text-[var(--color-primary-600)] font-bold">O que você encontra aqui</h2> 
                                <ul>
                                    <li><strong>Localização interativa:</strong> veja no mapa onde cada praia está e como chegar.</li>
                                    <li><strong>Condições do dia:</strong> acompanhe o clima e a maré em tempo real.</li>
                                    <li><strong>Guia completo:</strong> informações sobre estrutura, segurança, acessibilidade e perfil do público.</li>
                                    <li><strong>Curiosidades:</strong> fatos interessantes, cultura local e eventos que tornam Salvador única.</li>
                                    <li><strong>Galeria:</strong> imagens e vídeos das praias mais famosas e também das menos conhecidas.</li>
                                </ul>
                            </div>
                            <div className='pt-10'>
                                <h2 className="text-3xl text-[var(--color-primary-600)] font-bold">Como usar o site</h2> Navegue pelo menu principal para escolher uma praia e acessar suas informações.
                                    No mapa interativo, clique nos marcadores para abrir detalhes.
                                    Você também pode usar o campo de busca para encontrar uma praia específica.
                            </div>
                            <div className='pt-10'>
                                <h2 className="text-3xl text-[var(--color-primary-600)] font-bold">Funcionalidades extras</h2> 
                                <ul>
                                    <li className='list-disc'>Mapa dinâmico com zoom e filtros por região.</li>
                                    <li className='list-disc'>Clima atualizado automaticamente.</li>
                                    <li className='list-disc'>Tabela de marés com horários ideais para banho e prática de esportes.</li>
                                    <li className='list-disc'>Favoritar praias (caso queira implementar no futuro).</li>
                                    <li className='list-disc'>Compartilhar as praias favoritas nas redes sociais.</li>
                                </ul>  
                            </div>
                            <div className='pt-10'>
                                <h2 className="text-3xl text-[var(--color-primary-600)] font-bold">Missão do projeto</h2> Promover o turismo consciente e valorizar as belezas naturais de Salvador, oferecendo informações confiáveis, atualizadas e acessíveis para moradores e visitantes.
                            </div>
                            <div className='pt-10'>
                                <h2 className="text-3xl text-[var(--color-primary-600)] font-bold">Contato e contribuições</h2> Encontrou uma informação desatualizada ou quer sugerir uma nova praia para o site?
                                Entre em contato conosco pelo e-mail contato@praiassalvador.com
                                ou pelas redes sociais.
                            </div>
                        </div>
                    </div>
                </div>
            </ModalWelcome>
        </div>
    );
};

export default Welcome;