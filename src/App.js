import React, { useState ,useEffect } from "react"
import './App.css';
import API_KEY from "./apiKey"
import Navbar from "./components/navbar"
import Recipies from "./components/recipies"
import SearchBar from "./components/searchBar"

function App() {

  const [recipies, setRecipies] = useState(null)

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`).then(res => res.json()).then(data => setRecipies(data.results)).catch(err => alert(err.message))
  }, [])

  const fetchQuery = query => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=25`).then(res => res.json()).then(data => setRecipies(data.results)).catch(err => alert(err.message))
  }

  return (
    <div>
      <Navbar />
      <SearchBar fetchQuery={fetchQuery} />
      <Recipies recipies={recipies} />
    </div>
  );
}

export default App;
