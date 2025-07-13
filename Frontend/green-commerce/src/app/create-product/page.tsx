// app/create-product/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { ENDPOINTS } from '@/lib/api/endpoints';


export default function CreateProductPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    brand: "",
    category: "",
    image_url: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
      // en el futuro se usará imageFile en lugar de image_url
    }
  };
console.log("Formulario que se envía:", formData);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  let imageUrl = "";

  if (imageFile) {
    const uploadForm = new FormData();
    uploadForm.append("image", imageFile);

    try {
      const uploadResponse = await fetch(ENDPOINTS.PRODUCT.UPLOAD_IMAGE, {
        method: "POST",
        body: uploadForm,
      });

      const uploadResult = await uploadResponse.json();
      imageUrl = uploadResult.url;
    } catch (uploadError) {
      console.error("Error uploading image:", uploadError);
      setToastMessage("Error al subir imagen");
      setLoading(false);
      return;
    }
  }

  // Aquí armamos el objeto actualizado fuera del bloque if
  const updatedData = {
    ...formData,
    image_url: imageUrl || null, // null si no subió nada
  };

  try {
    const response = await fetch(ENDPOINTS.PRODUCT.CREATE_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          mutation CreateProduct($data: ProductInput!) {
            createProduct(data: $data)
          }
        `,
        variables: {
          data: updatedData,
        },
      }),
    });

    const result = await response.json();

    if (result.errors) {
      console.log("GraphQL error", result.errors);
      throw new Error(result.errors[0].message);
    }

    setToastMessage("Producto creado correctamente");
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  } catch (error: any) {
    console.log("ERROR GraphQL", error);
    setToastMessage(error.message || "Error al crear producto");
    setTimeout(() => setToastMessage(""), 3000);
  } finally {
    setLoading(false);
  }
};


  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl w-full bg-white shadow-lg p-8 rounded-md flex flex-col" >

        <div className="mb-4 mx-auto rounded-full  max-w-sm text-white bg-emerald-700 hover:bg-emerald-800">
          <Link href="/" className="flex justify-center  items-center px-6 py-4 text-center text-sm font-semibold">
            ← Volver al inicio
          </Link>
        </div>
        <div className="flex justify-between">
          <span className="text-3xl mx-auto mb-4 text-emerald-800 font-playfair font-bold">Green Commerce</span>
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center">Vender un Producto</h1>

        {/* Imagen */}
        <div className="mb-6">
          <label className="block font-medium  mb-1">
            Imagen del producto
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
          {preview && (
            <img
              src={preview}
              alt="Vista previa"
              className="mt-3 w-full h-48 object-cover rounded"
            />
          )}
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Nombre del producto</label>
            <input
              name="name"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Descripción</label>
            <textarea
              name="description"
              className="w-full p-2 border rounded"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Precio</label>
            <input
              name="price"
              type="number"
              step="0.01"
              className="w-full p-2 border rounded"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Stock</label>
            <input
              name="stock"
              type="number"
              className="w-full p-2 border rounded"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Marca</label>
            <input
              name="brand"
              className="w-full p-2 border rounded"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-medium  mb-1">Categoría</label>
            <input
              name="category"
              className="w-full p-2 border rounded"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
          >
            {loading ? "Creando..." : "Publicar producto"}
          </button>

          {toastMessage && (
            <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-emerald-100 text-emerald-800 px-6 py-2 rounded shadow-lg z-50 text-sm font-semibold">
              {toastMessage}
            </div>
          )}

        </form>
      </div>

    </main>

  );
}
