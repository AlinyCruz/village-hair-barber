import "../components/css/Footer.css";
import logo from "../assets/logo_site.png";

const Footer = () => {
  return (
    <footer>
      <nav id="menu-footer">
        <h2>DEUS AMA A TODOS</h2>
        <a href="#home"><img src={logo} alt="logo-barber" /></a>
        <br />
        <h2>VILLAGE HAIR NA CABEÇA</h2>
        <br />
        <a href="https://www.google.com/maps/@-23.6218449,-46.593941,3a,75y,157.03h,79.8t/data=!3m6!1e1!3m4!1s6MtDOf7T68aQKWwKA2u5_g!2e0!7i16384!8i8192?entry=ttu" target="_blank" rel="noreferrer">RUA SAPARÁS, 107 - SÃO JOÃO CLÍMACO - SÃO PAULO/SP</a>
      </nav>
      <br />
      <h5 id="criador">DESENVOLVIDO POR<a href="https://github.com/AlinyCruz" target="_blank" rel="noreferrer">ALINE CRUZ © 2023</a></h5>
    </footer>
  );
};

export default Footer;
