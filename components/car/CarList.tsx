import React, { useEffect } from 'react';
import styles from '../../components/car/css/CarList.module.css';
import CarListLine from '../../components/car/CarListLine';

interface Car {
  id:string;
  name: string;
  brand: string;
  year: number;
  price: number;
  imgUrl: string;
}

interface CarListSectionProps {
  data: Car[];
}

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Retorna true se o token existir, caso contrário, false
};

const CarList: React.FC<CarListSectionProps> = ({ data }) => {
  
  useEffect(() => {
    if (!isAuthenticated()) {
      window.location.href = '/login'; 
    }
  }, []);

  if (!isAuthenticated()) {
    return null; 
  }
  
  return (
    <section>
      <div className={styles.container}>
        <h1>Administração de Carros</h1>
        <ul className={styles.carList}>
          {data.map((carro) => (
            <li key={carro.name} className={styles.carListItem}>
              <CarListLine
                id={carro.id}
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