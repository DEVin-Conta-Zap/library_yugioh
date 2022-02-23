
const Card = ({ name, attribute, cardImage }) => {
  return (
    <div className="card-item">
      <img
        src={cardImage}
        alt={name}
        width={30}
        height={30}
      />
      <span>{name}</span>
      <span>{attribute}</span>
    </div>
  )
}

export default Card;
