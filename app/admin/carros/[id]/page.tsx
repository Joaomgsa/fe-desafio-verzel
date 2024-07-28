'use client';

import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import styles from 'CarEditForm.module.css';





const EditCarPage: React.FC =() => {
    const { id } = useParams<{ id: string }>();
    const [carData, setCarData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    description: '',
    imgUrl: '',
    year:'',
    price: '',

  });

  useEffect(() => {
    // Função para buscar dados do carro pela API
    const fetchCarData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/carros/${id}`);
        const result = await response.json();
        console.log(result);
        setCarData(result);
        setFormData({
          name: result.name,
          brand: result.brand,
          description: result.description,
          imgUrl: result.imgUrl,
          year: result.year,
          price: result.price
        });
      } catch (error) {
        console.error('Erro ao buscar dados do carro:', error);
      }
    };

    fetchCarData();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/carros/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Dados do carro atualizados com sucesso!');
      } else {
        alert('Erro ao atualizar dados do carro.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados do carro:', error);
    }
  };

  if (!carData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="form-group">
    <form className="form">
      <div className="form-group">
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Modelo:
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Descrição:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Link Imagem:
          <input
            type="text"
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleChange}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Ano:
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Preço R$:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-input"
          />
        </label>
      </div>
      <button type="submit" className="form-button" onSubmit={handleSubmit}>Atualizar</button>
    </form>
  </div>
  );
};

export default EditCarPage;

