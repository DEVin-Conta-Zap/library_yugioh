import React from 'react';
import handleColorCard from '../../utils/bgCards';
import { useNavigate } from 'react-router-dom'
import { CardHeader, CardIcon, CardItem, CardItemTitle, CardList, CardTitle, Container } from './styles';

type TYPE = "Monsters" | "Spells" | "Traps";
interface IPropsCardType {
  title: TYPE;
  data: string[];
  icon?: string;
}

const CardType: React.FC<IPropsCardType> = ({ title, data, icon }) => {

  const navigate = useNavigate();

  const color = handleColorCard(title)
  return (
    <Container>
      <CardHeader>
        {icon && <CardIcon src={icon} alt="icone" />}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardList>
        {
          data.map(type => (
            <CardItem
              key={type}
              currentColor={color}
              onClick={() => navigate(`cards/${type}`)}
            >
              <CardItemTitle>{type}</CardItemTitle>
            </CardItem>
          ))
        }
      </CardList>
    </Container>
  );
}

export default CardType;