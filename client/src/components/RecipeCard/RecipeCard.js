import React from "react";
import style from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ title, image, ingredients, full }) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    console.log("clicked");
    navigate(`/recipepage/${title}`, {
      state: { content: full },
    });
  };
  const recipeid = full.uri.substring(51);

  const handleClick = async() => {
    console.log(recipeid);
 
    // When a post request is sent to the create url, we'll add a new record to the database.
   const newRecipe = {name:title,
                      img:image,   };
 
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
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt=""></img>
      <div className={style.content}>
        <button className={style.buttonOne} onClick={clickHandler}>See Full Recipe</button>
        <button onClick={handleClick}>Add To Favorites</button>
      </div>
    </div>
  );
};

export default RecipeCard;
