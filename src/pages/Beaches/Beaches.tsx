import React, { useState, useMemo } from 'react';
import type { Beach } from '../../data/beachesData'; 
import { beaches } from '../../data/beachesData'; 
import BeachCard from '../../components/Features/BeachCard'; 

// Defina quantos cards você quer mostrar inicialmente
const INITIAL_VISIBLE_COUNT = 5;

const Beaches: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Cria a lista de cards visíveis usando slice()
  const visibleBeaches = useMemo(() => {
    return beaches.slice(0, visibleCount);
  }, [visibleCount]);

  // Verifica se ainda há cards para mostrar
  const hasMore = visibleCount < beaches.length;

  // Função para carregar mais cards
  const handleLoadMore = () => {
    // Define o número visível para o total de praias
    setVisibleCount(beaches.length);
  };

  return (
    <div 
      id='praias' 
      className='pb-30'
    >
      <h1 
        className='text-5xl text-center text-[var(--color-primary-700)] p-10'
      >
        Praias
      </h1>
      
      <div className="flex flex-wrap gap-6 justify-center"> 
        {visibleBeaches.map((beach: Beach) => (
          <BeachCard 
            key={beach.id} 
            beach={beach} 
          />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="
              bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-800)]
              text-[var(--color-primary-50)] font-bold py-2 px-6 mt-10 
              rounded-full shadow-lg transition duration-300 ease-in-out cursor-pointer"
          >
            Mostrar Todas as Praias ({beaches.length - visibleCount} restantes)
          </button>
        </div>
      )}
      
    </div>
  );
};

export default Beaches;