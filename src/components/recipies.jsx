import Recipe from "./recipe"
import { Typography, CircularProgress } from "@material-ui/core"

const Recipies = ({ recipies }) => {

  const loadRecipies = () => {
    if (!recipies) {
      return (
        <center>
          <CircularProgress />
        </center>
      )
    } else if (recipies.length === 0) {
      return (
        <center>
          <Typography variant="h1">
            No results found!
          </Typography>
        </center>
      )
    } else {
      return (
        <div className="recipies">
          {recipies.map(recipe => (
            <div className="recipe" key={recipe.id}>
              <Recipe title={recipe.title} image={recipe.image} />
            </div> 
          ))}
        </div>              
      )
    }
  }

  return loadRecipies()
}

export default Recipies
