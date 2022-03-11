import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';


function App() {
  
  const APP_ID ="faeba007";
  const APP_KEY = "7779fa44d40a797ab15ab9baab3a72f0";
  const [recipes,setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query,setQuery] = useState('')
  
  useEffect(()=>{
    getRecipes();
  }, [query]);
  
  //fetch dataBase
  const getRecipes = async () => {
    var response = await fetch( 
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6&calories=591-722&health=alcohol-free`
      )
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form 
        onSubmit={getSearch}
        className="search-form">
        <input 
          className="search-bar" 
          type="text" value={search}
          onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe 
          title={recipe.recipe.label} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
