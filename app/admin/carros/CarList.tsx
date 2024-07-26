import React from 'react';
import styles from '../../../components/car/css/CarList.module.css';
import CarListLine from '@/components/car/CarListLine';

interface Car {
  name: string;
  brand: string;
  year: number;
  price: number;
  imgUrl: string;
}

interface CarListSectionProps {
  data: Car[];
}

const CarList: React.FC<CarListSectionProps> = ({ data }) => {
  return (
    <section>
      <div className={styles.container}>
        <h1>Administração de Carros</h1>
        <ul className={styles.carList}>
          {data.map((carro, index) => (
            <li key={carro.name} className={styles.carListItem}>
              <CarListLine
                name={carro.name}
                brand={carro.brand}
                year={carro.year}
                price={carro.price}
                imgUrl={carro.imgUrl}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CarList;