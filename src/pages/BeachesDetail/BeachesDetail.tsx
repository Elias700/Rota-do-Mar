import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import { beaches } from '../../data/beachesData'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// 1. Importa os componentes do react-slick
import Slider from "react-slick"; 
// É essencial que você tenha importado os estilos globais em outro lugar

const BeachesDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const beachId = parseInt(id || '0'); 
    const beach = beaches.find(b => b.id === beachId);

    useEffect(() => {
        // Ensure page starts at the top when navigating here
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);

    if (!beach) {
        return <div>Erro 404: Praia não encontrada ou ID inválido.</div>;
    }

    // 2. Configurações do Carrossel (você pode customizar isso!)
    const settings = {
        dots: true, // Adiciona pontinhos de navegação
        infinite: true, // Loop infinito
        speed: 500,
        slidesToShow: 1, // Mostra 1 slide por vez
        slidesToScroll: 1,
        autoplay: true, // Opcional: passa as fotos automaticamente
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <Header />
            
              <div className='mt-40'>
                  <Link to="/" className='text-[var(--color-primary-600)] hover:underline p-10 font-medium cursor-pointer'>
                      Voltar para Página principal
                  </Link>
                  <h1 className='text-[var(--color-primary-700)] text-4xl text-center font-bold p-10'>
                      {beach.name}
                  </h1>

                  {/*CARROSSEL */}
                  <div className="max-w-4xl mx-auto mb-10"> 
                      <Slider {...settings}>
                         
                          {beach.imageUrl.map((url, index) => (
                              <div key={index}>
                                  <img 
                                      src={url} 
                                      alt={`${beach.name} - Foto ${index + 1}`}
                                      className='w-full h-96 object-cover rounded-lg' 
                                  />
                              </div>
                          ))}
                      </Slider>
                  </div>

                  <div className='max-w-5xl mx-auto p-6'>
                        <p className='mb-6 text-[var(--color-primary-800)] text-lg '>
                            {beach.description}
                        </p>
                        <div 
                            className="mb-8 bg-[var(--color-background-card-blue)] 
                            rounded-xl p-4 shadow cursor-pointer 
                            hover:bg-blue-100 hover:border-blue-300 hover:shadow-lg 
                            hover:scale-[1.01] transition-all duration-300"
                        >
                            <h2 
                                className="text-xl font-semibold text-[var(--color-primary-700)] mb-2">
                                    🌦️ Clima atual
                            </h2>
                            <p 
                                className="text-[var(--color-primary-900)]">
                                nuvens dispersas | 
                                <strong className='text-[var(--color-primary-700)] ml-1'>
                                    26°C
                                </strong>
                            </p>
                            <p 
                                className="text-[var(--color-primary-900)]">
                                Vento: 
                                <strong className='text-[var(--color-primary-700)]'>
                                    18 km/h | Chuva: 42%
                                </strong>
                            </p>
                        </div>
                        <div 
                            className="mb-8 bg-[var(--color-background-card-green)]
                            rounded-xl p-4 shadow cursor-pointer 
                            hover:bg-green-100 hover:border-green-300 hover:shadow-lg 
                            hover:scale-[1.01] transition-all duration-300"
                        >
                            <h2 className="text-xl font-semibold text-[var(--color-primary-700)] mb-2">🌊 Maré</h2>
                            <p 
                                className="text-[var(--color-primary-900)]">
                                    Maré agora: 
                                <strong 
                                    className='text-[var(--color-primary-600)] ml-1'
                                >
                                    Baixa
                                </strong>
                            </p>
                            <p 
                                className="text-[var(--color-primary-900)] ">   
                                Próxima mudança:
                                <strong 
                                    className='text-[var(--color-primary-600)] ml-1'
                                >
                                     Cheia às 15:00
                                </strong>
                            </p>
                        </div>
                    </div>

                    {/* MAPA */}
                    <div className='max-w-5xl mx-auto p-6'>
                        <h2 className="text-2xl font-semibold text-[var(--color-primary-700)] mb-4">Localização no mapa</h2>
                        <div className="w-full h-[420px] rounded-xl overflow-hidden shadow">
                            <iframe
                                title={`Mapa de ${beach.name}`}
                                src={`https://www.google.com/maps?q=${encodeURIComponent(beach.name)}&output=embed`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
              </div>
            <Footer />
        </div>
    );
};

export default BeachesDetail;