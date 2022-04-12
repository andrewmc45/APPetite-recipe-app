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

  const handleClick = () => {
    console.log(recipeid);
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
