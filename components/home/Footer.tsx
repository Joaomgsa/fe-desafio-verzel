import React from 'react';
import styles from '../home/css/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Teste Verzel. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;