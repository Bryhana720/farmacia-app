import React from 'react';
import { useParams } from 'react-router-dom';
import personal4Img from '../assets/img/personal4.webp';
import vitaminas1Img from '../assets/img/vitaminas1.webp';
import '../pages/ProductDetail.css';

const productos = [
  {
    id: 1,
    name: 'Centrum Silver Women +50 X 60 Tabletas',
    description: ' El cuidado ideal para tu organismo lo tienes con Centrum Silver Women y su fórmula especializada para mujeres mayores de 50 años.',
    price: 94.150,
    originalPrice: 84.700, // Precio original
    image: vitaminas1Img,
    category: 'Vitaminas y Suplementos',
  },
  {
    id: 2,
    name: 'Jabon Protex For Men x 110g 3 Und',
    description: 'Jabón Antibacterial Protex Men Sport 110g X 3Und',
    price: 12.500,
    originalPrice: 10.000, // Precio original
    image: personal4Img,
    category: 'Cuidado Personal',
  },
];

function ProductDetail({ agregarAlCarrito }) {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) return <p>Producto no encontrado</p>;

  // Cálculo del porcentaje de descuento
  const descuento = ((producto.originalPrice - producto.price) / producto.originalPrice) * 100;
  const descuentoPorcentaje = Math.round(descuento); // Redondeamos al número entero más cercano

  return (
    <div className="product-detail-container">
      <img
        src={producto.image}
        alt={producto.name}
        className="product-image"
      />
      <div className="product-info">
        <h2>{producto.name}</h2>

        {/* Sección de descripción */}
        <div className="product-description">
          <h3>Descripción del Producto</h3>
          <p>{producto.description}</p>
        </div>

        {/* Precios */}
        <div className="product-prices">
          <p className="product-price">${producto.price.toLocaleString()}</p>
          <p className="product-original-price">
            <span>Precio normal: </span>${producto.originalPrice.toLocaleString()}
          </p>
          {/* Mostrar el porcentaje de descuento */}
          <p className="discount-percent">{descuentoPorcentaje}% OFF</p>
        </div>

        {/* Botón para agregar al carrito */}
       {/* Botón para agregar al carrito */}
       <button 
          className="add-to-cart-btn"
          onClick={() => agregarAlCarrito(producto)} // <<-- Aquí lo agregamos
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
