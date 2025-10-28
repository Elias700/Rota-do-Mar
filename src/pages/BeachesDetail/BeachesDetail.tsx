import React from 'react';
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
        autoplaySpeed: 4000,
    };

    return (
        <div>
            <Header />
            
              <div className='mt-40'>
                  <Link to="/" className='text-[var(--color-primary-600)] hover:underline p-10 font-medium cursor-pointer'>
                      Voltar para Página principal
                  </Link>
                  <h1 className='text-[var(--color-primary-700)] text-4xl text-center font-bold p-5'>
                      {beach.name}
                  </h1>

                  {/* 3. AQUI ESTÁ O NOVO CARROSSEL */}
                  <div className="max-w-4xl mx-auto mb-10"> 
                      <Slider {...settings}>
                          {/* Mapeia a lista de URLs da praia */}
                          {beach.imageUrl.map((url, index) => (
                              <div key={index}>
                                  <img 
                                      src={url} 
                                      alt={`${beach.name} - Foto ${index + 1}`}
                                      // Use classes de estilo para garantir que a imagem se ajuste ao container
                                      className='w-full h-96 object-cover rounded-lg' 
                                  />
                              </div>
                          ))}
                      </Slider>
                  </div>
                  {/* ------------------------------- */}

                  <div className='max-w-5xl mx-auto p-6'>
                      <p className='mb-6'>
                          **Descrição:** {beach.description}
                      </p>
                      <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4 shadow">
                          <h2 className="text-xl font-semibold text-gray-700 mb-2">🌦️ Clima atual</h2>
                          <p className="text-gray-700">nuvens dispersas | 26°C</p>
                          <p className="text-gray-600">Vento: 18 km/h | Chuva: 42%</p>
                      </div>
                      <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-4 shadow">
                          <h2 className="text-xl font-semibold text-gray-700 mb-2">🌊 Maré</h2>
                          <p className="text-gray-700">Maré agora: Baixa</p>
                          <p className="text-gray-600">Próxima mudança: Cheia às 15:00</p>
                      </div>
                  </div>
              </div>
            <Footer />
        </div>
    );
};

export default BeachesDetail;