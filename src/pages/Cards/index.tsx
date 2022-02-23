import { useEffect, useState } from 'react';

import Card from '../../components/Card';
import api from '../../services/axios';
import { useParams } from 'react-router-dom';
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

interface IResponseGetCards extends ICard {
}

const Cards = () => {

  const params = useParams();

  const [cards, setCards] = useState<Array<ICard>>([]);

  useEffect(() => {
    api.get<IResponseGetCards[]>(`cards?race=${params.type}`)
      .then((response) => {
        setCards(response.data)
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('A chamada terminou'))
  }, [params.type]);

  return (
    <div className='container container-cards'>
      {
        cards.map((card) =>
          <Card
            key={card.id}
            data={card}
          />)
      }
    </div>
  )
}

export default Cards;
