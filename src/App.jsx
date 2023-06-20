import { useState } from "react";

import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import DettalleProducto from "./components/views/DettalleProducto";
import Error404 from "./components/views/Error404";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import Registro from "./components/views/Registro";
import Login from "./components/views/Login";
import Administrador from "./components/views/Administrador";
import Inicio from "./components/views/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          {
            //Routes listado de routas
          }
          <Route exact path="/" element={<Inicio></Inicio>} />
          <Route
            exact
            path="/administrador"
            element={<Administrador></Administrador>}
          />
          <Route exact path="/registro" element={<Registro></Registro>} />
          <Route exact path="/login" element={<Login></Login>} />
          <Route
            exact
            path="/administrador"
            element={<Administrador></Administrador>}
          />
          <Route
            exact
            path="/administrador/crearProducto"
            element={<CrearProducto></CrearProducto>}
          />
          <Route
            exact
            path="/administrador/editarProducto"
            element={<EditarProducto></EditarProducto>}
          />
          <Route
            exact
            path="/detalleProducto"
            element={<DettalleProducto></DettalleProducto>}
          />
          <Route exact path="*" element={<Error404></Error404>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
