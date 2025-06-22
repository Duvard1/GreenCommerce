'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export default function Home() {
  const [productos, setProductos] = useState<any[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    axios.get('http://TU_API_PRODUCTS/products') // Cambia por tu microservicio real
      .then(response => setProductos(response.data))
      .catch(error => console.error(error));
  }, []);

  const categorias = [
    { nombre: 'Hogar y Estilo de Vida', img: '/category/hogar.webp' },
    { nombre: 'Ropa y Moda Sostenible', img: '/category/moda.webp' },
    { nombre: 'Cuidado Personal', img: '/category/cuidado.webp' },
    { nombre: 'Comida y Bebida Sostenible', img: '/category/comida.webp' },
    { nombre: 'Tecnología', img: '/category/tecnologia.webp' },
    { nombre: 'Bebés y Niños', img: '/category/bebes.webp' },
  ];

  const handleBuscar = () => {
    console.log('Buscando:', busqueda);
    // Aquí puedes hacer la lógica de búsqueda o filtrar productos
  };

  return (
    
    <div className="bg-gray-100 min-h-screen">

      <Header />

      {/* Barra de filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {['Todos', 'Categorías', 'Ofertas', '5 Estrellas', 'Guardado', 'Vender'].map((filtro) => (
          <button
            key={filtro}
            className="px-4 py-2 bg-gray-300 rounded-full hover:bg-emerald-700 hover:text-white text-sm font-medium"
          >
            {filtro}
          </button>
        ))}
      </div>

      {/* Categorías */}
      <h2 className="text-2xl font-bold px-10">Categorías</h2>
      <div className="flex justify-center flex-wrap gap-8 mb-6 p-10">
        {categorias.map((cat) => (
          <div key={cat.nombre} className="flex flex-col items-center">
            <img
              src={cat.img}
              alt={cat.nombre}
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 mb-4"
            />
            <span className="text-center text-sm font-medium">{cat.nombre}</span>
          </div>
        ))}
      </div>

      {/* Productos */}
      <h2 className="text-2xl font-bold mb-4 px-10">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col"
          >
            <img
              src={producto.imageUrl || '/placeholder.png'}
              alt={producto.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-bold mb-1">{producto.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{producto.description || 'Descripción...'}</p>
            <div className="flex items-center mb-2">
              <span className="text-green-600 font-bold text-lg">${producto.price}</span>
              <span className="ml-2 text-sm text-green-500">15% OFF</span>
            </div>
            <p className="text-sm text-gray-500">Marca {producto.brand || 'Sin marca'}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    
  );
}
