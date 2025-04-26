import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';



// Páginas
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [cart, setCart] = useState(() => {
    // Inicialización del estado con localStorage
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error al cargar el carrito desde localStorage:", error);
      return [];
    }
  });

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCart(currentCart => {
      const productInCart = currentCart.find(item => item.id === producto.id);
      
      if (productInCart) {
        // Si el producto ya está en el carrito, incrementamos su cantidad
        return currentCart.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        // Si el producto no está en el carrito, lo agregamos con cantidad 1
        return [
          ...currentCart,
          {
            ...producto,
            cantidad: 1,
          }
        ];
      }
    });
  };

  // Función para eliminar productos del carrito
  const eliminarDelCarrito = (productoId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productoId));
  };

  // Función para cambiar la cantidad de un producto
  const cambiarCantidad = (productoId, cantidad) => {
    if (cantidad <= 0) {
      eliminarDelCarrito(productoId);
    } else {
      setCart(currentCart => 
        currentCart.map(item =>
          item.id === productoId ? { ...item, cantidad } : item
        )
      );
    }
  };

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Carrito guardado en localStorage:", cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart || []} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/productos" 
            element={<ProductList agregarAlCarrito={agregarAlCarrito} />} 
          />
          <Route 
            path="/carrito" 
            element={
              <Cart 
                cart={cart || []} 
                eliminarDelCarrito={eliminarDelCarrito} 
                cambiarCantidad={cambiarCantidad} 
                setCart={setCart} ></Cart>
            } 
          />
          <Route 
  path="/producto/:id" 
  element={<ProductDetail agregarAlCarrito={agregarAlCarrito} />} 
/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;