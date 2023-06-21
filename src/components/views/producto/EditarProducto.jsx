import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { consultaEditarProducto, obtenerProductosEditar } from '../../helpers/queries';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
const EditarProducto = () => {
  const {id}=useParams();
  //useParams se encarga de conseguir los parametros del link
const {
  register,
  handleSubmit,
  formState:{errors},
  reset,
  setValue
}=useForm();

const navegacion = useNavigate();
useEffect(() => {
 
  obtenerProductosEditar(id).then((respuesta) => {
    setValue('nombreProducto',respuesta.nombreProducto);
    setValue('imagen',respuesta.imagen);
    setValue('ingredientes',respuesta.ingredientes);
    setValue('cantidadPlatos',respuesta.cantidadPlatos);
    setValue('cantidadPlatos',respuesta.cantidadPlatos);
    setValue('procesoDePreparacion',respuesta.procesoDePreparacion);
    });
  }, []);

const onSubmit=(productoEditado)=>{
  console.log(productoEditado);
  consultaEditarProducto(productoEditado,id).then((result)=>{
    if(result.status === 200 && result){
      Swal.fire(
        "Receta Editada !",
        `la Receta ${productoEditado.nombreProducto}  se edito correctamente.`,
        "success"
      );
      navegacion('/administrador');
    } else {
      Swal.fire(
        "ERROR !",
        `Intente nueva mente`,
        "error"
      );}
  });
}

    return (
        <div className="container mainContenedor">
        <h1 className="text-center">Editar Producto</h1>
        <hr />
      <Form className="bgForm m-3 p-3" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="">
          <Form.Label>Nombre Receta</Form.Label>

          <Form.Control
            type="text"
            placeholder="ingrese el nombre de la receta"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
              maxLength: {
                value: 100,
                message: "La cantidad minima de caracteres es de 2 digitos",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Imagen de la Receta</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingrese la imagen de la receta"
            {...register("imagen", {
              required: "La imagen es obligatoria",pattern:{
                value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp)$/,
                message: 'la imagen debe ser un link y terminar jpg o gif o png o webp'
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
          <Form.Label>Cantidad de Platos</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el total de platos"
            min={1}
            {...register("cantidadPlatos", {
              required: "El cantidadPlatos del producto es obligatorio",
              min: {
                value: 1,
                message: "la cantidad de platos es minimo es de 1",
              },
              max: {
                value: 100,
                message: "la cantidad de platos es maximo es de 100",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.cantidadPlatos?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Ingredientes</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingrese separado por un - los ingredientes"
            as="textarea"
            rows={3}
            {...register("ingredientes", {
              required: "los ingredientes de la Receta es obligatorio",
              minLength: {
                value: 10,
                message:
                  "los ingredientes de la Receta es minimo es de 10 caracteres",
              },
              maxLength: {
                value: 10000,
                message:
                  "los ingredientes de la Receta es maximo es de 10000 caracteres",
              },
             
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Proceso de Preparacion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Proceso de Preparacion"
            as="textarea"
            rows={3}
            {...register("procesoDePreparacion", {
              required: "El procesoDePreparacion de la Receta es obligatorio",
              minLength: {
                value: 10,
                message:
                  "El procesoDePreparacion de la Receta es minimo es de 10",
              },
              maxLength: {
                value: 1000,
                message:
                  "El procesoDePreparacion de la Receta es maximo es de 1000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.procesoDePreparacion?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
        Guardar
      </Button>
        
      </Form>
    </div>
    );
};

export default EditarProducto;