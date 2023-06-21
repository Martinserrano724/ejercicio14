import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
import {cosultarCrearProducto} from '../../helpers/queries';
import Swal from 'sweetalert2';
const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (productoNuevo) => {
    console.log(productoNuevo);
    cosultarCrearProducto(productoNuevo).then((respuesta) => {
      if (respuesta.status == 201) {
        Swal.fire(
          "Receta Creada !",
          `la Receta ${productoNuevo.nombreProducto}  borrada correctamente.`,
          "success"
        );
      } else {
        Swal.fire(
          "ERROR !",
          `Intente nueva mente`,
          "error"
        );
      }
    });
  };

  return (
    <div className="container mainContenedor ">
      <h1 className="text-center">Nuevo Producto</h1>
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
              required: "La imagen es obligatoria",
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
            placeholder="Ingrese los ingredientes"
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
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default CrearProducto;
