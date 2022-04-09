import { React, useEffect } from "react";
import style from "./RecipePage.css";
import { useLocation, useParams } from "react-router-dom";

const RecipePage = (props) => {
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  let location = useLocation();
  let recipedata = location.state.content;
  console.log(recipedata);

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
      </div>
    </>
  );
};

export default RecipePage;
