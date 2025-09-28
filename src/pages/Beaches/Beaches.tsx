import React from 'react';
import type { Beach } from '../../data/beachesData'; 
import { beaches } from '../../data/beachesData';
import BeachCard from '../../components/Features/BeachCard'; 

const Beaches: React.FC = () => {
  return (
    <div>
      <h1>Praias de Salvador</h1>
      <div className="beaches-grid"> 
        {/* Usando a interface Beach para tipar o item do map */}
        {beaches.map((beach: Beach) => (
          <BeachCard key={beach.id} beach={beach} />
        ))}
      </div>
    </div>
  );
};

export default Beaches;