import React from 'react';
import error404 from '../../assets/error404.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <div className='text-center mb-5'>
            <img src={error404} alt=""  className='h-100'/>
            <div> 
            <Link className="btn btn-primary" to='/'>
            Regresar
      </Link>
            </div>
        </div>
    );
};

export default Error404;