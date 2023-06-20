import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ItemProducto = ({producto}) => {
    return (
      <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.cantidadPlatos}</td>
      <td>
        <img
          src={producto.Imagen}
          alt=""
          className="imgAdministrador"
        />
      </td>
      <td>
        {producto.ingredientes}
      </td>
      <td>
        <div>
          {" "}
          <Link className="ms-auto btnAgregar btn btn-warning" to='/administrador/editar'>
            Editar
          </Link>
        </div>
        <div>
          {" "}
          <Button variant="danger" className="ms-auto btnAgregar">
            Borrar
          </Button>{" "}
        </div>
      </td>
    </tr>
    );
};

export default ItemProducto;