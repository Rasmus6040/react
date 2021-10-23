import React, {useState, useEffect} from "react";
import './App.css';
import Recipe from "./components/Recipe";
import uuid from 'react-uuid';

function App() {

  const AppId = 'acffc147';
  const AppKey = '8cc931ff745cac48bf7d8a2eab326b65';
  // ************************ state values ***********************
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");


  useEffect(() => {
    GetRecipes();
  }, [query])

  const GetRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const handleInput = e => {
    setSearch(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-bar" type="text" value={search} onChange={handleInput}/>
          <button className="search-button" type="submit">
            Search
          </button>
      </form>
      <div className="recipes">
        {recipes.map((item)=> (
          <Recipe 
            key={uuid()} 
            title = {item.recipe.label} 
            calories = {item.recipe.calories} 
            img = {item.recipe.image}
            ingre={item.recipe.ingredients}
            ></Recipe>
        ))}
      </div>
    </div>
  );
}

export default App;
