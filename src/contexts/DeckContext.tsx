// primeiro passo - Criar contexto
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ICard } from '../types/Card'
import { TYPES_SPECIAL } from '../utils/typeSpecialMonsters';


interface IContext {
  deck: ICard[];
  extraDeck: ICard[];
  addCard: (_card: ICard) => void;
  removeDeck: (_position: number) => void;
  removeExtraDeck: (_position: number) => void;
}

export const DeckContext = createContext<IContext>({
  deck: [],
  extraDeck: [],
  addCard: (_card: ICard) => { },
  removeDeck: (_position: number) => { },
  removeExtraDeck: (_position: number) => { }
})

// segundo passo - Criar o Provider

interface IPropsDeckProvider {
  children: JSX.Element;
}

export function DeckProvider({ children }: IPropsDeckProvider) {

  const [deck, setDeck] = useState<any[]>([]);
  const [extraDeck, setExtraDeck] = useState<ICard[]>([]);

  const handleVerifyAmountCard = (card: ICard) => {
    const amountItens = deck.filter(item => item.id === card.id)
    const verify = amountItens.length === 3 ? true : false
    if (verify) toast.error('Limite excedido')
    return verify
  }

  const handleAddItemInLocalStorage = (card: ICard) => {
    localStorage.setItem("@deck-builder", JSON.stringify([...deck, card]))
  }

  const handleAddCardInDeck = (card: ICard) => {

    const verify = handleVerifyAmountCard(card)

    if (verify) return

    if (TYPES_SPECIAL.includes(card.type)) {
      if (deck.length === 15) {
        toast.error('Quantidade máxima do deck atingida')
      } else {
        setExtraDeck([...extraDeck, card])
        handleAddItemInLocalStorage(card)
      }

    } else {
      if (deck.length === 40) {
        toast.error('Quantidade máxima do deck atingida')
      } else {
        setDeck([...deck, card])
        handleAddItemInLocalStorage(card)
      }
    }
  }


  const handleRemoveCardInDeck = (position: number) => {
    const newDeck = deck.filter((_, index) => index !== position)
    setDeck(newDeck)
  }

  const handleRemoveCardInExtraDeck = (position: number) => {
    const newDeck = extraDeck.filter((_, index) => index !== position)
    setExtraDeck(newDeck)
  }

  useEffect(() => {
    const storage = localStorage.getItem('@deck-builder')

    if(storage) {
      const storageInJson = JSON.parse(storage)
      setDeck(storageInJson)
    }
    
  }, [])

  return (
    <DeckContext.Provider value={{
      deck,
      extraDeck,
      addCard: handleAddCardInDeck,
      removeDeck: handleRemoveCardInDeck,
      removeExtraDeck: handleRemoveCardInExtraDeck
    }}>
      {children}
    </DeckContext.Provider>
  )
}


