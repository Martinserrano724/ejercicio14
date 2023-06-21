import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
  //preguntar si el usuario no esta logueado
  if(!usuarioLogueado){
    //lugar donde ira por no estar logueado
    return <Navigate to={'/login'}></Navigate>
  }else{

    if(usuarioLogueado.tipo=='admin'){
      return children;
    }else{
      return <Navigate to={'/error404'}></Navigate>
    }
   
  }
};

export default RutasProtegidas;