import React from "react";
import style from './Home.module.css'
import { useNavigate} from "react-router-dom";



const Home = ({title,image,ingredients,full}) => {
     const navigate = useNavigate();
     const clickHandler = (e)=>{
         console.log('clicked');
         navigate(`/recipepage/${title}`,{
             state:{content:full,},
         });
         document.body.scrollTop =0;
         document.documentElement.scrollTop = 0;
     };
    return(
        
        <div className={style.recipe} >
            <h1 >{title}</h1>
            <img className={style.image} src={image} alt=""></img>
      
            <button onClick={clickHandler}>Full View</button>
     
        </div>

    )
};

export default Home;

