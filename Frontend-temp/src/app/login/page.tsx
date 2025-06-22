'use client';
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');


const [toastMessage, setToastMessage] = useState('');
const [showToast, setShowToast] = useState(false);

  


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:8082/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const contentType = response.headers.get('content-type');

    if (!response.ok) {
      // Leer texto plano si es error
      const errorText = await response.text();
      throw new Error(errorText);
    }

    let token: string;

    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      token = data.token;
    } else {
      token = await response.text();
    }

    if (!token || token.toLowerCase().includes('error')) {
      throw new Error('Credenciales inválidas');
    }

    localStorage.setItem('token', token); //se guarda el token en localStorage
setToastMessage('Inicio de sesión exitoso');
setShowToast(true);

// Redirige luego de 5 segundos
setTimeout(() => {
  setShowToast(false);
  window.location.href = '/';
}, 5000);

  } catch (error: any) {
setToastMessage(error.message || 'Hubo un error al iniciar sesión');
setShowToast(true);

setTimeout(() => {
  setShowToast(false);
}, 5000);
  }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300 z-50">
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

      <div className="mb-4 rounded-full text-white bg-emerald-700 hover:bg-emerald-800">
        <Link href="/" className="flex items-center px-6 py-4 text-sm font-semibold">
          ← Volver al inicio
        </Link>
      </div>

      <div className="flex justify-between">
        <span className="text-3xl text-emerald-800 font-playfair font-bold">Green Commerce</span>
      </div>

      <div className="w-full max-w-lg p-8">
        <div className="text-center text-sm mb-4">
          ¿No tienes una cuenta?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Regístrate
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Botón submit */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
{showToast && (
  <div className="fixed bottom-5 right-5 bg-emerald-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in">
    {toastMessage}
  </div>
)}


    </div>
  );
}
