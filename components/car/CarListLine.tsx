import React from 'react';
import Image from 'next/image';
import styles from '../car/css/CarList.module.css';
import { deleteCarById } from '@/lib/actions';

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
      <div className={styles.detailsContainer}>
        <Image src={imgUrl} alt={name} width={80} height={80} />
        <h3>{name}</h3>
        <p>Marca: {brand}</p>
        <p>Ano: {year}</p>
        <p>Preço: R$ {price}</p>
        <button className={styles.editButton} onClick={handleEdit}>Editar</button>
        <button className={styles.deleteButton} onClick={handleDelete}>Excluir</button>
      </div>

    </div>
  );
};

export default CarListLine;