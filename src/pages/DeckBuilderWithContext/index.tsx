import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { DeckContext } from "../../contexts/DeckContext";
import api from "../../services/axios";
import { TYPES_SPECIAL } from "../../utils/typeSpecialMonsters";

interface ICard {
  id: string;
  name: string;
  attribute: string;
  type: string;
  card_images: Array<{
    id: string;
    image_url: string;
    image_url_small: string;
  }>;
}


const DeckBuilderWithContext = () => {

  const { deck, extraDeck, addCard, removeDeck, removeExtraDeck } = useContext(DeckContext)

  const [search, setSearch] = useState<string>("");
  const [cards, setCards] = useState<ICard[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    api
      .get<ICard[]>(`/cards?q=${search}&_limit=20`)
      .then((response) => setCards(response.data))
      .catch(() => alert('Deu ruim!!!'))
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
            {cards.map((item, index) => (
              <img
                key={index}
                src={item.card_images[0].image_url}
                alt={item.name}
                onClick={() => addCard(item)}
              />
            ))}
          </div>
        </div>
        <div className="right-content">

          <div className="deck">
            <p>Main Deck</p>
            <div>
              {deck.map((item, index) => (
                <img
                  key={index}
                  src={item.card_images[0].image_url}
                  alt={item.name}
                  onClick={() => removeDeck(index)}
                />
              ))}
            </div>
          </div>
          <div className="deck">
            <p>Extra Deck</p>
            <div>
              {extraDeck.map((item, index) => (
                <img
                  key={index}
                  src={item.card_images[0].image_url}
                  alt={item.name}
                  onClick={() => removeExtraDeck(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeckBuilderWithContext;