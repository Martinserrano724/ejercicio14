import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const CardProducto = () => {
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <Card className="d-flex justify-content-between">
                <div className="d-flex"><Card.Img variant="top" src="https://cdn7.kiwilimon.com/ss_secreto/4727/320x320/4727.jpg.webp" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="primary">Ver mas</Button>
              </Card.Body></div>
              
            
            </Card>
            
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardProducto;
