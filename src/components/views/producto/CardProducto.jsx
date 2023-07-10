import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const CardProducto = ({ receta }) => {
  
  return (


        <Card className="  col-md-4 col-lg-5 m-1 p-0 m-0 rounded-4   h-100">
          <div className="d-flex h-100 ">
            <div className="imgDetalle"><Card.Img variant="top" src={receta.imagen}  /></div>
            
            <Card.Body className=" ">
              <Card.Title>{receta.nombreProducto}</Card.Title>
              <Card.Text className="">{receta.procesoDePreparacion}</Card.Text>
              <Link className="btn btn-primary" to={`/detalle/${receta._id}`}>
                Ver mas
              </Link>
            </Card.Body>
          </div>
        </Card>


  );
};

export default CardProducto;
