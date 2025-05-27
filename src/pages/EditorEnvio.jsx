import { useEffect, useState } from "react";
import {alertaRedireccion,alertaGeneral} from "../helpers/funciones";
import { useNavigate, useParams } from "react-router-dom";
let apiEnvios = "https://back-json-server-martes.onrender.com/envios/";
import './EditorEnvio.css'


const EditarEnvio =() => {
    const [envio,setEnvio] = useState("");
    const [producto,setProducto] = useState("");
    const [destino,setDestino] = useState("");
    let redireccion = useNavigate();
    let {id} = useParams() /*Destructuracion de objetos*/
    console.log(id);

    function getEnvioId(){
    fetch(apiEnvios + id)
      .then((response) => response.json())
      .then((data) => {
        setEnvio(data.idEnvio);
        setProducto(data.producto);
        setDestino(data.destino);
      })
      .catch((error) => console.log(error));
    }

    useEffect(() => {
    getEnvioId();
  }, []);
    function editarEnvio(){

    }

    return(
        <form class="form">
        Sign Up
    <input value={envio} type="text" class="input" placeholder="Id Envio"/>
    <input value={producto}type="text" class="input" placeholder="Producto"/>
    <input value={destino}type="text" class="input" placeholder="Destino"/> 
    <button type="button">Submit</button>
</form>
    )
}

export default EditarEnvio