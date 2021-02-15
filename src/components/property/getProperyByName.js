const { useContext } = require("react");
const { PropertyContex } = require("../../contex/PropertyContext");

export const getProperyByName = (code) => {
    const {state} =useContext(PropertyContex)
    const {data}=state;

    code=code.toLocaleLowerCase();
    return data.filter(property=>property.codigoInmueble.toLocaleLowerCase().includes(code))

}
