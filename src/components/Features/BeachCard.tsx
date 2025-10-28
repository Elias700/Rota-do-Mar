import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Beach } from '../../data/beachesData'; 

interface BeachCardProps {
  beach: Beach;
}

const BeachCard: React.FC<BeachCardProps> = ({ beach }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
   navigate(`/beaches/${beach.id}`); 
  };
 
 // Se beach.imageUrl for um array, pegamos o primeiro elemento (índice 0)
 // Se por algum motivo ainda for uma string (caso não tenha atualizado todos os dados), ele pega o valor direto.
 // Nota: Como a interface Beach foi atualizada, o TypeScript garantirá que seja um array.
 const primaryImageUrl = Array.isArray(beach.imageUrl) 
    ? beach.imageUrl[0] 
    : beach.imageUrl;
 
 // Note: Se você atualizou a interface para string[], o `Array.isArray` pode não ser estritamente necessário 
 // mas o código abaixo é o que precisa ser ajustado:

  return (
   <div className='w-80'> 
    <div 
    className="relative w-full h-[320px] flex flex-col border border-solid border-[var(--color-primary-50)] 
     rounded-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
     shadow-lg hover:shadow-2xl cursor-pointer" 
    >
     <div className="block overflow-hidden h-2/5 rounded-t-2xl "> 
        <img 
         // 🌟 MUDANÇA AQUI: Acessamos o índice [0] do array de imagens
         src={beach.imageUrl[0]} 
         alt={beach.name}
         className='w-full h-full object-cover rounded-t-2xl' 
         />
     </div>
       <div className="p-4 flex-1 flex flex-col justify-between "> 
         <h4 className="text-base font-semibold text-[var(--color-primary-800)] mb-2 capitalize transition-all duration-500 ">
          {beach.name}
         </h4>
         <p className="text-sm font-normal text-[var(--color-primary-500)] transition-all duration-500 leading-5 mb-5 flex-grow"> 
          {beach.description} 
         </p>
         <button 
          onClick={handleCardClick} 
          className="mt-auto bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-800)] 
          shadow-sm rounded-full py-2 px-5 text-[1rem] text-[var(--color-primary-50)] font-bold cursor-pointer">
            Confira
         </button>
       </div>
     </div>
   </div>
  );
};

export default BeachCard;