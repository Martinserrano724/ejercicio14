import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ItemProducto from "./producto/ItemProducto";
const Administrador = () => {
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
      <tbody>
       <ItemProducto></ItemProducto>
      </tbody>
    </Table>
  </section>
  );
};

export default Administrador;
