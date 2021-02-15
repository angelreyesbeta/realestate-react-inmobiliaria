export const GetPropertys = async() => {
    
    const url='http://www.simi-api.com/ApiSimiweb/response/v2.1.1/filtroInmueble/limite/1/total/8/departamento/0/ciudad/0/zona/0/barrio/0/tipoInm/0/tipOper/0/areamin/0/areamax/0/valmin/0/valmax/0/campo/0/order/0/banios/0/alcobas/0/garajes/0/sede/0/usuario/0';

    const resp=await fetch(url,{
        method:'GET',
        headers:new Headers({
            Authorization:'Basic ' + btoa('Authorization:i1h5nBba9TJ2Sa4v00MPziuQskPA64SPtpLAGnq8-864')
            
             })
             
    })
    const {Inmuebles}=await resp.json();

    const data=Inmuebles.map(elements=>{
        return{
            alcobas:elements.Alcobas,
            barrio:elements.Barrio,
            canon:elements.Canon,
            ciudad:elements.Ciudad,
            codigoInmueble:elements.Codigo_Inmueble,
            departamento:elements.Departamento,
            gestion:elements.Gestion,
            tipoInmueble:elements.Tipo_Inmueble,
            banio:elements.banios,
            descripcion:elements.descripcionlarga,
            image:elements.foto1,
           
        }
    }) 

    

    

    return data;
}
