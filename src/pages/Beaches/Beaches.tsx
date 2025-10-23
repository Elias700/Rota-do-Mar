import React, { useState, useMemo } from 'react';
import type { Beach } from '../../data/beachesData'; 
import { beaches } from '../../data/beachesData'; 
import BeachCard from '../../components/Features/BeachCard'; 

// Defina quantos cards você quer mostrar inicialmente
const INITIAL_VISIBLE_COUNT = 5;

// A constante CARDS_PER_LOAD não é mais necessária, pois agora mostramos tudo.

const Beaches: React.FC = () => {
  // 1. Estado para controlar o número de cards visíveis
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // 2. Crie a lista de cards visíveis usando slice()
  const visibleBeaches = useMemo(() => {
    return beaches.slice(0, visibleCount);
  }, [visibleCount]);

  // 3. Verifique se ainda há cards para mostrar
  const hasMore = visibleCount < beaches.length;

  // 4. Função para carregar mais cards
  const handleLoadMore = () => {
    // 💥 MUDANÇA AQUI: Define o número visível para o total de praias
    setVisibleCount(beaches.length);
  };

  return (
    <div>
      <h1 
        className='text-4xl text-center text-[var(--color-primary-700)] font-bold p-10'
      >
        Praias
      </h1>
      
      {/* Container dos Cards */}
      <div className="flex flex-wrap gap-6 justify-center"> 
        {visibleBeaches.map((beach: Beach) => (
          <BeachCard 
            key={beach.id} 
            beach={beach} 
          />
        ))}
      </div>

      {/* Botão Ver Mais (só aparece se houver mais cards) */}
      {hasMore && (
        <div className="flex justify-center p-10">
          <button
            onClick={handleLoadMore}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 
            rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Mostrar Todas as Praias ({beaches.length - visibleCount} restantes)
          </button>
        </div>
      )}
      
    </div>
  );
};

export default Beaches;