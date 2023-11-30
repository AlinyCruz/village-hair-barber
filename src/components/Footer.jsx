import "../components/css/Footer.css";
import logo from "../assets/logo_site.png";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import BotaoSeta from "./BotãoSeta";

const Footer = () => {
  return (
    <footer>
      <nav id="menu-footer">
        <h2>DEUS AMA A TODOS</h2>
        <a href="#main-header"><img src={logo} alt="logo-barber" /></a>
        <br />
        <h2>VILLAGE HAIR NA CABEÇA</h2>
        {/* <a id='seta' href="#main-header"><GoChevronUp size={50} /></a> */}
        <BotaoSeta />
        <br />
        <div id="contatos">
          <a href="https://api.whatsapp.com/send?phone=5511948105703" target="_blank" rel="noreferrer">
            <FaWhatsapp size={50} color="#D9D9D9" />
          </a>
          <a href="https://www.instagram.com/villagehair_barbearia/" target="_blank" rel="noreferrer">
            <FaInstagram size={50} color="#D9D9D9" />
          </a>
        </div>
        <br />
        <img id="pagto-icons" src="https://gifs.eco.br/wp-content/uploads/2023/03/imagens-de-formas-de-pagamento-png-4.png" alt="pagto-icons" />
        <p className="end">Rua Saparás, 107 - São João Clímaco - São Paulo/SP</p>
      </nav>
      <br />
      <h5 id="criador">DESENVOLVIDO POR<a href="https://www.linkedin.com/in/aliny-cruz-dev/" target="_blank" rel="noreferrer">ALINE CRUZ © 2023</a></h5>
    </footer>
  );
};

export default Footer;
