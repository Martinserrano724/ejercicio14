import React from 'react';
import error404 from '../../assets/error404.jpg'
import Button from 'react-bootstrap/Button';
const Error404 = () => {
    return (
        <div className='text-center mb-5'>
            <img src={error404} alt=""  className='h-100'/>
            <div> <Button variant="primary">Regresar</Button>{' '}</div>
        </div>
    );
};

export default Error404;