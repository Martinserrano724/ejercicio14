import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemProducto from "./producto/ItemProducto";
import { useEffect , } from "react";
import { obtenerProductos } from "../helpers/queries";
const Administrador = () => {

  
  const [producto ,setProductos] = useState([])
  useEffect(()=>{
    obtenerProductos().then((respuesta)=>{
      console.log(respuesta)
      setProductos(respuesta);
      // todo: resolver la situacion cuando no puedo realizar la conexion a la API
    })
  },[])
  return (
 
    <section className="container mainSection">
    <div className="d-flex justify-content-between align-items-center mt-5">
      <h1 className="display-4 ">Productos disponibles</h1>
      <Button className="btn btn-primary" to='/administrar/crear'>
        Agregar
      </Button>
    </div>
    <hr />
    <Table responsive striped bordered hover>
      <thead>
      <tr>
            <th>Cod</th>
            <th>Receta</th>
            <th>Cant Platos</th>
            <th>Img</th>
            <th className="text-truncate">Ingrediente</th>
            <th>Opciones</th>
          </tr>
      </thead>
      <tbody>{
        producto.map((prod )=> <ItemProducto key={prod.id} producto={prod}></ItemProducto>)
        }
      
      </tbody>
    </Table>
  </section>
  );
};

export default Administrador;
