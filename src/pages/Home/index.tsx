import CardType from '../../components/CardType';

import { MONSTERS_RACE, SPELL_RACES, TRAP_RACES } from '../../utils/types'

import MagoNegro from '../../assets/mago_negro.png';
import Kuriboh from '../../assets/kuriboh.png';
import Dragao from '../../assets/dragao.png';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
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
        icon={Dragao}
      />
    </Container>
  );
}

export default Home;