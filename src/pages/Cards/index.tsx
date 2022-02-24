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
  const [page, setPage] = useState<number>(0)

  const [cards, setCards] = useState<Array<ICard>>([]);

  useEffect(() => {
    api.get<IResponseGetCards[]>(
      `cards?race=${params.type}&_limit=20&_page=${page}`
    )
      .then((response) => {
        setCards([...cards, ...response.data])
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('A chamada terminou'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.type, page]);

  useEffect(() => {

    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        console.log(entries)
        setPage((currentValue) => currentValue + 1);
      }
    })

    //@ts-ignore
    intersectionObserver.observe(document.querySelector('#sentinela'));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <>
      <div className='container container-cards'>
        {
          cards.map((card) =>
            <Card
              key={card.id}
              data={card}
            />)
        }

      </div>
      <p id="sentinela"></p>
     
    </>
  )
}

export default Cards;
