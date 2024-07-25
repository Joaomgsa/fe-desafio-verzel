import CarForm from '@/components/car/CarForm';
import React from 'react';


const CreateCarPage: React.FC = () => {
  return (
    <div>
      <h1>Criar Novo Carro</h1>
      <CarForm />
    </div>
  );
};

export default CreateCarPage;