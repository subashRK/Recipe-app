
const Recipe = ({ title, image }) => {

  return (
    <div className="card">
      <img src={image} alt="" />
      <h3 className="recipe-title">{title}</h3>
    </div>
  )
}

export default Recipe
