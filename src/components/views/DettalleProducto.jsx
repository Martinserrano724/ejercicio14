import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { obtenerProductosMostrar } from "../helpers/queries";

const DettalleProducto = () => {
  const {id}=useParams();

const [nombre ,setNombre]=useState('');
const [imagen ,setImagen]=useState('');
const [proceso ,setProceso]=useState('');
const [ingredientes ,setIngredientes]=useState('');
const [platos ,setPlatos]=useState('');


  useEffect(() => {
     console.log(id);
  console.log('-------------');
    obtenerProductosMostrar(id).then((respuesta) => {
      console.log(respuesta)
      setNombre(respuesta.nombreProducto);
      setImagen(respuesta.imagen);
      setIngredientes(respuesta.ingrediente);
      setPlatos(respuesta.cantidadPlatos);
      setProceso(respuesta.procesoPreracion);
      });
    }, []);

  return (
    <div className="container mainContenedor">
      <div className="text-center">
        <h1 className="text-center"><strong>{nombre}</strong> </h1>
        <img
          src={imagen}
          alt=""
          className="w-50 "
        />
      </div>
      
      <div>
     
        <h3 className="text-center"><strong>Ingredientes</strong> </h3>
       
        {ingredientes}
      </div>
      <div>
      <h3 className="text-center"><strong>Proceso</strong> </h3>
      <p>Cantidad de prociones para {platos} personas</p>
        {proceso}
      </div>
    </div>
  );
};

export default DettalleProducto;
