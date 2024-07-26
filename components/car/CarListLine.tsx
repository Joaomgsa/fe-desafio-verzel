import React from 'react';
import Image from 'next/image';
import styles from '../car/css/CarList.module.css';

interface CarListLineProps {
    name: string;
    brand: string;
    year: number;
    price: number;
    imgUrl: string;
  }
  
  const CarListLine: React.FC<CarListLineProps> = ({ name, brand, year, price, imgUrl }) => {
    return (
      <div className={styles.carCard}>
        <div className={styles.detailsContainer}>
        <Image src={imgUrl} alt={name} width={80} height={80} />
            <h3>{name}</h3>
          <p>Marca: {brand}</p>
          <p>Ano: {year}</p>
          <p>Preço: R$ {price}</p>
          <button className={styles.editButton}>Editar</button>
          <button className={styles.deleteButton}>Excluir</button>
        </div>
        
      </div>
    );
  };
  
  export default CarListLine;