import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Mantenemos el import de estilos

function Navbar({ cart }) {
  // Añadir protección contra valores undefined o nulos
  const safeCart = Array.isArray(cart) ? cart : [];
  
  // Contamos cuántos productos hay en el carrito (suma las cantidades)
  const cantidadTotal = safeCart.reduce(
    (total, item) => total + (item.cantidad || 0), 
    0
  );

  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li>
          <Link to="/carrito">
            Carrito 
            {cantidadTotal > 0 && (
              <span className="cart-count">({cantidadTotal})</span>  /* Mostramos el número de productos */
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;