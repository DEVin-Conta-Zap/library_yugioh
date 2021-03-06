import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Cards from './pages/Cards';
import Home from './pages/Home';
import MyDecks from './pages/MyDecks';
import CardDetails from './pages/CardDetails';
//import DeckBuilder from './pages/DeckBuilder';

import Menu from './components/Menu';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { DeckProvider } from './contexts/DeckContext';
import DeckBuilderWithContext from './pages/DeckBuilderWithContext';
import 'react-loading-skeleton/dist/skeleton.css'

const App = () => {
  return (
    <BrowserRouter>
      <DeckProvider>
        <Menu />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards/:type" element={<Cards />} />
          <Route path="/my-decks" element={<MyDecks />} />
          <Route path="/card-details" element={<CardDetails />} />
          <Route path="/deck-builder" element={<DeckBuilderWithContext />} />
        </Routes>
      </DeckProvider>
    </BrowserRouter>

  )
}

export default App;

