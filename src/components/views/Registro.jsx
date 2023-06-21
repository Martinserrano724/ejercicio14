import React from 'react';
import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import {crearUsuario} from  '../helpers/queries';
import { useNavigate } from "react-router-dom";
const Registro = () => {
  const navegacion = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (usuarioNuevo) => {
    crearUsuario(usuarioNuevo).then((respuesta) => {
      if (respuesta.status == 201) {
        Swal.fire(
          "Usuario Creado !",
          `el Usuario ${usuarioNuevo.nombreUsuario} correctamente.`,
          "success"
        );
        navegacion('/login');
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
      <Container className="mainSection mainContenedor">
      <Card className="my-5">
        <Card.Header as="h5">Registro</Card.Header>
        <Card.Body>
          <Form  onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese un Nombre" {
                ...register('nombreUsuario',{
                  required: 'El Nombre es obligatorio',
                  minLength: {
                    value: 2,
                    message: "La cantidad minima de caracteres es de 2 ",
                  },
                  maxLength: {
                    value: 100,
                    message: "La cantidad minima de caracteres es de 2 ",
                  },
                })
              } />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese un email" {
                ...register('email',{
                  required: 'El email es obligatorio',
                  pattern:{
                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: 'El email debe contener @ y terminar . com/es/com.ar u otra terminacion'
                  }
                })
              } />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" {
                ...register('password',{
                  required: 'El password es obligatorio',
                  pattern:{
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: 'El password debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 numero) también puede incluir carácteres especiales'
                  }
                })
              } />
               <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Registrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    );
};

export default Registro;