import { useEffect, useRef, useState } from 'react';

import Card from '../../components/Card';
import api from '../../services/axios';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
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
  const [page, setPage] = useState<number>(1)

  const [cards, setCards] = useState<Array<ICard>>([]);

  const [lastElement, setLastElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setPage((currentPage) => currentPage + 1);
        }
      })
  );

  useEffect(() => {
    api.get<IResponseGetCards[]>(
      `cards?race=${params.type}&_limit=10&_page=${page}`
    )
      .then((response) => {
        setCards([...cards, ...response.data])
      })
      .catch((error) => console.log(error))
      .finally(() => console.log('A chamada terminou'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (
    <>
      <Container>
        {
          cards.map((card, index) => {
            if (cards.length - 1 === index) {
              return (
                //@ts-ignore
                <div ref={setLastElement} key={card.id}>
                  <Card
                    data={card}
                  />
                </div>
              )
            }

            return (<Card
              key={card.id}
              data={card}
            />)
          })
        }
      </Container>
    </>
  )
}

export default Cards;
