import { useNavigate } from "react-router-dom";

interface IPropsCard {
  data: any;
}

const Card: React.FC<IPropsCard> = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div className="card-item" onDoubleClick={() => navigate(`/card-details/`, {state: data})}>
      <img
        src={data.card_images[0].image_url}
        alt={data.name}
      />
      <abbr title={data.name}>{data.name}</abbr>
    </div>
  )
}

export default Card;
