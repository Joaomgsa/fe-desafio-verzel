'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '../lib/actions';
import styles from '../login/css/LoginForm.module.css';

function authenticateWrapper(state: string | null | undefined, payload: string): Promise<string | null> {
  const [username, password] = payload.split(':');
  return authenticate(username, password);
}

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticateWrapper, null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    dispatch(`${username}:${password}`);
  };

  return (
    <>
      <div className={styles.container}>
      <h1 className={styles.title}>Login - Area Administrativa</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="username" placeholder="usuario" required className={styles.input} />
        <input type="password" name="password" placeholder="Password" required className={styles.input}/>
        <div>{errorMessage && <p>{errorMessage}</p>}</div>
        <LoginButton />
      </form>
      </div>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return <button type="submit" disabled={pending} className={styles.input}>Entrar</button>;
}