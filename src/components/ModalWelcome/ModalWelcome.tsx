import React, { type ReactNode } from 'react';

interface ModalWelcomeProps {
  children: ReactNode; 
  isOpen: boolean;
  onClose: () => void;
}

// A prop children é tudo que está dentro de ModalWelcome

// Propriedade	O que ela faz	Onde é Controlada

// isOpen	Controla se o modal deve aparecer. No ModalWelcome.tsx, se isOpen é false, o componente retorna null (não mostra nada). Se é true, ele renderiza.	Pelo useState no componente pai (Welcome.tsx).

// children	Controla o que é exibido. É o conteúdo que aparece na tela depois que o isOpen decide que o modal deve ser renderizado.	No corpo do componente pai (Welcome.tsx), entre as tags.

const ModalWelcome: React.FC<ModalWelcomeProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // Overlay: Tela inteira, fixo, escuro semi-transparente, centraliza o conteúdo
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      
      {/* Container Principal do Conteúdo do Modal */}
      <div 
        className="bg-white rounded-lg shadow-xl relative max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Botão de Fechar: Posição absoluta no canto superior direito */}
        <button 
          className="absolute top-3 right-3 text-[var(--color-primary-900)] hover:text-[var(--color-primary-600)] text-4xl leading-none font-semibold cursor-pointer" 
          onClick={onClose}
        >
          &times;
        </button>
        
        {/* O Conteúdo Passado (Children) */}
        <div className="p-8"> {/* Adiciona padding interno ao conteúdo */}
          {children} 
        </div>
      </div>
    </div>
  );
};

export default ModalWelcome;