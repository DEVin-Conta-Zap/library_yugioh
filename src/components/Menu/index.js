import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { DeckContext } from '../../contexts/DeckContext';

const Menu = () => {
  console.log('RENDERIZEI')
  const {deck} = useContext(DeckContext)
  return  (
    <div className="menu">
      
      <h1 className="menu-title">Epic Library</h1>
      <ul className="menu-list">
      <li style={{color: '#FFF'}}>{deck.length}</li>
        <Link to="/"> <li>Home</li></Link>
        <Link to="/deck-builder"><li>Deck Builder</li></Link>
        <Link to="/my-decks"><li>Meus Decks</li></Link>
      </ul>
    </div>
  );
}

export default Menu;