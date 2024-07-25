import React, { useState, useEffect } from 'react';

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
      id:null,
      name,
      brand,
      year: parseInt(year),
      price: parseFloat(price),
      imgUrl,
      description,
    };

    const response = await fetch('http://localhost:8080/carros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
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
      <div>
        <label>Ano:</label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
      </div>
      <div>
        <label>Preço:</label>
        <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>URL da Imagem:</label>
        <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} required />
      </div>
      <div>
        <label>Descrição:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">Criar Carro</button>
    </form>
  );
};

export default CarForm;