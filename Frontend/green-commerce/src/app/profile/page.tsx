'use client';

import { useEffect, useState } from 'react';
import { FiEye, FiEyeOff, FiUpload } from 'react-icons/fi';
import Link from 'next/link';

export default function ProfilePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
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
    profileImage: '',
    shippingAddress: ''
  });
  const [profilePreview, setProfilePreview] = useState('/profile-placeholder.png');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://3.216.196.163:8081/user/info', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        setFormData(data);
        if (data.profileImage) setProfilePreview(data.profileImage);
      })
      .catch(() => setModalMessage('No se pudo cargar tu perfil'));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('http://3.216.196.163:8082/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Error updating data');
      setModalMessage('Profile updated successfully');
      setEditMode(false);
    } catch (err: any) {
      setModalMessage(err.message);
    } finally {
      setShowModal(true);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setProfilePreview(URL.createObjectURL(file));
    const formDataImg = new FormData();
    formDataImg.append('file', file);

    try {
      const res = await fetch('http://localhost:8083/images/upload', {
        method: 'POST',
        body: formDataImg,
      });
      const data = await res.json();
      setFormData(prev => ({ ...prev, profileImage: data.imageUrl }));
    } catch {
      setModalMessage('Error al subir la imagen');
      setShowModal(true);
    }
  };


  const handleDeleteUser = async () => {
    const token = localStorage.getItem('token');
    setIsDeleting(true);
    try {
      const res = await fetch('http://3.216.196.163:8003/delete-user', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error('No se pudo eliminar la cuenta');

      setModalMessage('Cuenta eliminada correctamente');
      localStorage.removeItem('token');
      window.location.href = '/';
    } catch (err: any) {
      setModalMessage(err.message);
    } finally {
      setIsDeleting(false);
      setShowDeleteConfirm(false);
      setShowModal(true);
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
      {showDeleteConfirm && (
  <div className="fixed inset-0 flex items-center justify-center  bg-gray-300 bg-opacity-40 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
      <h3 className="text-xl font-semibold text-red-700 mb-4">¿Eliminar cuenta?</h3>
      <p className="text-gray-600 mb-6">Perderás todos tus datos. Esta acción no se puede deshacer.</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleDeleteUser}
          disabled={isDeleting}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          {isDeleting ? "Eliminando..." : "Sí, eliminar"}
        </button>
        <button
          onClick={() => setShowDeleteConfirm(false)}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
)}

      <div className="mb-4 rounded-full text-white bg-emerald-700 hover:bg-emerald-800">
        <Link href="/" className="flex items-center px-6 py-4 text-sm font-semibold">
          ← Volver al inicio
        </Link>
      </div>

      <div className="flex justify-between mb-4">
        <span className="text-3xl text-emerald-800 font-playfair font-bold">Green Commerce</span>
      </div>

      <h2 className="text-2xl font-bold px-10">Tu Perfil</h2>

      <div className="w-full max-w-lg p-8">
        <div className="flex justify-center mb-6 relative">
          <img
            src={profilePreview}
            alt="Perfil"
            className="w-40 h-40 rounded-full object-cover border-2 border-emerald-700"
          />
          {editMode && (
            <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer shadow">
              <FiUpload className="text-emerald-700" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>

        {!editMode ? (
          <div className="space-y-6">
            <p><strong>Nombre:</strong> {formData.name} {formData.lastName}</p>
            <p><strong>Fecha de Nacimiento:</strong> {formData.dayBirth} / {formData.monthBirth} / {formData.yearBirth}</p>
            <p><strong>Género:</strong> {formData.gender}</p>
            <p className="text-gray-600"><strong>Email:</strong> {formData.email}</p>
            <p><strong>Teléfono:</strong> {formData.phoneNumber}</p>
            <p><strong>Dirección:</strong> {formData.shippingAddress}</p>
            <button
              onClick={() => setEditMode(true)}
              className="w-full py-3 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition"
            >
              Editar Perfil
            </button>


            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full py-3 bg-gray-400 text-white font-semibold rounded-full hover:bg-red-400 transition"
            >
              Eliminar cuenta
            </button>



          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-2">
              <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} className="flex-1 px-4 py-2 border rounded" />
              <input type="text" name="lastName" placeholder="Apellidos" value={formData.lastName} onChange={handleChange} className="flex-1 px-4 py-2 border rounded" />
            </div>
            <div className="flex space-x-2">
              <input type="number" name="dayBirth" value={formData.dayBirth} onChange={handleChange} className="w-1/3 px-4 py-2 border rounded" />
              <input type="number" name="monthBirth" value={formData.monthBirth} onChange={handleChange} className="w-1/3 px-4 py-2 border rounded" />
              <input type="number" name="yearBirth" value={formData.yearBirth} onChange={handleChange} className="w-1/3 px-4 py-2 border rounded" />
            </div>
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2 border rounded">
              <option value="">Seleccione género</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="Otro">Otro</option>
            </select>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
            <input type="text" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} placeholder="Dirección de envío" className="w-full px-4 py-2 border rounded" />
            <div className="flex space-x-4">
              <button type="submit" className="flex-1 py-3 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition">
                Guardar Cambios
              </button>
              <button type="button" onClick={() => setEditMode(false)} className="flex-1 py-3 bg-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-400 transition">
                Cancelar
              </button>
            </div>
          </form>

        )}



      </div>
    </div>
  );
}
