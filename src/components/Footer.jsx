import "../components/css/Footer.css";
import logo from "../assets/logo_site.png";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <nav id="menu-footer">
        <h2>DEUS AMA A TODOS</h2>
        <a href="#home"><img src={logo} alt="logo-barber" /></a>
        <br />
        <h2>VILLAGE HAIR NA CABEÇA</h2>
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
        <p>Rua Saparás, 107 - São João Clímaco - São Paulo/SP</p>
      </nav>
      <br />
      <h5 id="criador">DESENVOLVIDO POR<a href="https://github.com/AlinyCruz" target="_blank" rel="noreferrer">ALINE CRUZ © 2023</a></h5>
    </footer>
  );
};

export default Footer;
