import React, { useState } from 'react'
import {Link, NavLink} from "react-router-dom";
import { NavItem } from './NavItem';
import { useConectionPrismic } from '../../hook/useConectionPrismic';





const type='menu'

export const Navbar = () => {

    const {docu}=useConectionPrismic(type); 
   
    const[navbar,setNavbar] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY>=80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll',changeBackground)

    const handleCambiarClase=()=>{
        let siteNav = document.getElementById('site-nav');
            siteNav.classList.toggle('site-nav-open');
        
        let menuOpen = document.getElementById('menu-toggle');
            menuOpen.classList.toggle('menu-open');
    }

   




    return (
        <>
        <header id={navbar?"header2":"header1"}>
            <div className="container">
                <h1 className="logo">Hori<span className="__span">zonte</span></h1>
            </div>
            <nav id="site-nav" className="site-nav">
                <ul>
                <React.Fragment>{
                                    docu ? 
                                    (
                                        
                                            docu[0].data.grupomenu.map(elemens=>(
                                                <>
                                                    <NavItem
                                                        key={elemens.url_del_hipervinculo[0].text}
                                                        url={elemens.url_del_hipervinculo[0].text}
                                                        texto={elemens.texto_del_hipervinculo[0].text}  
                                                    />  
                                
                                                </>
                                                    
                                                ))
                                        
                                    ) 
                                    : 
                                    
                                    <li className="nav-item">                   
                                        <NavLink to="/" className="nav-link m-2">Conectando...</NavLink>
                                    </li>
                            }
                    </React.Fragment>  
                </ul>
            </nav>
            <div id="menu-toggle" className="menu-toggle" onClick={handleCambiarClase}>
                <div className="hamburger"></div>
            </div>
            
        </header>

{/* <main>
<img className="img-fondo" src="./assets/LASAÑA FONDO.jpg"></img>
</main> */}
       </> 
    )
}
