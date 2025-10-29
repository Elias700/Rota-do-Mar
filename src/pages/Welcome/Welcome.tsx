import { useState } from 'react';
import Propaganda from '../../assets/propaganda.png';
import ModalWelcome from '../../components/ModalWelcome/ModalWelcome';
import PrivacyTermsContent from '../../components/PrivacyTermsContent/PrivacyTermsContent'; 

const Welcome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main>
            <section className='bg-[var(--color-primary-50)]'>
                <div className='max-w-6xl mx-auto px-4 py-10 lg:py-16 flex flex-col lg:flex-row items-center gap-8'>
                    <div className='flex flex-col max-w-2xl'>
                        <h1 className='text-center lg:text-left text-3xl lg:text-5xl text-[var(--color-primary-600)] font-[var(--font-chamativa)]'>
                            Bem-vindo ao Rota do Mar
                        </h1>
                        
                        <p 
                            className='mt-6 lg:mt-8 lg:mb-0 text-base lg:text-[1.2rem] text-[var(--color-primary-900)] px-1 lg:px-0'
                        >
                                Neste site, você vai embarcar em uma jornada pelas mais deslumbrantes praias de Salvador, 
                                descobrindo o que cada uma tem de especial. Nossa missão é oferecer todas as informações 
                                que você precisa para planejar seu dia perfeito, seja para relaxar, se aventurar ou simplesmente
                                admirar a paisagem.Navegue por um conteúdo rico e detalhado sobre as praias mais famosas e também
                                sobre as joias escondidas da cidade.
                        </p>
                        
                        <div className='text-center lg:text-left'>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="rounded-lg px-10 py-4 m-1 overflow-hidden relative group cursor-pointer
                                border-2 font-medium border-[var(--color-primary-50)] bg-[var(--color-primary-700)]"
                                >
                                <span
                                    className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45
                                    -translate-x-20 bg-[var(--color-primary-600)] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
                                >
                                </span>
                                <span
                                    className="relative text-[1.2rem] font-semibold text-[var(--color-primary-50)] 
                                    transition duration-300 group-hover:text-white ease">
                                        Saiba mais
                                </span>
                            </button>
                        </div>
                    </div>
                    <img 
                        src={Propaganda} 
                        alt="Divulgação Rota do mar" 
                        className='w-full max-w-xs sm:max-w-sm lg:w-[420px] h-auto'
                    />
                </div>
            </section>
            
            <ModalWelcome 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            >
                <PrivacyTermsContent /> 
            </ModalWelcome>
        </main>
    );
};

export default Welcome;