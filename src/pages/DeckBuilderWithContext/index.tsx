import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { DeckContext } from "../../contexts/DeckContext";
import api from "../../services/axios";
import { TYPES_SPECIAL } from "../../utils/typeSpecialMonsters";
import { CardsContainer, Container, DeckTitle, ExtraDeck, Input, LeftContainer, MainDeck, RightContainer } from "./styles";

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
    <Container>
        <LeftContainer className="left-content">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Pesquisa ..."
            />
          </form>
          <CardsContainer>
            {cards.map((item, index) => (
              <img
                key={index}
                src={item.card_images[0].image_url}
                alt={item.name}
                onClick={() => addCard(item)}
              />
            ))}
          </CardsContainer>
        </LeftContainer>
        <RightContainer>
          <MainDeck>
            <DeckTitle>Main Deck</DeckTitle>
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
          </MainDeck>
          <ExtraDeck className="deck">
            <DeckTitle>Extra Deck</DeckTitle>
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
          </ExtraDeck>
      </RightContainer>
    </Container>
  );
}

export default DeckBuilderWithContext;