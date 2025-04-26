import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

import medicamentosImg from '../assets/img/medicamentos.webp';
import personalImg from '../assets/img/personal.webp';
import nutricionImg from '../assets/img/nutricion.webp';
import bellezaImg from '../assets/img/belleza.webp';
import vitaminasImg from '../assets/img/suplementos.webp';

import vitaminas1Img from '../assets/img/vitaminas1.webp';
import personal4Img from '../assets/img/personal4.webp';

function Home() {
  const navigate = useNavigate();

  const featuredCategories = [
    { id: 1, name: 'Medicamentos', image: medicamentosImg },
    { id: 2, name: 'Cuidado Personal', image: personalImg },
    { id: 3, name: 'Nutrición', image: nutricionImg },
    { id: 4, name: 'Belleza', image: bellezaImg },
    { id: 5, name: 'Vitaminas y Suplementos', image: vitaminasImg },
  ];

  const ofertas = [
    {
      id: 1,
      name: 'Centrum Silver Women +50 X 60 Tabletas',
      image: vitaminas1Img,
      originalPrice: 94150,
      discountedPrice: 84700,
    },
    {
      id: 2,
      name: 'Jabon Protex For Men x 110g 3 Und',
      image: personal4Img,
      originalPrice: 12500,
      discountedPrice: 10000,
    },
  ];

  const handleCategoryClick = (category) => {
    navigate(`/productos?categoria=${encodeURIComponent(category)}`);
  };

  return (
    <div className="home-page">
      {/* Banner principal */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a FarmaExpress</h1>
          <p>Tu farmacia online de confianza</p>
          <Link to="/productos" className="cta-button">Ver Productos</Link>
        </div>
      </section>

      {/* Categorías destacadas */}
      <section className="featured-categories">
        <h2 className="section-title">Categorías Destacadas</h2>
        <div className="categories-grid">
          {featuredCategories.map(category => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category.name)}
              style={{ cursor: 'pointer' }}
            >
              <img src={category.image} alt={category.name} className="category-img" />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Ofertas especiales */}
      <section className="promo-section">
        <h2>Ofertas Especiales</h2>
        <p>Descubre nuestras promociones y descuentos exclusivos.</p>

        <div className="offers-grid">
          {ofertas.map((offer) => {
            const descuento = Math.round(((offer.originalPrice - offer.discountedPrice) / offer.originalPrice) * 100);
            return (
              <div key={offer.id} className="offer-card">
                <img src={offer.image} alt={offer.name} className="offer-img" />
                <h3>{offer.name}</h3>
                <div className="price">
                  <span className="original-price">${offer.originalPrice.toLocaleString()}</span>
                  <span className="discounted-price">${offer.discountedPrice.toLocaleString()}</span>
                </div>
                <p className="discount-percent">{descuento}% OFF</p>
                <Link to={`/producto/${offer.id}`} className="btn">
                  Ver producto
                </Link>
              </div>
            );
          })}
        </div>

        <Link to="/productos" className="cta-button secondary">Ver más ofertas</Link>
      </section>
    </div>
  );
}

export default Home;