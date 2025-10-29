
import React from 'react';
import Logo from '../../assets/logo2.png'; 

const PrivacyTermsContent: React.FC = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className='flex flex-col items-center justify-start gap-10'>
                <img 
                    src={Logo} 
                    alt="Logo"
                />
                <div className='flex flex-col'>
                    <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary-600)]">Sobre o Rota do Mar</h2>
                    <p className="mb-4 text-lg text-[var(--color-primary-900)]">
                        Bem-vindo ao Rota do Mar, o seu guia completo para as praias de Salvador. Nossa missão é transformar sua experiência à beira-mar, oferecendo todas as informações que você precisa para planejar seu dia perfeito, desde a localização das praias até as condições do tempo.
                    </p>
                </div>
            </div>

            <div>
                <div className="space-y-4 text-lg"> 
                    <div className='pt-10 text-[var(--color-primary-900)]'>
                        <h2 className="text-4xl text-[var(--color-primary-600)] font-bold">Sobre o site</h2> 
                        <p className='pt-3'>
                            Este site foi criado para que você conheça melhor as praias de Salvador — suas belezas naturais, histórias, curiosidades e dicas atualizadas sobre clima e maré. Aqui, você pode explorar cada praia, descobrir o que há de melhor em cada uma e planejar sua visita com facilidade.
                        </p>
                    </div>
                    <div className='pt-10'>
                        <h2 className="text-3xl text-[var(--color-primary-600)] font-bold">O que você encontra aqui</h2> 
                        <ul className='[&>li]:text-[var(--color-primary-900)] pt-3'>
                            <li>
                                <strong 
                                    className='text-[var(--color-primary-500)]'>
                                        Localização interativa:
                                </strong> 
                                    veja no mapa onde cada praia está e como chegar.
                            </li>
                            <li>
                                <strong className='text-[var(--color-primary-500)]'>Condições do dia:</strong> 
                                    acompanhe o clima e a maré em tempo real.
                            </li>
                            <li>
                                <strong 
                                    className='text-[var(--color-primary-500)]'>
                                        Guia completo:
                                    </strong> 
                                        informações sobre estrutura, segurança, acessibilidade e perfil do público.
                            </li>
                            <li>
                                <strong 
                                    className='text-[var(--color-primary-500)]'>
                                        Curiosidades:
                                </strong> 
                                    fatos interessantes, cultura local e eventos que tornam Salvador única.
                            </li>
                            <li>
                                <strong 
                                    className='text-[var(--color-primary-500)]'>
                                        Galeria:
                                </strong>
                                    imagens e vídeos das praias mais famosas e também das menos conhecidas.
                            </li>
                        </ul>
                    </div>
                    <div className='pt-10'>
                        <h2 className="text-3xl text-[var(--color-primary-600)] font-bold">Como usar o site</h2> 
                        <p className='text-[var(--color-primary-900)] pt-3'>
                            Navegue pelo menu principal para escolher uma praia e acessar suas informações.
                            No mapa interativo, clique nos marcadores para abrir detalhes.
                            Você também pode usar o campo de busca para encontrar uma praia específica.
                        </p>
                    </div>
                    <div className='pt-10'>
                        <h2 className="text-3xl text-[var(--color-primary-600)] font-bold">Funcionalidades extras</h2> 
                        <ul className='[&>li]:text-[var(--color-primary-900)] marker:text-[var(--color-primary-600)] pt-3'>
                            <li className='list-disc '>Mapa dinâmico com zoom e filtros por região.</li>
                            <li className='list-disc'>Clima atualizado automaticamente.</li>
                            <li className='list-disc'>Tabela de marés com horários ideais para banho e prática de esportes.</li>
                            <li className='list-disc'>Favoritar praias (caso queira implementar no futuro).</li>
                            <li className='list-disc'>Compartilhar as praias favoritas nas redes sociais.</li>
                        </ul>
                    </div>
                    <div className='pt-10'>
                        <h2 className="text-3xl text-[var(--color-primary-600)] font-bold">Missão do projeto</h2> 
                        <p className='text-[var(--color-primary-900)] pt-3'>
                            Promover o turismo consciente e valorizar as belezas naturais de Salvador, oferecendo informações confiáveis, atualizadas e acessíveis para moradores e visitantes.
                        </p>
                    </div>
                    <div className='pt-10'>
                        <h2 className="text-3xl text-[var(--color-primary-600)] font-bold">Contato e contribuições</h2> 
                        <p className='text-[var(--color-primary-900)] pt-3'>
                            Encontrou uma informação desatualizada ou quer sugerir uma nova praia para o site?
                            Entre em contato conosco pelo e-mail rotadomar@gmail.com
                            ou pelas redes sociais.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyTermsContent;