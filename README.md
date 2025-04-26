# Aplicación Web de Farmacia - FarmaExpress

## Descripción del Proyecto
FarmaExpress es una aplicación web desarrollada con React.js que simula una tienda en línea de productos farmacéuticos. La aplicación permite a los usuarios navegar por un catálogo de medicamentos, ver detalles de cada producto, realizar búsquedas y gestionar un carrito de compras.

# Consumo de Datos

Este proyecto simula el consumo de una API usando axios. Aunque los datos no provienen de una API pública externa, se utiliza la librería axios para realizar peticiones a un archivo JSON local (productos.json), lo que permite simular el flujo de información en una aplicación real de comercio electrónico. Esta implementación demuestra el manejo de datos dinámicos y asíncronos, como si se estuviera obteniendo información de una API externa.

## Estructura del Código

### Componentes Principale
- **Navbar.js**: Barra de navegación superior con la barra de navegación principal.
- **Footer.js**: Pie de página con información de contacto y enlaces.

### Páginas
 **App.js**: Componente principal que define las rutas y la estructura general de la aplicación.
- **Home.js**: Página principal con secciones destacadas y promociones.
- **ProductList.js**: Página que muestra la lista de productos disponibles.
- **ProductDetail.js**: Página con información detallada de un producto específico.
- **Cart.js**: Página donde se gestiona el carrito de compras.



### Tecnologías Utilizadas

### Principales
- **React.js**: Biblioteca JavaScript para construir interfaces de usuario.
- **React Router DOM**: Para la navegación entre páginas.
- **JavaScript +**: Para la lógica de programación.
- **Axios +**: Para realizar petición HTTP al archivo local
- **CSS**: Para los estilos y diseño responsivo.

### Características Implementadas
- Interfaz de usuario interactiva y responsiva
- Uso de componentes funcionales en React
- Simulación de consumo de API
- Navegación entre páginas con React Router
- Aplicación de estilos CSS
- Código estructurado y modular



## Instalación y Ejecución Local

### Requisitos Previos
- Node.js y npm instalados en tu sistema

### Pasos para Ejecutar
1. Clonar el repositorio:
   ```
   git clone https://github.com/tu-usuario/farmacia-app.git
   ```

2. Navegar al directorio del proyecto:
   ```
   cd farmacia-app
   ```

3. Instalar dependencias:
   ```
   npm install
   ```

4. Iniciar la aplicación:
   ```
   npm start
   ```

5. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## Funcionalidades
- **Navegación**: Menú intuitivo para acceder a las diferentes secciones.
- **Catálogo de Productos**: Visualización de productos disponibles.
- **Búsqueda**: Filtrado de productos por nombre.
- **Carrito de Compras**: Gestión de productos seleccionados para compra.

## Posibles Mejoras Futuras
- Implementación de autenticación de usuarios
- Integración con una API real
- Sistema de pagos
- Historial de pedidos
- Reseñas y calificaciones de productos


Proyecto realizado por [Bryhan Cardona Moncada y Diana Lorena Henao Arias].
