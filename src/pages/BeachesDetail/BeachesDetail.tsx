import React from 'react';
import { useParams } from 'react-router-dom'; 
import { beaches } from '../../data/beachesData'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const BeachesDetail: React.FC = () => {
  // useParams sempre retorna string, então tipamos o ID como string
  const { id } = useParams<{ id: string }>(); 

  // 1. Converte a string do URL (ex: "1") para number (ex: 1)
  const beachId = parseInt(id || '0'); 
  
  // 2. Encontra a praia usando o ID numérico
  const beach = beaches.find(b => b.id === beachId);

  if (!beach) {
    return <div>Erro 404: Praia não encontrada ou ID inválido.</div>;
  }

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
        <img 
          src={beach.imageUrl} 
          alt={beach.name}
          className='cursor-pointer'
        />
        <p>
          Descrição: {beach.description}
        </p>
        <div className='max-w-5xl mx-auto p-6'>
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