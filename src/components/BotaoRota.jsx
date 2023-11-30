import './css/BotaoSeta.css';

const BotaoRota = () => {
  const urlRota = 'https://www.google.com/maps/dir//BARBEARIA+VILLAGE+HAIR/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce5b628e60d0c9:0x2efa7633ee1f8c47!2m2!1d-46.593888299999996!2d-23.6218666';

  const abrirRota = () => {
    window.open(urlRota, '_blank');
  };

  return (
    <button className='btn' onClick={abrirRota}>
      Ver Rotas
    </button>
  );
};

export default BotaoRota;
