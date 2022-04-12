import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import './Sidebar.css';
import { IconContext } from "react-icons/lib";



const Sidebar = () => {
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <div className="side-bar">
      <ul className="SidebarList">
        {SidebarData.map((item, index) => {
          return(
            <li key={index} className ={item.cName}>
              <Link to = {item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
    </IconContext.Provider>

    </>
  )
};


export default Sidebar;