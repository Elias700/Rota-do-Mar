import imgMapa from '../../assets/icone-praia.png'; 

const Map: React.FC = () => { 
  return (
    <main className='bg-[var(--color-primary-10)]'> 
      <div
        id='mapa' 
        className='pt-20 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'
      >     
        <h1 className='text-5xl text-center text-[var(--color-primary-700)] pt-10 pb-4'>
            Mapa 
        </h1>

        <p 
          className='text-lg text-center text-[var(--color-primary-600)] 
          mb-10 max-w-3xl mx-auto flex items-center justify-center'
        >
          Localize as praias através desse icone. 
          <img 
            src={imgMapa} 
            alt="Icone de praia" 
            className='h-8 w-8 mr-2 inline-block' 
          />  
        </p>

        <div className='relative w-full overflow-hidden rounded-xl shadow-2xl mx-auto pb-[75%]'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155888.42995387604!2d-38.43083748202657!3d-12.900748135868861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716112050422ebd%3A0xf71c84369573db9d!2sSalvador%2C%20BA!5e1!3m2!1spt-BR!2sbr!4v1761656975022!5m2!1spt-BR!2sbr" 
            style={{ border: '0' }}
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className='absolute top-0 left-0 w-full h-full' 
          >
          </iframe>
        </div>
      </div>
    </main>
  );
};

export default Map;