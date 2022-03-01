import { useNavigate } from "react-router-dom";
import { Container, Image, Title } from "./styles";
interface IPropsCard {
  data: any;
}

const Card: React.FC<IPropsCard> = ({ data }) => {
  const navigate = useNavigate()
  return (
    <Container className="card-item" onDoubleClick={() => navigate(`/card-details/`, {state: data})}>
      <Image
        src={data.card_images[0].image_url}
        alt={data.name}
      />
      <Title title={data.name}>{data.name}</Title>
    </Container>
  )
}

export default Card;
