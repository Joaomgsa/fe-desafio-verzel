import Image from 'next/image';
import styles from './CarCard.module.css';


interface CarCardProps {
  name: string;
  brand: string;
  year: number;
  price: number;
  imgUrl: string;
  description: string;
}

const CarCard: React.FC<CarCardProps> = ({ name, brand, year, price, imgUrl, description }) => {
  return (
    <div className={styles.carCard}>
      <Image src={imgUrl} alt={name} width={200} height={200} />
      <h3>{name}</h3>
      <p>Marca: {brand}</p>
      <p>Ano: {year}</p>
      <p>Preço: R$ {price}</p>
      <p>Descrição: {description}</p>
    </div>
  );
};

export default CarCard;