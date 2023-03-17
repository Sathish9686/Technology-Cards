import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-box`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} className="image-size" />
      </div>
    </li>
  )
}

export default CardItem
