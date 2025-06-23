'use client';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Link from 'next/link';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    dayBirth: '',
    monthBirth: '',
    yearBirth: '',
    gender: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');








const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Datos a enviar:', formData);

  fetch('http://44.193.255.85:8081/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al registrar usuario');
      }
      return response.text();
    })
    .then(data => {
      console.log('Respuesta:', data);
      setModalMessage('Usuario registrado exitosamente');
      setShowModal(true);
    })
    .catch(error => {
      console.error(error);
      setModalMessage('Hubo un error al registrar el usuario');
      setShowModal(true);
    });
};

  return (

    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      {showModal && (
  <div className="fixed inset-0  flex items-center justify-center bg-gray-300  z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
      <p className="mb-4 text-lg">{modalMessage}</p>
      <button
        onClick={() => setShowModal(false)}
        className="px-6 py-2 bg-emerald-700 text-white rounded-full hover:bg-emerald-800"
      >
        Cerrar
      </button>
    </div>
  </div>
)}
      <div className="mb-4  rounded-full text-white bg-emerald-700 hover:bg-emerald-800">
        <Link href="/" className="flex items-center px-6 py-4 text-sm font-semibold ">
          ← Volver al inicio
        </Link>
      </div>
      <div className="flex justify-between">
        <span className="text-3xl text-emerald-800 font-playfair font-bold">Green Commerce</span>
      </div>
      <div className="w-full max-w-lg p-8">
        <div className="text-center text-sm mb-4">
          ¿Ya tienes una cuenta?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Inicia sesión
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center">Crear una cuenta</h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Nombre + Apellidos */}
          <div className="flex space-x-2">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellidos"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Fecha de nacimiento */}
          <div className="flex space-x-2">
            <input
              type="number"
              name="dayBirth"
              placeholder="Día"
              value={formData.dayBirth}
              onChange={handleChange}
              required
              min="1"
              max="31"
              className="w-1/3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="number"
              name="monthBirth"
              placeholder="Mes"
              value={formData.monthBirth}
              onChange={handleChange}
              required
              min="1"
              max="12"
              className="w-1/3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="number"
              name="yearBirth"
              placeholder="Año"
              value={formData.yearBirth}
              onChange={handleChange}
              required
              min="1925"
              max="2025"
              className="w-1/3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Género */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Seleccione género</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Otro">Otro</option>
          </select>

          {/* Teléfono */}
          <input
            type="text"
            name="phoneNumber"
            placeholder="Teléfono"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Contraseña */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Texto legal */}
          <p className="text-xs text-gray-600 text-center mt-2">
            Al seleccionar Crear una cuenta personal, aceptas nuestras condiciones de uso y privacidad
          </p>

          {/* Botón submit */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition"
          >
            Crear una cuenta personal
          </button>

        </form>
      </div>
    </div>
  );
}
