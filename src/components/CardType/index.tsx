import React from 'react';
import handleColorCard from '../../utils/bgCards';
import { useNavigate } from 'react-router-dom'

type TYPE = "Monsters" | "Spells" | "Traps";

interface IPropsCardType {
  title: TYPE;
  data: string[];
  icon?: any;
}

const CardType: React.FC<IPropsCardType> = ({ title, data, icon }) => {

  const navigate = useNavigate();

  const color = handleColorCard(title)
  return (
    <div className="type-container" >
      <div className='type-header'>
        {icon && <img src={icon} alt="icone" width={50} />}
        <h2>{title}</h2>
      </div>
      <div className="type-items">
        {
          data.map(type => (
            <div
              key={type}
              className={`type-item ${color}`} onClick={() => navigate(`cards/${type}`)}
            >
              <span>{type}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CardType;