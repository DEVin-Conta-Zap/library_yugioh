import React, { useState } from "react";
import { toast } from "react-toastify";
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


const DeckBuilder = () => {

  const [search, setSearch] = useState<string>("");
  const [cards, setCards] = useState<ICard[]>([]);
  const [deck, setDeck] = useState<ICard[]>([]);
  const [extraDeck, setExtraDeck] = useState<ICard[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    api
      .get<ICard[]>(`/cards?q=${search}&_limit=20`)
      .then((response) => setCards(response.data))
      .catch(() => alert('Deu ruim!!!'))
  }


  const handleVerifyAmountCard = (card: ICard) => {
    const amountItens = deck.filter(item => item.id === card.id)
    const verify = amountItens.length === 3 ? true : false
    if(verify) toast.error('Limite excedido')
    return verify
  }

  const handleAddCardInDeck = (card: ICard) => {

    const verify = handleVerifyAmountCard(card)

    if(verify) return 

    if (TYPES_SPECIAL.includes(card.type)) {
      if (deck.length === 15) {
        toast.error('Quantidade máxima do deck atingida')
      } else {
        setExtraDeck([...extraDeck, card])
      }

    } else {
      if (deck.length === 40) {
        toast.error('Quantidade máxima do deck atingida')
      } else {
        setDeck([...deck, card])
      }
    }
  }

  const handleRemoveCardInDeck = (position: number) => {
    const newDeck = deck.filter((_, index) => index !== position)
    setDeck(newDeck)
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
                onClick={() => handleAddCardInDeck(item)}
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
                  onClick={() => handleRemoveCardInDeck(index)}
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
                  onClick={() => handleRemoveCardInDeck(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeckBuilder;