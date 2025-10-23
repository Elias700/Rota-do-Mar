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

 return (
  // Remove a margem 'mb-6' daqui para usar o 'gap' do componente pai
  // Adiciona uma largura fixa de 'w-80' (320px) para consistência
  <div className='w-80'> 
   <div 
    // 1. Removemos 'max-w-xs' e definimos 'h-[480px]' (ajuste este valor se necessário)
    // 'flex flex-col' garante que o conteúdo dentro do card se estique
   className="relative w-full h-[320px] flex flex-col border border-solid border-[var(--color-primary-50)] 
    rounded-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
    shadow-lg hover:shadow-2xl cursor-pointer" // Adicionei shadow-lg e hover:shadow-2xl para complementar o efeito de "levantar"
   >
    {/* 2. Use h-1/2 (ou h-2/5) para dar um tamanho fixo para a imagem */}
    <div className="block overflow-hidden h-2/5 rounded-t-2xl "> 
      <img 
       src={beach.imageUrl} 
       alt={beach.name}
       // 3. Use 'w-full h-full object-cover' para garantir que a imagem preencha a div 
       // e mantenha a proporção, preenchendo o espaço fixo
       className='w-full h-full object-cover rounded-t-2xl' 
       />
    </div>
     {/* 4. Use 'flex-1' para que esta div preencha o restante da altura disponível */}
     <div className="p-4 flex-1 flex flex-col justify-between "> 
       <h4 className="text-base font-semibold text-[var(--color-primary-800)] mb-2 capitalize transition-all duration-500 ">
        {beach.name}
       </h4>
       {/* 5. 'flex-grow' permite que a descrição ocupe o espaço extra */}
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