import { useState } from 'react'

import './App.css'
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import DettalleProducto from './components/views/DettalleProducto'
import Error404 from './components/views/Error404'
import CrearProducto from './components/views/producto/CrearProducto'
import EditarProducto from './components/views/producto/EditarProducto'
import Administrador from './components/views/Administrador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu></Menu>
   <Administrador></Administrador>
      <Footer></Footer>
    </>
  )
}

export default App
