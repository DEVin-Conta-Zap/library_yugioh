import React, { useState } from "react";
import api from "../../services/axios";

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


const DeckBuilder = () => {

  const [search, setSearch] = useState<string>("");
  const [cards, setCards] = useState<ICard[]>([]);
  const [deck, setDeck] = useState<ICard[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    api
      .get<ICard[]>(`/cards?q=${search}&_limit=20`)
      .then((response) => setCards(response.data))
      .catch(() => alert('Deu ruim!!!'))
  }

  const handleAddCardInDeck = (card: ICard) => {
    setDeck([...deck, card])
  }

  return (
    <div className="container">
      <div className="builder-content">
        <div className="left-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Pesquisa ..."
            />
          </form>
          <div className="cards-options">
            {cards.map(item => (
              <img
                src={item.card_images[0].image_url}
                alt={item.name}
                onClick={() => handleAddCardInDeck(item)}
              />
            ))}
          </div>
        </div>
        <div className="right-content">
          <div className="deck">
            {deck.map(item => (
              <img
                src={item.card_images[0].image_url}
                alt={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeckBuilder;