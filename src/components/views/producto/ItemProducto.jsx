import React from 'react';

const ItemProducto = () => {
    return (
      <tr>
      <td>1</td>
      <td>Pulpo a la plancha</td>
      <td>3</td>
      <td>
        <img
          src="https://i.blogs.es/f0476b/pulpo-a-la-plancha-pakus-futurobloguero/1366_2000.jpg"
          alt=""
          className="imgAdministrador"
        />
      </td>
      <td>
        Pulpo cocido 3 tentáculos o patas Puré de patatas al gusto Dientes
        de ajo para la ajada 2 Pimentón dulce para la ajada Aceite de
        oliva virgen extra para la ajada, 4 cucharadas soperas Sal en
        escamas para servir
      </td>
      <td>
        <div>
          {" "}
          <Button variant="warning" className="ms-auto btnAgregar">
            Editar
          </Button>{" "}
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