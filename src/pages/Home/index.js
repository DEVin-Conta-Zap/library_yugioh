import { useContext } from 'react';
import CardType from '../../components/CardType';
import { MONSTERS_RACE, SPELL_RACES, TRAP_RACES } from '../../utils/types'

import MagoNegro from '../../assets/mago_negro.png';
import Kuriboh from '../../assets/kuriboh.png';
import dragao from '../../assets/dragao.png';

import { DeckContext } from '../../contexts/DeckContext';

const Home = () => {
  return (
    <div className="container container-home">
      <CardType
        title="Monsters"
        data={MONSTERS_RACE}
        icon={MagoNegro}
      />
      <CardType
        title="Spells"
        data={SPELL_RACES}
        icon={Kuriboh}
      />
      <CardType
        title="Traps"
        data={TRAP_RACES}
        icon={dragao}
      />
    </div>
  );
}

export default Home;