import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductList.css';
import axios from 'axios';

function ProductList({ agregarAlCarrito }) {
  const location = useLocation();

  // Estado para productos
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);  // Para mostrar un loading mientras se cargan los productos
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {

    // Cargar productos desde el archivo JSON
    axios.get('/productos.json')
      .then(response => {
        setProductos(response.data);  // Guardamos los productos en el estado
        setLoading(false);  // Quitamos el loading cuando los productos se cargan
      })
      .catch(error => {
        console.error('Error al cargar los productos:', error);
        setLoading(false);  // En caso de error, también removemos el loading
      });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoriaURL = params.get('categoria');
    if (categoriaURL) {
      setSelectedCategory(categoriaURL);
    }
  }, [location.search]);

  const quitarTildes = (texto) =>
    texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const filteredProducts = productos.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === '' ||
      quitarTildes(product.category.toLowerCase()) === quitarTildes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="product-list-page">
      <h1>Lista de Productos</h1>

      {/* Barra de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Filtro de categorías */}
      <div className="filter-container">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="">Todas las categorías</option>
          <option value="Medicamentos">Medicamentos</option>
          <option value="Cuidado Personal">Cuidado Personal</option>
          <option value="Nutrición">Nutrición</option>
          <option value="Belleza">Belleza</option>
          <option value="Vitaminas y Suplementos">Vitaminas y Suplementos</option>
        </select>
      </div>

      {/* Lista de productos filtrados */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button className="cta-button" onClick={() => agregarAlCarrito(product)}>
                Agregar al carrito
              </button>
            </div>
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;