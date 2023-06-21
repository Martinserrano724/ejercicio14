import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const CardProducto = ({ receta }) => {
  return (


        <Card className="  col-md-4 col-lg-5 m-1 p-0 m-0 rounded-4 h-100 contenedorCard">
          <div className="d-flex">
            <div className="imgDetalle"><Card.Img variant="top" src={receta.imagen}  /></div>
            
            <Card.Body>
              <Card.Title>{receta.nombreProducto}</Card.Title>
              <Card.Text>{receta.procesoDePreparacion}</Card.Text>
              <Link className="btn btn-primary" to={`/detalle/${receta.id}`}>
                Ver mas
              </Link>
            </Card.Body>
          </div>
        </Card>


  );
};

export default CardProducto;
