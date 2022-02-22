import {
   BrowserRouter, 
   Routes, 
   Route
  } from 'react-router-dom';

import Cards from './pages/Cards';
import Home from './pages/Home';
import MyDecks from './pages/MyDecks';
import CardDetails from './pages/CardDetails';
import DeckBuilder from './pages/DeckBuilder';

import Menu from './components/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cards" element={<Cards />} /> 
        <Route path="/my-decks" element={<MyDecks />} /> 
        <Route path="/card-details" element={<CardDetails />} /> 
        <Route path="/deck-builder" element={<DeckBuilder />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;

