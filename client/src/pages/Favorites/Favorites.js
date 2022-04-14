
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import style from "../../components/RecipeCard/RecipeCard.module.css";


 
export default function Favorites() {
 const [records, setRecords] = useState([]);

 
  
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
  const recordList= ()=> {
   return records.map((record) => {
     console.log("map",record);
      return (
        <div className={style.recipe}>
        <h1>{record.name}</h1>
        <img className={style.image} src={record.img} alt=""></img>
        <div className={style.content}>
          <button className={style.buttonOne} onClick={()=>deleteRecord(record._id)}>X Delete</button>
        
        </div>
      </div>
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <>{recordList()}</>
 );
}
