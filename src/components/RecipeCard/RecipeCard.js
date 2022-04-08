import React from "react";
import style from "./RecipeCard.module.css"
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ title, image, ingredients, full }) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    console.log("clicked");
    navigate(`/recipepage/${title}`, {
      state: { content: full },
    });
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  };
  const recipeid = full.uri.substring(51);

  const handleClick=()=>{
    console.log(recipeid);

}
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt=""></img>

      <button onClick={clickHandler}>Full View</button>
      <button onClick={handleClick}>Save the Recipe to Favorites</button>

    </div>
  );
};

export default RecipeCard;