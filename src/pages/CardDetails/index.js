
import { useLocation } from 'react-router-dom';

const CardDetails = () => {

  const {state} = useLocation();

  return (
    <div className='container'>
      <img 
       src={state.card_images[0].image_url} alt={state.name} />
      <h1>{state.name}</h1>
    </div>
  );
}

export default CardDetails;