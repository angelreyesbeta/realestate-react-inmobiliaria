const { useContext } = require("react");
const { PropertyContex } = require("../../contex/PropertyContext");

export const ConsultPropertyId = (code) => {
    const {state} =useContext(PropertyContex)
    const {data}=state;
    return data.find(property=>property.codigoInmueble===code)
}

