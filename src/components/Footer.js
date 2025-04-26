// src/components/Footer.js
import React from 'react';
import './Footer.css';  // Asegúrate de crear el archivo CSS para estilos

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 FarmaExpress. Todos los derechos reservados.</p>
        <p>
          <a href="/about">Sobre nosotros</a> | <a href="/contact">Contacto</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;