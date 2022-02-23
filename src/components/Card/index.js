
const Card = ({ name, attribute, cardImage }) => {
  return (
    <div className="card-item">
      <img
        src={cardImage}
        alt={name}
        width={130}
        height={130}
      />
      <span>{name}</span>
      <span>{attribute}</span>
    </div>
  )
}

export default Card;
