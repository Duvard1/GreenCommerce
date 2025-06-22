'use client';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { FiBell, FiShoppingCart, FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi';



export default function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [busqueda, setBusqueda] = useState('');

    const categorias = [
        { nombre: 'Hogar y Estilo de Vida' },
        { nombre: 'Ropa y Moda Sostenible' },
        { nombre: 'Cuidado Personal' },
        { nombre: 'Comida y Bebida Sostenible' },
        { nombre: 'Tecnología' },
        { nombre: 'Bebés y Niños' },
    ];

    const handleBuscar = () => {
        console.log('Buscando:', busqueda);
    };


    return (
        <div className="flex justify-between flex-col items-center bg-gray-100 ">
            {/* Elemento 1: Texto con links */}
            <div className='flex bg-gray-100 px-10 pt-3'>
                {!isLoggedIn && (
                    <div className="text-sm">
                        ¡Hola!{' '}
                        <Link href="/login" className="text-emerald-700 font-semibold hover:underline">
                            Inicia Sesión
                        </Link>{' '}
                        o{' '}
                        <Link href="/register" className="text-emerald-700 font-semibold hover:underline">
                            Regístrate
                        </Link>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-3 py-1 px-10 mb-6 rounded-lg shadow-md gap-4 w-full">
                {/* Logo */}
                <div className="flex items-center justify-center w-full">
                    <div className="flex items-center justify-center w-1/2">
                        <span className="text-base font-playfair font-bold text-emerald-700">Green Commerce</span>
                    </div>
                    {/* Desplegable */}
                    <div className="relative w-1/2">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center px-4 py-1  rounded hover:bg-gray-300 w-34 text-left text-sm cursor-pointer"
                        >
                            Comprar Por Categoría
                            {dropdownOpen ? (
                                <FiChevronUp className="ml-2" />
                            ) : (
                                <FiChevronDown className="ml-2" />
                            )}
                        </button>
                        {dropdownOpen && (
                            <div className="absolute bg-gray-100 border-gray-300 rounded-xl shadow-lg text-sm w-48 z-10">
                                {categorias.map((cat) => (
                                    <div
                                        key={cat.nombre}
                                        className="px-4 py-2 hover:bg-gray-300 cursor-pointer"
                                        onClick={() => {
                                            console.log('Seleccionado:', cat.nombre);
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {cat.nombre}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {/* Barra de búsqueda */}
                <div className="flex items-center justify-center bg-gray-300 rounded-full h-10 overflow-hidden my-auto">
                    <div className="flex items-center p-4 ">
                        <FiSearch />
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar artículos"
                        className="flex-grow text-sm focus:outline-none "
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
                <div className='flex items-center justify-center w-full gap-12'>
                    <button
                        onClick={handleBuscar}
                        className="bg-emerald-700  text-white p-4 hover:bg-emerald-800 transition w-25 h-10 flex items-center justify-center rounded-full"
                    >
                        Buscar
                    </button>
                    {/* Elementos 2 y 3: Iconos */}
                    <div className="flex items-center space-x-8 text-xl">
                        {/* Campana de notificaciones */}
                        <button className="relative hover:text-emerald-700 transition-colors">
                            <FiBell />
                        </button>
                        {/* Icono de carrito */}
                        <button className="relative hover:text-emerald-700 transition-colors">
                            <FiShoppingCart />
                        </button>
                        {isLoggedIn && (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className="flex items-center space-x-2 transition-colors"
                                >
                                    <img
                                        src="/profile-placeholder.png"
                                        alt="profile"
                                        className="w-8 h-8 rounded-full object-cover border border-gray-300 hover:border-emerald-700 hover:border-2"
                                    />
                                </button>
                                {menuOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-gray-100 border-gray-300 rounded-xl shadow-lg z-50 text-sm">
                                        <Link href="/profile" className="block px-6 py-2 hover:bg-gray-300">
                                            Ver Perfil
                                        </Link>
                                        <Link href="/reseñas" className="block px-6 py-2 hover:bg-gray-300">
                                            Tus Reseñas
                                        </Link>
                                        <Link href="/pedidos" className="block px-6 py-2 hover:bg-gray-300">
                                            Tus Pedidos
                                        </Link>
                                        <button
                                            onClick={() => {
                                                localStorage.clear();
                                                window.location.href = '/';
                                            }}
                                            className="w-full text-left px-6 py-2 hover:bg-gray-300"
                                        >
                                            Cerrar Sesión
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}