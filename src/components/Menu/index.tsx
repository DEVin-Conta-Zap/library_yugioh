import { Link } from 'react-router-dom';
import { Container, LogoName, MenuList, MenuOption } from './styles';

const Menu = () => {
  return (
    <Container>
      <LogoName>Epic Library</LogoName>
      <MenuList>
        <Link to="/"><MenuOption>Home</MenuOption></Link>
        <Link to="/deck-builder"><MenuOption>Deck Builder</MenuOption></Link>
        <Link to="/my-decks"><MenuOption>Meus Decks</MenuOption></Link>
      </MenuList>
    </Container>
  );
}

export default Menu;