import Propaganda from '../../assets/propaganda.png'

const Welcome = () => {
    return (
        <div>
            <div className='flex items-center bg-[var(--color-primary-100)]'>
                <div className='flex flex-col '>
                    <h1 className='text-center text-5xl font-bold text-[var(--color-primary-600)]'>Bem-vindo ao Rota do Mar</h1>
                    <p className='m-10 text-2xl'>Neste site, você vai embarcar em uma jornada pelas mais deslumbrantes praias de Salvador, descobrindo o que cada uma tem de especial. Nossa missão é oferecer todas as informações que você precisa para planejar seu dia perfeito, seja para relaxar, se aventurar ou simplesmente admirar a paisagem.
                    Navegue por um conteúdo rico e detalhado sobre as praias mais famosas e também sobre as joias escondidas da cidade.
                    </p>
                    <div className='text-center'>
                        <button className='border-none p-4 px-15 rounded-2xl cursor-pointer bg-[var(--color-primary-600)] text-[var(--color-primary-100)] text-2xl hover:bg-[var(--color-primary-500)] transition duration-[500ms]'>Saiba mais</button>
                    </div>
                </div>
                <img src={Propaganda} alt="Divulgação Rota do mar" className='h-150 w-350'/>
            </div>
        </div>
    )
};

export default Welcome;