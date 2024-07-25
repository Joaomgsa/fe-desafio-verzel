'use client';

import React, { useEffect, useState } from 'react';
import MenuHeader from "@/components/home/header";
import CarCard from '@/components/car/CarCard';
import styles from './CarList.module.css';
import CarCatalog from '@/components/car/CarCatalog';

async function getCarrosData() {
  try {
    const res = await fetch('http://localhost:8080/carros');
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const data = await res.json();
    console.log(data.content);
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Erro de rede ou problema de CORS:', error.message);
    } else {
      console.error('Erro ao buscar dados dos carros:', error);
    }
    throw error;
  }
}

export default function Carros() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const carrosData = await getCarrosData();
        setData(carrosData.content || []);
      } catch (error) {
        console.error('Erro ao buscar dados dos carros:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <MenuHeader />
      <CarCatalog data={data} />
    </>
  );
}