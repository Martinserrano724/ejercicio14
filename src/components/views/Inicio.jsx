import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import CardProducto from "./producto/CardProducto";

const Inicio = () => {
    return (
        <div>
            <Carousel className=" ">
        <Carousel.Item interval={3000} className="contenedorCarrusel">
          <img
            className="d-block  "
            src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-fancy-coffee-background-material-image_134209.jpg"
            alt="cafe"
            width={"100%"}
            height={"400px"}
          />
          
        </Carousel.Item>
        <Carousel.Item interval={3000}  className="contenedorCarrusel">
          <img
            className="d-block   "
            src="https://apasionados-por-el-cafe.s3.amazonaws.com/wp-content/uploads/2020/10/15-09-BannersPreparacionesCoctelesCafe-Escritorio-Apasionados-1.png"
            alt="Second slide"
            width={"100%"}
            height={"400px"}
          />
         
        </Carousel.Item>
        <Carousel.Item  className="contenedorCarrusel">
          <img
            className="d-block  "
            src="https://st4.depositphotos.com/1835807/22599/i/600/depositphotos_225991768-stock-photo-coffee-banner-collage-with-espresso.jpg"
            alt="Third slide"
            width={"100%"}
            height={"400px"}
          />
          
        </Carousel.Item>
      </Carousel>
      <h3 className="text-center">Nuestros Productos</h3>
      <section className="my-5 container d-flex justify-content-around "> <CardProducto></CardProducto></section>
        </div>
    );
};

export default Inicio;