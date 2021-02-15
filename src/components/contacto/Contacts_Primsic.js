import React from 'react'
import { useConsultPrismic } from '../../hook/useConsultPrismic';
import { Loading } from '../loading/Loading';
import { ListContact } from './ListContact';


const type='contacto'
const uid='uidcontacto'
export const Contacts_Primsic = () => {
    

    const {doc}=useConsultPrismic(type,uid); 

    return (
        console.log(doc),
        <>

        <React.Fragment>{
                doc ? 
                (   
                   
                    <>
                    <div className="container">
                        <div className="row mt-5 mb-5">
                            {
                                doc.data.grupocontacto.map((element,index)=>(
                                <>
                                    <ListContact
                                        image={element.imgperfil.url}
                                        title={element.titulo[0].text}
                                        mail={element.correro[0].text}
                                        celular={element.celular[0].text}
                                        numero={index+1}

                                    />
                                </>
                                  // console.log(element.imgperfil.url+' '+element.titulo[0].text+' '+element.correro[0].text)
                                    
                                
                                
                                
                                    ))  
                            }

                            
                           
                        </div>
                        
                    </div>
                     
                    </>

                    
                ) 
                : 
                <Loading/>
        }
        </React.Fragment>
        

    
        </>
    )
}
