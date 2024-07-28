import React, { useEffect, useState } from 'react';
import styles from '../../components/car/css/CarListAdmin.module.css';
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
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return !!token; 
  }
  return false;
};


const CarList: React.FC<CarListSectionProps> = ({ data }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(isAuthenticated());
  }, []);


  if (!isAuth) {
    return <div className={styles.centered}><p>Você não está autenticado.</p></div>;
  }

  return (
    <section>
      <div className={styles.container}>
        <h1>Lista de Carros</h1>
        <ul className={styles.carList}>
          {data.map((carro) => (
            <li key={carro.id} className={styles.carListItem}>
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