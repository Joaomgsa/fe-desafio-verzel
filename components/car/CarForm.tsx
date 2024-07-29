import React, { useState, useEffect } from 'react';
import styles from '../car/css/CarForm.module.css';

const CarForm: React.FC = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description, setDescription] = useState('');
  const [brands, setBrands] = useState<{ id: number, name: string }[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const response = await fetch('http://localhost:8080/brands');
      const result = await response.json();
      setBrands(result);
    };
    fetchBrands();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const carData = {
      id: null,
      name,
      brand,
      year: parseInt(year),
      price: parseFloat(price),
      imgUrl,
      description,
    };

    const token = localStorage.getItem('token')

    if (token == null || token =='' || token == undefined) {
      window.location.href = '/login';
    }

    const response = await fetch('http://localhost:8080/carros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
      body: JSON.stringify(carData),
    }
  );

  console.log('RESPOSTA_REQUISICAO: '+JSON.stringify(response), 'BODY :' + JSON.stringify(carData), 'TOKEN: ' + token, 'HEADERS : ', JSON.stringify(response.headers));
    if (response.ok) {
      alert('Carro criado com sucesso!');
      setName('');
      setBrand('');
      setYear('');
      setPrice('');
      setImgUrl('');
      setDescription('');
    } else {
      alert('Erro ao criar o carro.');
      console.log(carData);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Marca:</label>
          <select value={brand} onChange={(e) => setBrand(e.target.value)} required>
            <option value="">Selecione uma marca</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Ano:</label>
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Preço:</label>
          <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>URL da Imagem:</label>
          <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Descrição:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Criar Carro</button>
      </form>
    </div>
  );
};

export default CarForm;