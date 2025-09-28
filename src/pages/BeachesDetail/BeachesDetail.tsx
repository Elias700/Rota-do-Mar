import React from 'react';
import { useParams } from 'react-router-dom'; 
import { beaches } from '../../data/beachesData'; 

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
      <img src={beach.imageUrl} 
        alt={beach.name} 
        style={
                { 
                    maxWidth: '100%', 
                    maxHeight: '400px', 
                    objectFit: 'cover' 
                }
            } 
            />
      <h1>{beach.name}</h1>
      <p>ID: {beach.id}</p>
      <p>Descrição: {beach.description}</p>
      {/* Adicione mais detalhes da praia aqui */}
    </div>
  );
};

export default BeachesDetail;