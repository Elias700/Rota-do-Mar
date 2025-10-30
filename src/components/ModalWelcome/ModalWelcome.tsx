import React, { type ReactNode } from 'react';

interface ModalWelcomeProps {
  children: ReactNode; 
  isOpen: boolean;
  onClose: () => void;
}

const ModalWelcome: React.FC<ModalWelcomeProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"> 
      <div 
        className="bg-white rounded-lg shadow-xl relative max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          className="absolute top-3 right-3 text-[var(--color-primary-900)] 
          hover:text-[var(--color-primary-600)] text-4xl leading-none 
          font-semibold cursor-pointer" 
          onClick={onClose}
        >
          &times;
        </button>
        
        <div className="p-8"> 
          {children} 
        </div>
      </div>
    </div>
  );
};

export default ModalWelcome;