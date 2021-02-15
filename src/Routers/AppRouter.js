import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';



import { Navbar } from '../components/navbar/Navbar'

import { Home } from '../app/home/Home';
import { Proyecto } from '../app/proyectos/Proyecto';
import { Seguros } from '../app/seguros/Seguros';
import { Footer } from '../components/footer/Footer';
import { Contacto } from '../app/contacto/Contacto';
import { Advise } from '../app/asesorias/Advise';
import { Property } from '../app/property/Property';
import { About } from '../app/about/About';
import { PropertyId } from '../components/property/PropertyId';


export const AppRouter = () => {
    return (
        <Router>
             <Navbar/>
            
            
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/nosotros' component={About} />
                    <Route exact path='/seguros' component={Seguros} />
                    <Route exact path='/inmuebles' component={Property} />
                    <Route exact path='/proyectos' component={Proyecto} />
                    <Route exact path='/asesorias' component={Advise} />   
                    <Route exact path='/contacto' component={Contacto} />     
                    <Route exact path='/inmueble/:inmuebleId' component={PropertyId} />     
                
                </Switch>
            </div>
            <Footer/>
        </Router>
    )
}
