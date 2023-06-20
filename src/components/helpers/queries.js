import { Await } from "react-router-dom";

// para el login vamos a hacer una peticion get ya que usaremos json server
const URL_USUARIO = import.meta.env.VITE_API_USUARIO;
const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO;

export const login = async (usuario)=>{
    console.log(usuario);
    try{
        const respuesta = await fetch(URL_USUARIO);
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios);
        //buscar si en la listaUsuarios hay un usuario como el que recibi por parametro
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            console.log('Email encontrado');
            //verificar el password
            if(usuarioBuscado.password === usuario.password){
                console.log('encontramos al usuario!!!')
                return usuarioBuscado;
            }else{
                console.log('password incorrecto');
                return null;
            }
        }else{
            console.log('email incorrecto');
            return null
        }

    }catch (error){
        console.log(error);
        return null;
    }
}
export  const  obtenerProductos = async ()=>{
    try {
        const respuesta=await fetch(URL_PRODUCTO);
        const listaProducto = await respuesta.json();
        return listaProducto;
    } catch (error) {
        console.log(error);
    }
}