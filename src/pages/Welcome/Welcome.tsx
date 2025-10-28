import { useState } from 'react';
import Propaganda from '../../assets/propaganda.png';
import ModalWelcome from '../../components/ModalWelcome/ModalWelcome';
import PrivacyTermsContent from '../../components/PrivacyTermsContent/PrivacyTermsContent'; 

const Welcome = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main>
            <section className='flex items-center bg-[var(--color-primary-50)]'>
                <div className='flex flex-col '>
                    <h1 className='text-center text-5xl font-bold text-[var(--color-primary-60'>
                        Bem-vindo ao Rota do Mar
                    </h1>
                    
                    <p 
                        className='m-10 text-[1.2rem]'
                        >
                            Neste site, você vai embarcar em uma jornada pelas mais deslumbrantes praias de Salvador, 
                            descobrindo o que cada uma tem de especial. Nossa missão é oferecer todas as informações 
                            que você precisa para planejar seu dia perfeito, seja para relaxar, se aventurar ou simplesmente
                            admirar a paisagem.Navegue por um conteúdo rico e detalhado sobre as praias mais famosas e também
                            sobre as joias escondidas da cidade.
                    </p>
                    
                    <div className='text-center'>
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
                <img src={Propaganda} alt="Divulgação Rota do mar" className='h-150 w-350'/>
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