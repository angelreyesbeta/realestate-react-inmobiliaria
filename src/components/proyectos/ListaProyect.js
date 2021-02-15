import React from 'react'
import { useConsultPrismic } from '../../hook/useConsultPrismic';
import { ListProyectos } from './ListProyectos';

const type='proyectoso'
const uidPro='uidproyectos'

export const ListaProyect = () => {

    const {doc}=useConsultPrismic(type,uidPro); 

    return (
        <>
         <React.Fragment>
            {
                doc ? (
                <>
                {
                    doc.data.progru.map(elemento=>(
                    <>
                        
                        <ListProyectos
                            titulo={elemento.titulo[0].text}
                            image={elemento.image.url}
                            texto={elemento.texto[0].text}
                        />
                        
                    </>
                    ))
                }
            
        
                </>
                ) : console.log('')
            }
        </React.Fragment>
        </>
    )
}
