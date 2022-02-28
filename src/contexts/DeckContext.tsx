// primeiro passo - Criar contexto
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { ICard } from '../types/Card'
import { TYPES_SPECIAL } from '../utils/typeSpecialMonsters';


interface IContext {
  deck: ICard[];
  extraDeck: ICard[];
  addCard: (_card: ICard) => void;
}

export const DeckContext = createContext<IContext>({
  deck: [],
  extraDeck: [],
  addCard: (_card: ICard) => {}
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

  return (
    <DeckContext.Provider value={{ deck, extraDeck, addCard: handleAddCardInDeck }}>
      {children}
    </DeckContext.Provider>
  )
}


