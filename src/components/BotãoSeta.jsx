import { useState, useEffect } from 'react';
import './css/BotaoSeta.css';
import { GoChevronUp } from "react-icons/go";

const BotaoSeta = () => {
  const [mostrarBotao, setMostrarBotao] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setMostrarBotao(window.scrollY > 100); // Ajuste o valor conforme necessário
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`botao-seta ${mostrarBotao ? 'visivel' : ''}`}
      onClick={scrollToTop}
    >
      < GoChevronUp />
    </button>
  );
};

export default BotaoSeta;
