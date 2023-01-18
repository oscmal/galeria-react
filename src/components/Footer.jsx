import React from "react";
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
    <footer className="bg-dark text-white p-4 text-center">
        {/* function ActiveExample() { */}
    <>
      <Button variant="primary" size="lg" active className="btn mb-3 cursor-pointer">
        Más Información
      </Button>{' '}
    </>
       <h3>Lugares para Visitar de Ensueños.</h3>
       <p> @2023 Todos los derechos reservados</p>
    </footer>
    );
};

export default Footer;