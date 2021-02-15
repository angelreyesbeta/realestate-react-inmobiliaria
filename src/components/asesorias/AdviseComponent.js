import React, { useContext } from 'react'
import { PageContex } from '../../contex/PageContext'
import { ImagenFondo } from '../ImagenFondo/ImagenFondo'

import { Loading } from '../loading/Loading'

export const AdviseComponent = () => {
    
    const {page} = useContext(PageContex)
    
    if (page) {

        const data=page.filter(page=>page.uid.toLocaleLowerCase().includes('uidasesoria'))
        return(
            [<ImagenFondo
                url={data[0].url}
                text={data[0].texto}
            />]

            
            
        )
        
        /* const data=doc.filter(doc=>doc.uid.toLocaleLowerCase().includes('uidasesorias'))
            
        const parametros=data[0].secciones.map(elements=>{
           
              return{
                  type:elements.seccion.type,
                  uid:elements.seccion.uid
              }
               
         }) 
      
         return(
             
             <>
             
             <ImagenFondo
                
                 uid={parametros[0].uid}
             />
             
             </>
     
         )
  */
         
       } 
       else {
         return(
             <>
             <Loading/>
             </>
         )
       }
 
 
      
}
