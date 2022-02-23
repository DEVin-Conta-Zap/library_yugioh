import React from 'react';
import handleColorCard from '../../utils/bgCards';

type TYPE = "Monsters" | "Spells" | "Traps";

interface IPropsCardType {
  title: TYPE;
  data: string[];
  icon?: any;
}

const CardType: React.FC<IPropsCardType> = ({ title, data, icon }) => {
  const color = handleColorCard(title)
  return (
    <div className="type-container">
      <div className='type-header'>
        {icon && <img src={icon} alt="icone" width={50} />}
        <h2>{title}</h2>
      </div>
      <div className="type-items">
        {
          data.map(type => (
            <div className={`type-item ${color}`}>
              <span>{type}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CardType;