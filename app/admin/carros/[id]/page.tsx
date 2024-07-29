'use client';

import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import styles from './EditCarPage.module.css';
import { useFormStatus } from 'react-dom';




const EditCarPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [carData, setCarData] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        brand: '',
        description: '',
        imgUrl: '',
        year: '',
        price: '',

    });

    useEffect(() => {
        const fetchCarData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/carros/${id}`);
                const result = await response.json();
                console.log(result);
                setCarData(result);
                setFormData({
                    id: result.id,
                    name: result.name,
                    brand: result.brand,
                    description: result.description,
                    imgUrl: result.imgUrl,
                    year: result.year,
                    price: result.price
                });
            } catch (error) {
                console.error('Erro ao buscar dados do carro:', error);
            }
        };

        fetchCarData();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formObject: { [key: string]: any } = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        const requestBody = JSON.stringify(formObject);
        try {
            const response = await fetch(`http://localhost:8080/carros/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: requestBody,
            });

            console.log(response.status)

            if (!response.ok) {
                if (response.status >= 400) {
                    window.location.href = '/login';
                }
                throw new Error('Envio falhou.');
            }

            if(response.ok){

                window.location.href = '/admin/carros';
            }
            
        } catch (error) {
            console.error('Login falhou. Verifique suas credenciais', error);
        }
    };

    if (!carData) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Editar Carro</h1>
                <div className={styles.group}>
                    <label>
                        Cod. Carro: </label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        className={styles.input}
                        disabled
                    />
                </div>
                <div className={styles.group}>
                    <label>
                        Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}

                    />
                </div>
                <div className={styles.group}>
                    <label>
                        Modelo: </label>
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        className={styles.input}
                    />
                </div>
                <div className={styles.group}>
                    <label>
                        Descrição:</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.group}>
                    <label>
                        Link Imagem:</label>
                    <input
                        type="text"
                        name="imgUrl"
                        value={formData.imgUrl}
                        onChange={handleChange}
                        className={styles.input}
                    />

                </div>
                <div className={styles.group}>
                    <label>
                        Ano:</label>
                    <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className={styles.input}
                    />

                </div>
                <div className={styles.group}>
                    <label className={styles.label}>
                        Preço R$:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <UpdateButton />
            </form>
        </div>
    );
};

export default EditCarPage;

function UpdateButton() {
    const { pending } = useFormStatus();
    return <button type="submit" disabled={pending} className={styles.input}>Atualizar</button>;
}

