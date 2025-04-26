import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Agregamos esto
import './Cart.css';

function Cart({ cart, eliminarDelCarrito, cambiarCantidad, setCart }) {
  const navigate = useNavigate(); // <-- Creamos el navigate

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Tu carrito está vacío.');
      return;
    }

    const confirmacion = window.confirm(`¿Deseas proceder con el pago de $${calcularTotal()}?`);
    if (confirmacion) {
      alert('¡Gracias por tu compra!');
      setCart([]); // Limpiar el carrito
      localStorage.removeItem('cart'); // Limpiar el localStorage
      navigate('/'); // <-- Redirigir a la página principal
    }
  };

  return (
    <div className="cart-page">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Precio unitario: ${item.price}</p>
                <div className="cart-controls">
                  <button onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}>-</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => eliminarDelCarrito(item.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ${calcularTotal()}</h2>

          {/* Botón de Checkout */}
          <button className="checkout-button" onClick={handleCheckout}>
            Pagar
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;