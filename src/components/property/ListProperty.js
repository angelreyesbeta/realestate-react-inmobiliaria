import React, { useContext } from 'react'
import queryString from 'query-string'

import { useLocation } from 'react-router-dom'
import { PropertyContex } from '../../contex/PropertyContext'
import { useForm } from '../../hook/useForm'
import { Loading } from '../loading/Loading'

//import { GetPropertys } from './data/GetPropertys'
import { ListPropertyItem } from './ListPropertyItem'

export const ListProperty = ({history}) => {

    const location=useLocation();
    const {q = ''} = queryString.parse(location.search);

    const [{searchText},handleInputChange]=useForm({
        searchText:q
    });

    const {state} =useContext(PropertyContex)
    const {data}=state;

    const propertyFiltered=data.filter(property=>property.codigoInmueble.includes(searchText))
   

    const handleSearch=(e)=>{
        e.preventDefault();
     
       history.push(`?q=${searchText}`);
    }
    return (
       // console.log(state.loading),
        <>   
            {state.loading&&<p className="container">
                <Loading/>
            </p>}
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                    <h1>Busca tu inmueble</h1>
                    <hr/>
                            <form onSubmit={handleSearch}>
                                <input
                                    type="text"
                                    name="searchText"
                                    placeholder="Ingresa el codigo"
                                    className="form-control"
                                    value={searchText}
                                    autoComplete="off"
                                    onChange={handleInputChange}

                                />
                                {/* <button
                                    type="submi"
                                    className="btn m-1 btn-block btn-outline-primary"
                                    
                                >
                                    Search
                                </button> */}

                            </form>
                    </div>

                </div>
                <div className="row mt-3">
                    <div className="col-lg-12">

                    {
                        (propertyFiltered.length===0)
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }



                        <div className="card-columns">
                            {
                                propertyFiltered.map((propertys,index)=>(
                                 
                                    <ListPropertyItem
                                        index={index+1}
                                        {...propertys}
                                    />
                                ))
                            }

                        </div>
                    </div>

                </div>

               

            </div>
        </>
    )
}
