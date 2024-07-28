'use client';

import { useFormState, useFormStatus } from 'react-dom';
import styles from '../login/css/LoginForm.module.css';
import { useState } from 'react';



const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    return !!token; 
  }
  return false;
};


export default function Page() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login falhou. Verifique suas credenciais');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); 
      window.location.href = '/admin/carros';
    } catch (error) {
      setErrorMessage('Login falhou. Verifique suas credenciais');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login - Area Administrativa</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="username" placeholder="usuario" required className={styles.input} />
        <input type="password" name="password" placeholder="Password" required className={styles.input} />
        <div>{errorMessage && <p>{errorMessage}</p>}</div>
        <LoginButton />
      </form>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return <button type="submit" disabled={pending} className={styles.input}>Entrar</button>;
}

