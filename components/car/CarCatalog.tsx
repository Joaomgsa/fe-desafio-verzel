import React from 'react';
import CarCard from './CarCard';
import styles from '../car/css/CarList.module.css';

interface Car {
  name: string;
  brand: string;
  year: number;
  price: number;
  imgUrl: string;
  description: string;
}

interface CarListSectionProps {
  data: Car[];
}

const CarCatalog: React.FC<CarListSectionProps> = ({ data }) => {
  return (
    <section>
      <div className={styles.container}>
        <h1>Escolha Seu próximo carro aqui</h1>
        <ul className={styles.carList}>
          {data.map((carro, index) => (
            <li key={carro.name} className={styles.carListItem}>
              <CarCard
                name={carro.name}
                brand={carro.brand}
                year={carro.year}
                price={carro.price}
                imgUrl={carro.imgUrl}
                description={carro.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CarCatalog;