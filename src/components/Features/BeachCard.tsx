import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Beach } from '../../data/beachesData'; 
import { useAuth } from '../../contexts/AuthContext';
import { useFavorites } from '../../contexts/FavoritesContext';

interface BeachCardProps {
  beach: Beach;
}

const BeachCard: React.FC<BeachCardProps> = ({ beach }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleCardClick = () => {
   navigate(`/beaches/${beach.id}`); 
  };
 
  return (
   <div className='w-80'> 
    <div 
    className="relative w-full h-[320px] flex flex-col border border-solid border-[var(--color-primary-50)] 
     rounded-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
     shadow-lg hover:shadow-2xl cursor-pointer" 
    >
     <div className="block overflow-hidden h-2/5 rounded-t-2xl "> 
        <img 
          // MUDANÇA AQUI: Acessamos o índice [0] do array de imagens
          src={beach.imageUrl[0]} 
          alt={beach.name}
          className='w-full h-full object-cover rounded-t-2xl' 
        />
        {user && (
          <button
            aria-label={isFavorite(beach.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            onClick={(e) => { e.stopPropagation(); toggleFavorite(beach.id); }}
            className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition cursor-pointer 
            ${isFavorite(beach.id) ? 'bg-yellow-400 text-white' : 'bg-white text-yellow-500'}`}
          >
            {isFavorite(beach.id) ? '★' : '☆'}
          </button>
        )}
     </div>
       <div className="p-4 flex-1 flex flex-col justify-between "> 
         <h4 className="text-base font-semibold text-[var(--color-primary-800)] mb-2 capitalize transition-all duration-500 ">
          {beach.name}
         </h4>
         <p className="text-sm font-normal text-[var(--color-primary-500)] transition-all duration-500 leading-5 mb-5 flex-grow"> 
          {beach.descriptionCard} 
         </p>
         <button 
            onClick={handleCardClick} 
            className="mt-auto bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-800)] 
            shadow-sm rounded-full py-2 px-5 text-[1rem] text-[var(--color-primary-50)] font-bold cursor-pointer"
          >
            Confira
         </button>
       </div>
     </div>
   </div>
  );
};

export default BeachCard;