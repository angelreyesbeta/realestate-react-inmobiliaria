import React from 'react'
import {NavLink} from "react-router-dom";

export const NavItem = ({url,texto}) => {
  
    return (
        <>

            <li className="nav-item m-2 li">
                                
                <NavLink activeStyle={{
                    
                    backgroundColor: "transparent",
                    color: "white",
                    transform: "scale(1.2)",
                    borderBottom: '1px solid #F08408'
  }} exact to={url} className="nav-link">{texto}</NavLink>
            
            </li>

        </>
    )
}
