
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DeckContext } from '../../contexts/DeckContext';
import {
  Badge,
  Button,
  CardContent,
  CardDetailsContainer,
  CardImage,
  CardInfo,
  CardInfoBody,
  CardInfoFooter,
  CardInfoHeader,
  CardTitle,
  Container,
  Description,
  Text
} from './styles';

interface ILocation {
  name: string;
  card_images: {
    image_url: string;
  }[]
}

const CardDetails = () => {

  const { state }: any = useLocation();
  const { addCard } = useContext(DeckContext)

  return (
    <Container>
      <CardContent>
        <CardTitle>{state.name}</CardTitle>
        <CardDetailsContainer>
          <CardImage
            src={state.card_images[0].image_url}
            alt={state.name}
          />
          <CardInfo>
            <CardInfoHeader>
              <Text>{state.attribute}</Text>
              <Text>{state.level}</Text>
            </CardInfoHeader>
            <CardInfoBody>
              <Text>[{state.race} / {state.type}]</Text>
              <Description>{state.desc}</Description>
              <hr />
              <Text>ATK: {state.atk}</Text>
              <Text>DEF: {state.def}</Text>
              <hr />
            </CardInfoBody>
            <CardInfoFooter>
              {state.card_sets.map((set: any) =>
                <Badge key={set.set_code}>{set.set_name}</Badge>
              )}
            </CardInfoFooter>
            <Button
              onClick={() => addCard(state)}>
              Adicionar ao deck
            </Button>
          </CardInfo>
        </CardDetailsContainer>
      </CardContent>
    </Container>
  );
}

export default CardDetails;