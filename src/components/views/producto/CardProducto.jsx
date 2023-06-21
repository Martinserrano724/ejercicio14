import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const CardProducto = ({receta}) => {

  return (
    <div className="mainContenedor">
      <Row xs={1} md={2} className="g-4">
       
          <Col >
            <Card className="d-flex justify-content-between">
                <div className="d-flex"><Card.Img variant="top" src={receta.imagen} />
              <Card.Body>
                <Card.Title>{receta.nombreProducto}</Card.Title>
                <Card.Text>
                {receta.procesoDePreparacion}
                </Card.Text>
                <Link className="btn btn-primary" to={`/detalle/${receta.id}`}>Ver mas</Link>
              </Card.Body></div>
              
            
            </Card>
            
          </Col>
       
      </Row>
    </div>
  );
};

export default CardProducto;
