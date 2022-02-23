import { useEffect, useState } from 'react';

import Card from '../../components/Card';
import api from '../../services/axios';
interface ICard {
  id: string;
  name: string;
  attribute: string;
  card_images: Array<{
    id: string;
    image_url: string;
    image_url_small: string;
  }>;
}

const Cards = () => {

  const [cards, setCards] = useState<Array<ICard>>([]);
  
  useEffect(() => {
    api.get('cards?_limit=30')
      .then((response) => {
        setCards(response.data)
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('A chamada terminou'))
  }, []);

  return (
    <div className='container'>
      {
        cards.map((card) =>
          <Card
            key={card.id}
            name={card.name}
            attribute={card.attribute}
            cardImage={card.card_images[0].image_url_small}
          />)
      }
    </div>
  )
}

export default Cards;
