import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
const CrearProducto = () => {
  return (
    <div className="container ">
        <h1 className="text-center">Nuevo Producto</h1>
        <hr />
      <Form className="bgForm m-3 p-3">
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nombre Receta</Form.Label>
          <Form.Control type="text" placeholder="ingrese el nombre de la receta" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Imagen de la Receta</Form.Label>
          <Form.Control type="text" placeholder="ingrese la imagen de la receta" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Cantidad de Platos</Form.Label>
          <Form.Control type="number" placeholder="Ingrese el total de platos" min={1} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Ingredientes</Form.Label>
          <Form.Control type="text" placeholder="Ingrese los ingredientes"  as="textarea" rows={3}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Proceso de Preparacion</Form.Label>
          <Form.Control type="text" placeholder="Proceso de Preparacion"  as="textarea" rows={3}  />
        </Form.Group>
        <Button variant="primary" type="submit">
        Enviar
      </Button>
        
      </Form>
    </div>
  );
};

export default CrearProducto;
