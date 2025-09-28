import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Beach } from '../../data/beachesData'; 

interface BeachCardProps {
  beach: Beach;
}

const BeachCard: React.FC<BeachCardProps> = ({ beach }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Note que agora estamos usando o ID numérico na navegação
    navigate(`/beaches/${beach.id}`); 
  };

  return (
    <div 
      onClick={handleCardClick} 
      style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', cursor: 'pointer' }}
    >
      <img 
        src={beach.imageUrl} 
        alt={beach.name} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} 
      />
      <h2>{beach.name}</h2>
      <p>{beach.description}</p>
    </div>
  );
};

export default BeachCard;