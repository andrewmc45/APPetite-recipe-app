import { React, useEffect } from "react";
import style from './Home.module.css'
import { useLocation, useParams } from "react-router-dom";

const Recipepage = (props) => {
  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  let location = useLocation();
  let recipedata = location.state.content;
  console.log(recipedata);
  const recipeid = recipedata.uri.substring(51);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          paddingTop: "10px",
        }}
      >
        <h2>Viewing: {id}</h2>
        <img className={style.image} src={recipedata.image} alt="" />
        <table style={{ padding: "10px", border: "1px solid black" }}>
          <tr>
            <td style={{ padding: "10px", paddingRight: "20px" }}>
              Total Calories: {parseInt(recipedata.calories)}
            </td>
            <td style={{ padding: "10px", paddingRight: "20px" }}>
              Total Time: {recipedata.totalTime}mins
            </td>
            <td style={{ padding: "10px" }}>
              Total Weight: {parseInt(recipedata.totalWeight)}g
            </td>
          </tr>
        </table>
      </div>
      <div style={{ padding: "40px" }}>
        <h3>Ingredients</h3>
        {recipedata.ingredientLines.map((ing) => (
          <div>{ing}</div>
        ))}
        <h3 style={{ paddingTop: "10px" }}>Preperation</h3>
        <a href={recipedata.url}>{recipedata.url}</a>
      </div>
    </>
  );
};

export default Recipepage;
