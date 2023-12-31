import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { eliminarProductoSeccionStorage, obtenerProductos } from '../../helpers/queries';
const ItemProducto = ({producto,setProductos}) => {

  const borrarProducto = (producto)=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: `¿esta seguro de eliminar la receta: ${producto.nombreProducto}?`,
      text: "no se puede revertir este paso",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        
       //aqui realizo la peticion delete
       eliminarProductoSeccionStorage(producto._id).then((result)=>{
        if(result.status === 200){
          swalWithBootstrapButtons.fire(
            'Borrado !',
            `Receta ${producto.nombreProducto}  borrada correctamente.`, 
           'success'
         );
         //se actualiza el state para recargar los productos
         obtenerProductos().then((result)=>setProductos(result))

        }
        else{
          swalWithBootstrapButtons.fire(
            'ERROR !',
               `Intente nueva mente`, 
           'error'
         )
        }
       })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          `No se elimino la receta: ${producto.nombreProducto} :)`,
          'error'
        )
      }
    })
  }


    return (
      <tr className='mainContenedor'>
      <td>{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td>{producto.cantidadPlatos}</td>
      <td>
        <img
          src={producto.imagen}
          alt=""
          className="imgAdministrador"
        />
      </td>
      <td>
        {producto.ingrediente}
      </td>
      <td>
        <div>
          {" "}
          <Link className="ms-auto btnAgregar btn btn-warning" to={`/administrador/editar/${producto._id}`}>
            Editar
          </Link>
        </div>
        <div>
          {" "}
          <Button variant="danger" className="ms-auto btnAgregar" onClick={()=>borrarProducto(producto)}>
            Borrar
          </Button>{" "}
        </div>
      </td>
    </tr>
    );
};

export default ItemProducto;