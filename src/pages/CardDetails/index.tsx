
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DeckContext } from '../../contexts/DeckContext';

interface ILocation {
  name: string;
  card_images: {
    image_url: string;
  }[]
}

const CardDetails = () => {

  const { state }: any = useLocation();
  const {addCard} = useContext(DeckContext)

  return (
    <div className='container'>
      <div className='card-content'>
        <h1 className='title-card-details '>{state.name}</h1>
        <div className='details-wrapper'>
          <img
            className='image-card-details'
            src={state.card_images[0].image_url}
            alt={state.name}
          />
          <div className='info-details'>
            <div className='card-details-header'>
              <span>{state.attribute}</span>
              <span>{state.level}</span>
            </div>
            <div className='card-details-body'>
              <span>[{state.race} / {state.type}]</span>
              <p>{state.desc}</p>
              <hr />
              <span>ATK: {state.atk}</span>
              <span>DEF: {state.def}</span>
              <hr />
            </div>
            
            <div className='card-details-footer'>
              {state.card_sets.map((set: any) =>
                <span key={set.set_code} className="badge">{set.set_name}</span>
              )}
            </div>
            
            <button onClick={() => addCard(state)}>Adicionar ao deck</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;