import React from 'react';
import Image from 'next/image';
import styles from '../car/css/CarList.module.css';


interface CarListLineProps {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  imgUrl: string;
}

const CarListLine: React.FC<CarListLineProps> = ({ id, name, brand, year, price, imgUrl }) => {
  const handleDelete = async () => {
    await deleteCarById(id);
    window.location.href = '/admin/carros';
  };

  const handleEdit = () => {
    window.location.href = `/admin/carros/${id}`;
  }

  return (
    <div className={styles.carCard}>
      <Image src={imgUrl} alt={name} width={120} height={120} />
      <div className={styles.detailsContainer}>
        <div className={styles.infoContainer}>
          <h3>{name}</h3>
          <p>Marca: {brand}</p>
          <p>Ano: {year}</p>
          <p>Preço: R$ {price}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.editButton} onClick={handleEdit}>Editar</button>
          <button className={styles.deleteButton} onClick={handleDelete}>Excluir</button>
        </div>
      </div>

    </div>
  );
};

export default CarListLine;


const deleteCarById = async (carId: string) =>{
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('Token não encontrado');
    return;
  }

  try {
    const response = await fetch(`http://localhost:8080/carros/${carId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }

    console.log('Carro deletado com sucesso');
  } catch (error) {
    console.error('Erro ao deletar o carro:', error);
  }
}
