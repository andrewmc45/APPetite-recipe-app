import React, { useEffect, useState } from "react";
import './Home.css'
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function Home() {
  const APP_ID = "faeba007";
  const APP_KEY = "7779fa44d40a797ab15ab9baab3a72f0";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const [healthLabels, sethealthLabels] = useState("");
  const [numberRecipe, setNumberRecipe] = useState(6);
  //fetch dataBase
  const getRecipes = async () => {
    var response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6&calories=0-2000${healthLabels}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    setNumberRecipe(6);
  };

  const loadMoreData = async () => {
    console.log("load more data");
    setNumberRecipe(numberRecipe + 6);
    var response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${numberRecipe}&to=${
        numberRecipe + 6
      }&calories=0-2000${healthLabels}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  return (
    <div className="App">
      
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search by food name"
          value={search}
          onChange={updateSearch}
        />

        <select className="app-healthLabels">
          <option onClick={() => sethealthLabels("")}>All</option>
          <option onClick={() => sethealthLabels("&health=vegan")}>
            Vegan
          </option>
          <option onClick={() => sethealthLabels("&health=dairy-free")}>
            Dairy-Free
          </option>
          <option onClick={() => sethealthLabels("&health=gluten-free")}>
            Gluten-Free
          </option>
          <option onClick={() => sethealthLabels("&health=wheat-free")}>
            Wheat-Free
          </option>
          <option onClick={() => sethealthLabels("&health=vegetarian")}>
            Vegetarian
          </option>
          <option onClick={() => sethealthLabels("&health=paleo")}>
            Paleo
          </option>
          <option onClick={() => sethealthLabels("&health=alcohol-free")}>
            Alcohol-Free
          </option>
        </select>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipeCard
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            full={recipe.recipe}
          />
        ))}
      </div>
      <div>
        <button onClick={loadMoreData}>
          Click To See More!
        </button>
      </div>
    </div>
  );
}
export default Home;
