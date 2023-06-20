import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemProducto from "./producto/ItemProducto";
import { useEffect,useState } from "react";
const Administrador = () => {

  const [producto,setProducto]=useState
  useEffect
  return (
    <div className="container  my-5">
        <div className="d-flex my-3">
      <h3>Productos disponibles</h3>
      
      <Button variant="primary" className='ms-auto btnAgregar'>Agregar</Button>{' '}</div>
      <hr />
      <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
           <ItemProducto></ItemProducto>
          </tbody>
        </Table>
    </div>
  );
};

export default Administrador;
