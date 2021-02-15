import React, { useContext } from 'react'
import { ImagenFondo } from '../ImagenFondo/ImagenFondo'
import { Loading } from '../loading/Loading'
import { PageContex} from '../../contex/PageContext'
//import { Contacts_Primsic } from './Contacts_Primsic'

import { ListContact } from './ListContact'
import { BotonFijo } from '../botonFijo/BotonFijo'
import { RedesSociales } from './RedesSociales'


//const PageContex=lazy(()=>import('../../contex/PageContext'))


export const ComponentContacts = () => {

    


    const {contact,page} = useContext(PageContex)
    
    if (contact && page) {

        const data=page.filter(page=>page.uid.toLocaleLowerCase().includes('uidcontacto'))   
          
    
      
         return(
             
             <>
             
               
             <ImagenFondo
                url={data[0].url}
                text={data[0].texto}
            />

            <div className="container">
                <div className="row mt-5 mb-5">
                    {
                        contact.data.grupocontacto.map((element,index)=>(
                        <>
                           
                            <ListContact
                                image={element.imgperfil.url}
                                title={element.titulo[0].text}
                                mail={element.correro[0].text}
                                celular={element.celular[0].text}
                                numero={index+1}

                            />
                           
                        </>
             
                        ))
                        
                    }

                    <RedesSociales/>
             
                            
                           
                </div>
                        
            </div>  
            <BotonFijo/>  
                
            
             
             </>
     
         )
 
         
       } 
       else {
         return(
             <>
             <Loading/>
             </>
         )
       }
 
 
   
}
