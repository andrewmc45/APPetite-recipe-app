import { React, useEffect, useState } from "react";
import style from "./RecipePage.css";
import { useLocation, useParams } from "react-router-dom";


const RecipePage = (props) => {
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  let location = useLocation();
  let recipedata = location.state.content;
  const recipeid = recipedata.uri.substring(51);
  
  const handleClick = async() => {
    console.log(recipeid);
 
    // When a post request is sent to the create url, we'll add a new record to the database.
   const newRecipe = {name:id,
                      img: recipedata.image };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newRecipe),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 alert("Added"); 
    };


  return (
    <>
      <div className="recipe-container">
        <h2 className="heading">{id}</h2>
        <img className="image-container" src={recipedata.image} alt="" />
        <table className="table-container">
          <tr>
            <td className="first-table">
              🔥 {parseInt(recipedata.calories)} kcal
            </td>
            <td className="second-table">⏰ {recipedata.totalTime} mins</td>
          </tr>
        </table>

        <div className="ingredient-container">
          <h3>Ingredients</h3>
          {recipedata.ingredientLines.map((ing) => (
            <div>{ing}</div>
          ))}
        </div>
        <div className="preperation-container">
          <h3>Preperation</h3>
          <a href={recipedata.url} target="_blank">
            {recipedata.url}
          </a>
        </div>
        <button onClick={handleClick}>Add To Favorites</button>
      </div>
    </>
  );
};

export default RecipePage;
