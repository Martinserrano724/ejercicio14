import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate} from 'react-router-dom';


const Menu = ({usuarioLogueado,setUsuarioLogueado}) => {
  const navegacion = useNavigate();

const logout = ()=>{
  //borrar del sessionStorage
  sessionStorage.removeItem('usuario');
  setUsuarioLogueado({});
  navegacion('/');
}


  return (
    <div>
        <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Receta de La Abuela</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className='nav-item nav-link' to={'/'}>Inicio</NavLink>
           
            {
              usuarioLogueado.email ?(
                <>
                {
                  
                    usuarioLogueado.tipo=='admin'? <NavLink end className='nav-item nav-link' to={'/administrador'}>Administrador</NavLink>:<></>
                  
                }
                
                <Button variant="dark" onClick={logout}>Logout</Button>
                </>
              ):<>
               <NavLink end className='nav-item nav-link' to={'/registro'}>Registro</NavLink>
              <NavLink end className='nav-item nav-link' to={'/login'}>Login</NavLink></>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Menu;
